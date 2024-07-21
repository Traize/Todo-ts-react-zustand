import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import { ITodo } from '../types/types'

type TodoState ={
    list: ITodo[],
    filter: string,
}

const initialState: TodoState = {
    list: [{
        id: 1, title: 'redux', completed:false
    }],
    filter: 'all'
}
const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo(state, action: PayloadAction<string>){
            state.list.push({
                id: Date.now(),
                title: action.payload,
                completed: false,
            })
        },
        toggleTodo(state,action:PayloadAction<number>){
            const toggledTodo = state.list.find(todo=> todo.id ===action.payload)
            if(toggledTodo){
                toggledTodo.completed = !toggledTodo.completed
            }
        },
        deleteTodo(state, action:PayloadAction<number>){
            state.list = state.list.filter(todo => todo.id !== action.payload)
            
        },
        filterTodos(state, action:PayloadAction<string>){
            state.filter = action.payload
         }   
        
    }
})

export const {addTodo, toggleTodo, deleteTodo,filterTodos} = todoSlice.actions
export default todoSlice.reducer