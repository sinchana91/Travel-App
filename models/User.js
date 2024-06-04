const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide your password'],
        minlength: 6,
        select: false
    },
    phone_number:{
        type:String
    },
    date_of_birth:{
        type:Date
    },
});
//before saving hash the password
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});

const User=mongoose.model('User',userSchema);
module.exports=User;