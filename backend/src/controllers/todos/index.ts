import {Response, Request} from "express";
import { TodoInterface } from "../../types/todo";
import Todo from "../../models/todo";

const getTodos = async (req: Request, res: Response): Promise<void> => {
    try {
        const todos: TodoInterface[] = await Todo.find();
        res.status(200).json({todos});
    } catch (error) {
        throw error;
    }
}


const addTodo = async(req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<TodoInterface, "name" | "desc" | "status">;
        const newTodo: TodoInterface = new Todo({
            name: body.name,
            desc: body.desc,
            status: body.status
        });

        const savedTodo: TodoInterface = await newTodo.save();
        res.status(201).json({message: "Todo saved", todo: savedTodo});
    } catch (error) {
        throw error;
    }
}

const updateTodo = async(req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: {id},
            body
        } = req;
        const updateTodo: TodoInterface | null = await Todo.findByIdAndUpdate({_id: id}, body);
        res.status(200).json({
            message: "Todo updated",
            todo: updateTodo
        })
    } catch (error) {
        throw error;
    }
}

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id;
        const deleteTodo: TodoInterface | null = await Todo.findByIdAndDelete(id);
        res.status(200).json({
            message: "todo deleted",
            todo: deleteTodo
        });
    } catch (error) {
        throw error;
    }
}

export {getTodos, addTodo, deleteTodo, updateTodo};