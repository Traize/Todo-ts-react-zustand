import { FC } from 'react';
import TodoItem from '../todo-item/TodoItem';
import { useTodoStore } from '../../store/store';



const TodoList: FC = () => {
    const filter = useTodoStore(state => state.filter)

    const todos = useTodoStore(state => {
        switch (filter) {
            case 'completed':
                return state.todos.filter((todo) => todo.completed);
            case 'uncompleted':
                return state.todos.filter((todo) => !todo.completed);
            default:
                return state.todos
        }
    })

    return (
        <div className=''>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </div>
    );
};

export default TodoList;
