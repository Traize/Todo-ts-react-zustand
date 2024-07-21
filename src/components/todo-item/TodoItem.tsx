import { FC } from 'react';
import { ITodo } from '../../types/types';
import styles from './TodoItem.module.css'
import TodoBtns from '../todo-item-btns/TodoItemBtns';
import { useToggleTodoMutation } from '../../store/todoApi';




const TodoItem: FC<ITodo> = ({id, title, completed}) => {
    const [toggleTodo] = useToggleTodoMutation()
    const handleToggle =async(id:string)=>{
        await toggleTodo({id:id, completed:completed = !completed} as ITodo )

    }
    return (
        <div className={styles.todoItem}>
            <label className={styles.label} >
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => handleToggle(id)} />
                <div className={styles.titleWrapper}>
                    <p className={styles.task}>{title}</p>
                </div>
            </label>
            <TodoBtns id={id} />
        </div>
    );
};

export default TodoItem;
