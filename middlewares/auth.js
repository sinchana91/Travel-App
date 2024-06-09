import jwt from 'jsonwebtoken';
import  User  from '../models/User.js';
import dotenv from 'dotenv';
dotenv.config();
const auth=async(req,res,next)=>{
    try{
        const token=req.header('Authorization').replace('Bearer ','');
        console.log(token);
        const data=jwt.verify(token,process.env.SECRET_KEY);
        console.log(data)
        const user=await User.findById(data.user_id);
        console.log(user);
        if(!user){
            throw new Error();
        }
        req.user=user;
        req.token=token;
        next();
    }catch(error){
        console.log(error);
        res.status(401).send({error:'Not authorized to access this resource'});
    }
};
export default auth;
