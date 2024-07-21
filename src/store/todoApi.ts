import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { ITodo } from '../types/types'

export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    tagTypes:['Todos'],
    endpoints:(builder) => ({
        getTodos: builder.query<ITodo[],number>({
            query:(limit: number = 10) => ({
                url: `todos`,
                params: {
                    _limit:limit
                }
            }),
            providesTags: result => result 
            ? [
                ...result.map(({id})=>({type: 'Todos' as const, id})),
                {type: 'Todos', id: 'LIST'}
             ]:
            [
                {type:'Todos', id:'LIST'}
            ]
        }),
        addTodo: builder.mutation<ITodo, ITodo>({
            query:(body) => ({
                url: 'todos',
                method: 'POST',
                body
            }),
            invalidatesTags: [{type:'Todos', id:'LIST'}]
        }),
        deleteTodo: builder.mutation({
            query: (id) => ({
                url: `todos/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags:[{type:'Todos', id:'LIST'}] 
        }),
        toggleTodo: builder.mutation({
            query: (todo) =>({
                url: `todos/${todo.id}`,
                method: 'PATCH',
                body: todo
            }),
            invalidatesTags:[{type:'Todos', id:'LIST'}]
        })
    })
})

export const {useGetTodosQuery, useAddTodoMutation,useDeleteTodoMutation, useToggleTodoMutation} = todosApi //tsconfig.app.json moduleResolution bundler error