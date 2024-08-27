import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        maxLength: 8,
    },
    img: {
        type: String,
    },
    membership: {
        type: Boolean,
    },
    email: {
        type: String,
        trim: true,
        unique: 1,
    },
    password: {
        type: String,
        minLength: 5,
    },
    ratings: [
        {
            id: {
                type: Number,
                required: true,
            },
            rating: {
                type: Number,
                required: true,
            },
        }
    ],
    wishlist: [
        {
            id: {
                type: Number,
                required: true,
            }
        }
    ],
    watchlist: [
        {
            id: {
                type: Number,
                required: true,
            }
        }
    ],
    reviews: [
        {
            name: {
                type: String,
                required: true,
            },
            reviewId: {
                type: Number,
                required: true,
            },
            id: {
                type: Number,
                required: true,
            },
            date: {
                type: String,
                required: true,
            },
            content: {
                type: String,
                required: true,
                minlength: 1,
                maxLength: 1000,
            }
        }
    ]
});

UserSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
      return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

UserSchema.methods.comparePassword = async function(candidatePassword){
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
}

export default mongoose.model('User', UserSchema);