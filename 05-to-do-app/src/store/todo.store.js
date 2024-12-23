import { Todo } from '../todos/models/todo.model';

const Filters = {
    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending',
}

const state = {
    todos:[
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
        
    ],
    filter: Filters.All,

}

const initStore = () => {
    console.log(state);
    console.log('Init Store 🦎');
}

const loadStore = () => {
    throw new Error('Not implemented');
}

const getTodos = (filter = Filters.All) => {
    switch(filter){
        case Filters.All: 
            return [...state.todos]; // operador spread para retornar un nuevo arreglo, a pesar de que los objetos los pasamos como referencia
        case Filters.Completed:
            return state.filter() 
        
    }
}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    throw new Error('Not implemented');
}

/**
 * 
 * @param {String} todoId Todo identifier
 */
const toggleTodo = (todoId) => {
    throw new Error('Not implemented');
}

const deleteTodo = (todoId) => {
    throw new Error('Not implemented');
}

const deleteCompleted = () => {
    throw new Error('Not implemented');
}

const setFilter = (newFilter=Filters.All) => {
    throw new Error('Not implemented');
}

const getCurrentFilter = () => {
    throw new Error('Not implemented');
}

export default{
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}

