import {configureStore} from '@reduxjs/toolkit'
import { todosApi } from './todoApi';

export const store = configureStore({
    reducer: {
        [todosApi.reducerPath]: todosApi.reducer
    },
    middleware: (getDefultMiddleware)=> getDefultMiddleware().concat(todosApi.middleware) 
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch