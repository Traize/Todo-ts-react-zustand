import { FC } from 'react';
import { ITodo } from '../../types/types';
import styles from './TodoItem.module.css'
import TodoBtns from '../todo-item-btns/TodoItemBtns';
import { useTodoStore } from '../../store/store';

interface TodoItemProps {
    todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {

    const toggleTodo = useTodoStore(state => state.toggleTodo)

    return (
        <div className={styles.todoItem}>
            <label className={styles.label} >
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)} />
                <div className={styles.titleWrapper}>
                    <p className={styles.task}>{todo.title}</p>
                </div>
            </label>
            <TodoBtns id={todo.id} />
        </div>
    );
};

export default TodoItem;
