import { Router } from "express";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../controllers/todos/index";

const router: Router = Router();

router.get("/todos", getTodos);
router.post("/todos/add", addTodo);
router.put("/todos/update", updateTodo);
router.delete("/todos/delete", deleteTodo);


export default router;