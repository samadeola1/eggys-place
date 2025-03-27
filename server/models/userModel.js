import mongoose from "mongoose";
import validator from "validator"
import bcrypt from "bcryptjs"

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email address is required"],
      unique: [true, "Email already in use"],
      trim: true,
      lowercase: true,
      //   validator imported from npm.js
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is inavlid");
        }
      },
    },
    password: {
      type: String,
      trim: true,
      minlength: [8, "min password length must be 8 chrs"],
      validate(value) {
        if (value.toLowerCase().includes("password")) {
          throw new Error("password must not contain password");
        }
      },
    },
    role: {
      type: String,
      enum: ["customer", "admin"],
      default: "customer",
    },
  },
  { timestamps: true }
);
// hasfing password
userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next()
    }
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt)
})

const USER = mongoose.model("user", userSchema);
export default USER;
