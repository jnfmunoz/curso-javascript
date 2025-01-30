import todoStore, { Filters } from "../../store/todo.store";

let element;
/**
 * 
 * @param {String} elementId 
 */
export const renderPending = (elementId) => {
    if(!element) 
        element = document.querySelector(elementId);

    if(!element)
        throw new Error(`No se puede encontrar el elemento con id: ${elementId}`);

    element.innerHTML = todoStore.getTodos(Filters.Pending).length;
    
}