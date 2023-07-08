import { model, Schema } from "mongoose";
import { TodoInterface } from '../types/todo';

const todoSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        status: {
            type: Boolean,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Todo =  model<TodoInterface>("Todo", todoSchema);
export default Todo;