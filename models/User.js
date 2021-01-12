const { Schema, model } = require("mongoose")

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    name:String,
    avatar: String,
    password: String,
    email: String,
  },
  { timestamps: true }
);
module.exports = model("User", UserSchema);