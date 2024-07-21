import { FC, useRef } from 'react';
import Button from '../button/Button';
import styles from './AddTodo.module.css'
import { useAppDispatch } from '../../hooks/hooks';
import { addTodo } from '../../store/todoSlice';

const AddTodo: FC = () => {
    const dispatch = useAppDispatch()
    const ref = useRef<HTMLInputElement>(null)
    const handleAddTodo = () => {
        if (ref.current) {
            dispatch(addTodo(ref.current.value));
            ref.current.value = ''
        }
    }

    return (
        <div className={styles.addTodoWrapper}>
            <input
                className={styles.addInput}
                type="text"
                ref={ref}
                onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
                placeholder='Введите текст заметки'
            />
            <Button onClick={handleAddTodo} text='Создать'></Button>
        </div>
    );
};

export default AddTodo;
