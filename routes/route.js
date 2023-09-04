import express from 'express';
import { addTodo, getTodos, toggletodoDone, updateTodo, deleteTodo  } from '../controller/todocontroller.js';


const route = express.Router();
 
route.post('/todos', addTodo);
route.get('/todos', getTodos);
route.get('/todos/:id', toggletodoDone);
route.put('/todos/:id', updateTodo);
route.delete('/todos/:id', deleteTodo)
export default route;
//route