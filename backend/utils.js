import jwt from "jsonwebtoken";
import { config } from 'dotenv'
config()

export const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};