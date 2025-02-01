import UserModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils.js";


export const registerUser = async (req, res) => {
    const { email, password, fullName, userRole } = req.body

    try {
        if (!email || !password || !fullName) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if(password.length < 8) {
            return res.status(400).json({ message: "Password must be atleast 8 characters" });
        }

        const isEmailUnique = await UserModel.findOne({ email })

        if (isEmailUnique) return res.status(400).json({ message: "Email is taken" });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new UserModel({
            fullName,
            email,
            password: hashedPassword,
            userRole,
        });

        if (newUser) {
            await newUser.save();
            return res.status(201).json({
                message: "You are registered"
            })
        } else {
            return res.status(400).json({ message: "Invalid user data" });
        }

    } catch(error) {
        console.log("Error in auth controller", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
    
      if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const user = await UserModel.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      const isPasswordCorrect = await bcrypt.compare(password, user.password);


      if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      const token = generateToken(user._id, res);
  
      return res.status(200).json({
        token,
        user: {
            id: user._id,
            fullName: user.fullName,
            email: user.email,
            role: user.userRole,
        },
        message: "Logged in successfully",
      });
    } catch (error) {
        console.log("Error in auth controller", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const logoutUser = (req, res) => {
    try {
      res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in auth controller", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getLoggedInUser = async (req, res) => {
    try {
        const { _id, fullName, email, userRole } = req.user;

        res.status(200).json({
            id: _id,
            fullName,
            email,
            role: userRole,
        });
    } catch(error) {
        console.log("Error in auth controller", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

