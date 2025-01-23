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
        new Todo('Piedra del poder'),
        new Todo('Piedra sagrada'),
        
    ],
    filter: Filters.All,

}

const initStore = () => {
    loadStore();
    // console.log(state);
    console.log('Init Store 🦎');
}

const loadStore = () => {
    if(!localStorage.getItem('state')) return;

    const { todos = [], filter = Filters.All } = JSON.parse(localStorage.getItem('state'));
    state.todos = todos;
    state.filter = filter;

}

const saveStateToLocalStorage = () => {
    // console.log( JSON.stringify(state));
    localStorage.setItem('state', JSON.stringify(state));
}

const getTodos = (filter = Filters.All) => {
    switch(filter){
        case Filters.All: 
            return [...state.todos]; // operador spread para retornar un nuevo arreglo, a pesar de que los objetos los pasamos como referencia

        case Filters.Completed:
            return state.todos.filter(todo => todo.done);

        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);
        
        default:
            throw new Error(`Option ${filter} not supported`);
    }
}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    if (!description) throw new Error('Description is required');
    state.todos.push(new Todo(description));

    saveStateToLocalStorage();
}

/**
 * 
 * @param {String} todoId Todo identifier
 */
const toggleTodo = (todoId) => {

    state.todos = state.todos.map(todo => {
        if(todo.id === todoId){
            todo.done = !todo.done; // invierte el valor de done
        }
        return todo;
    });

    saveStateToLocalStorage();
}

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
    saveStateToLocalStorage();
}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => todo.done);
    saveStateToLocalStorage();
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter=Filters.All) => {
    state.filter = newFilter;
    saveStateToLocalStorage();
}

const getCurrentFilter = () => {
    return state.filter;
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

