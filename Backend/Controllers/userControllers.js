//import User from "../Middlewars/user"
import { log } from "console";
import User from "../Modals/user.js";
import bcrypt from "bcrypt";

//user register
export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let checkEmail = await User.findOne({ email });
    if (checkEmail) return res.json({ message: "User already exist" });

    const hashPassword = await bcrypt.hash(password, 10);

    let user = await User.create({ name, email, password: hashPassword });
    res.json({ message: "User regestation successfully", user, success: true });
  } catch (error) {
    res.json({ message: error.message });
  }
};
//user login
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) return res.json({ message: "User Not Found", success: false });
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword)
      return res.json({ message: "password not valid", success: false });
    res.json({ message: `welcome ${user.name}`, success: false, user });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//get all user

export const allUser= async (req,res)=>{
    try {
        let allUser = await User.find().sort({createdAt:-1})
        res.json(allUser)
        
    } catch (error) {
        res.json({message:error.message})
    }
}