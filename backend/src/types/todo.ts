import { Document } from "mongoose";

export interface TodoInterface extends Document {
    name: string,
    desc: string,
    status: boolean
}