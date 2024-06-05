import { Schema, model } from 'mongoose';
import bcryptjs from 'bcryptjs';

const hash=bcryptjs.hash;

const userSchema = new Schema({
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
// userSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) {
//         next();
//     }
//     const hash = await _hash(this.password, 10);
//     this.password = hash;
//     next();
// });

const User=model('User',userSchema);
export default User;