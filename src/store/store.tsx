import { create } from "zustand";
import { ITodo } from "../types/types";
import { persist } from "zustand/middleware";


type TodoStore = {
    todos: ITodo[],
    addTodo: (title: string) => void,
    toggleTodo: (id: number) => void,
    deleteTodo: (id: number) => void,
    filter: string,
    filterTodos: (value: string) => void,

}


export const useTodoStore = create<TodoStore>()(persist((set, get) => ({
    todos: [
        { id: 1, title: 'Сделать тудушку', completed: true },
        { id: 2, title: 'Сделать больше', completed: false },
    ],
    // Добавление
    addTodo: (title) =>
        set(state => {
            return { todos: [...state.todos, { id: Date.now(), title, completed: false }] }
        }),
    // Переключение
    toggleTodo: (id) => set(
        {
            todos: get().todos.map(
                todo => id === todo.id ? { ...todo, completed: !todo.completed } : todo)
        }),
    // Удаление
    deleteTodo: (id) => set({
        todos: get().todos.filter(
            todo => todo.id !== id
        )
    }),
    // Фильтрация
    filter: 'all',
    filterTodos: (value) => set({ filter: value })
}),
    { name: 'TodoStore' })
)