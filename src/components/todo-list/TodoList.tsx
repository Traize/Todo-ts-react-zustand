import TodoItem from '../todo-item/TodoItem';
// import { FC } from 'react';
// import { useAppSelector } from '../../hooks/hooks';
import { useGetTodosQuery } from '../../store/todoApi';

const TodoList = () => {
    const {data,isLoading,isError} = useGetTodosQuery(10)
    // const filter = useAppSelector(state => state.todos.filter)
    // const todos = useAppSelector(state => {
    //     switch (filter) {
    //         case 'completed':
    //             return state.todos.list.filter((todo) => todo.completed);
    //         case 'uncompleted':
    //             return state.todos.list.filter((todo) => !todo.completed);
    //         default:
    //             return state.todos.list}
    // })
    
    return (
        <div>
            {isLoading && <h1>Идёт загрузка</h1>}
            {isError && <h1>Ошибка</h1>}
            {data && data.map(todo => <TodoItem key={todo.id} {...todo} />)}
        </div>
    );
};

export default TodoList;
