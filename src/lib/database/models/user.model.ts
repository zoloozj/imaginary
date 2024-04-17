import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  username: { type: String, unique: true, required: true },
  photo: { type: String, required: true },
  firstname: { type: String },
  lastname: { type: String },
  planId: { type: Number, default: 1 },
  creditBalance: { type: Number, default: 10 },
});

const User = models?.User || model("User", UserSchema);

export default User;
