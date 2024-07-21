import { FC } from 'react';
import { ITodo } from '../../types/types';
import styles from './TodoItem.module.css'
import TodoBtns from '../todo-item-btns/TodoItemBtns';
import { useAppDispatch } from '../../hooks/hooks';
import { toggleTodo } from '../../store/todoSlice';



const TodoItem: FC<ITodo> = ({id, title, completed}) => {
    const dispatch = useAppDispatch()

    return (
        <div className={styles.todoItem}>
            <label className={styles.label} >
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => dispatch(toggleTodo(id))} />
                <div className={styles.titleWrapper}>
                    <p className={styles.task}>{title}</p>
                </div>
            </label>
            <TodoBtns id={id} />
        </div>
    );
};

export default TodoItem;
