import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";
import { config } from 'dotenv'
config()

export const protectRoute = async (req, res, next) => {
  try {
      const authHeader = req.headers.authorization;

      if (!authHeader || !authHeader.startsWith("Bearer ")) {
          return res.status(401).json({ message: "Unauthorized: No token provided" });
      }

      const token = authHeader.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await UserModel.findById(decoded.id).select("-password");
      if (!user) {
          return res.status(401).json({ message: "Unauthorized: User not found" });
      }

      req.user = user;
      next();

  } catch (error) {
      console.error("Authentication error:", error);
      res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};
