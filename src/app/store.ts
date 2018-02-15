import { tassign } from 'tassign';
import { INCREMENT, ADD_TODO, TOGGLE_TODO, REMOVE_TODO, CLEAR_TODO } from "./actions";

export interface IAppState {
    // counter: number;
    // messaging?: {
    //     newMessages: number
    // }
    todos : any[];
    lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
    // counter: 0,
    // messaging: {
    //     newMessages: 5
    // }
    todos: [],
    lastUpdate: null
}

function addTodo(state, action) {
    let newTodo = { id: state.todos.length + 1, title: action }
    return tassign(state, { 
        todos: state.todos.concat(newTodo), 
        lastUpdate: new Date() 
    });
}

function toggleTodo(state, action) {
    return null;
}

function removeTodo(state, action) {
    return null;
}

function clearTodo(state, action) {
    return null;
}

export function rootReducer(state: IAppState, action): IAppState {
    // switch (action.type) {
    //     case INCREMENT: 
    //         // return { counter: state.counter + 1 };
    //         // return Object.assign({}, { counter: state.counter + 1, isOnline: true });
    //         return tassign(state, { counter: state.counter + 1 });
    // }
    // return state;

    switch (action.type) {
        case ADD_TODO: return addTodo(state, action);
        case TOGGLE_TODO: return toggleTodo(state, action);
        case REMOVE_TODO: return removeTodo(state, action);
        case CLEAR_TODO: return clearTodo(state, action);           
    }
    return state;
}