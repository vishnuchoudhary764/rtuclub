import mongoose, { Schema, Document } from "mongoose";

export interface INewUser extends Document {
  email: string;
  password: string;
  fullname: string;
  role: string;
  passkey: string;


}

const UserSchema = new Schema<INewUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullname: { type: String, required: true },
  role: { type: String, required: false },
  passkey: { type: String, required: false },

});

export default mongoose.models.NewUser || mongoose.model<INewUser>("NewUser", UserSchema);
