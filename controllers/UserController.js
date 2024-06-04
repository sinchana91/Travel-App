const User=require('../models/User');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');

const signUp=async (req,res)=>{
    const {name,email,password}=req.body;
    try{
        const user=new User({name,email,password});
        await user.save();
        const token=jwt.sign({user_id:user._id},process.env.JWT_SECRET);
        res.status(201).json({token});
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
};

const login=async (req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({error:'Invalid email or password'});
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({error:'Invalid email or password'});
        }
        const token=jwt.sign({user_id:user._id},process.env.JWT_SECRET);
        res.status(200).json({token});
    }catch(err){
        res.status(400).json({error:err.message});
    }
};
//get user by id
const getUser=async (req,res)=>{
    try{
        const user=await User.findById(req.user_id);
        res.status(200).json(user);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

//get user by name
const getUserByName=async (req,res)=>{
    try{
        const user=await User.findOne({name:req.params.name});
        res.status(200).json(user);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};
//get all the users
const getAllUsers=async (req,res)=>{
    try{
        const users=await User.find();
        res.status(200).json(users);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};
//update user info

const updateUser=async (req,res)=>{
    try{
        const user=await User.findByIdAndUpdate(req.user_id,req.body,{new:true});
        res.status(200).json(user);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
};

module.exports={signUp,login,getUser,getUserByName,updateUser,getAllUsers};