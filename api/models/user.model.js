import mongoose from 'mongoose';

// below we are creating conditions or "rules" for our users

 const userSchema = new mongoose.Schema ({

    username: {

        type: String,
        required: true,
        unique: true,

    },

    email: {

        type: String,
        required: true,
        unique: true,
    },

    password: {

        type: String,
        required: true,
    },
    }, {timestamps: true}

    
);

const User = mongoose.model('User', userSchema); 

export default User;