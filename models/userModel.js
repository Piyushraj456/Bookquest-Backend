import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true, 
       

    }
},{timestamps:true})
const User=mongoose.model('User',userSchema);
export default User;


/*  validate: {
            validator: function(value) {
                // Password must be at least 8 characters long
                // and contain at least one uppercase letter, one lowercase letter
                // and one digit or special character
                return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value);
            },
            message: props => `${props.value} is not a valid password. Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit or special character.`
        }*/ 