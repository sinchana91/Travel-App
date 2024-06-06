import User from '../models/User.js';
import jsonwebtoken from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
const { sign } = jsonwebtoken;
const { hash, compare } = bcryptjs;

export const signUp = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }
        const hashedPassword = await hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        const token = sign({ user_id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({ token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }
        const isMatch = await compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }
        const token = sign({ user_id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get user by id
export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);  // Use req.params.id instead of req.user_id
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get user by name
export const getUserByName = async (req, res) => {
    try {
        const user = await User.findOne({ name: req.params.name });
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update user info
export const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });  // Use req.params.id instead of req.user_id
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
