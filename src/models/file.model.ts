import mongoose, { Schema, Document } from "mongoose";

export interface IFileDoc extends Document {
  filename: string;
  path: string;
  size: number;
}

const fileSchema = new Schema<IFileDoc>({
  filename: { type: String, required: true },
  path: { type: String, required: true },
  size: { type: Number, required: true }
});

export const FileModel = mongoose.model<IFileDoc>("files", fileSchema);