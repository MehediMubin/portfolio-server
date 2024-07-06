import { Document, ObjectId } from "mongoose";

export interface TSkill extends Document {
  name: string;
  categoryId: ObjectId;
}
