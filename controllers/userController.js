import User from "../models/userModel.js";
import bcrypt from 'bcrypt';

export const signup = async(req, res) => {
    try {
        const { name, email, password } = req.body;
        const user =await  User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User Already Registered" });
        }
        const hashPassword=await bcrypt.hash(password,10)
        const createUser = new User({
            name:name, email:email, password:hashPassword,
        });
        await createUser.save();
        res.status(201).json({ 
            message: "User Created Successfully",
            user: {
                _id: createUser._id,
                name: createUser.name,
                email: createUser.email
            }
        });
    } catch (error) {
        console.log({ Error: error.message });
        res.status(500).json({ message: "Internal Server Error" });
    }
};


export const login = async(req,res)=>{
   try {
       const {email,password}=req.body 
       const user=await User.findOne({email});
       const isMatch=await bcrypt.compare(password,user.password)
       if(!user ||!isMatch) {
        return res.status(400).json({message: "Invalid Username or Password"})
       }
       else{
         res.status(200).json({message:"Login Successfully",user:{
            id:user._id,
            name:user.name,
            email:user.email
         }})
       }


   } catch (error) {
    console.log({'Error': error.message})
    res.status(500).json({message: "Internal Server Error"})
   }
}