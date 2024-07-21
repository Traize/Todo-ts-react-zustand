import { FC } from 'react';
import TodoItem from '../todo-item/TodoItem';
import { useAppSelector } from '../../hooks/hooks';




const TodoList: FC = () => {
    const filter = useAppSelector(state => state.todos.filter)
    const todos = useAppSelector(state => {
        switch (filter) {
            case 'completed':
                return state.todos.list.filter((todo) => todo.completed);
            case 'uncompleted':
                return state.todos.list.filter((todo) => !todo.completed);
            default:
                return state.todos.list}
    })

    return (
        <div className=''>
            {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
        </div>
    );
};

export default TodoList;
