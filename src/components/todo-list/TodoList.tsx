import TodoItem from '../todo-item/TodoItem';
// import { FC } from 'react';
// import { useAppSelector } from '../../hooks/hooks';
import { useGetTodosQuery } from '../../store/todoApi';

const TodoList = () => {
    const {data,isLoading,isError} = useGetTodosQuery(10)
    
    return (
        <div>
            {isLoading && <h1>Идёт загрузка</h1>}
            {isError && <h1>Ошибка</h1>}
            {data && data.map(todo => <TodoItem key={todo.id} {...todo} />)}
        </div>
    );
};

export default TodoList;
