import { Todo } from '../models/todo.model';
import { createTodoHTML } from './create-todo-html';

let element;

/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */
export const renderTodos = (elementId, todos = []) => {

    // TODO: referencia
    if(!element)
        element = document.querySelector(elementId);

    if(!element) throw new Error(`${elementId} not found`);

    element.innerHTML = ''; // clear previous todos

    todos.forEach(todo => {
        element.append(createTodoHTML(todo));
    });

}
