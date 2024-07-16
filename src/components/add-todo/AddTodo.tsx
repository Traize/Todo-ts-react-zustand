import { FC, useRef } from 'react';
import { useTodoStore } from '../../store/store';
import Button from '../button/Button';
import styles from './AddTodo.module.css'

const AddTodo: FC = () => {
    const addTodo = useTodoStore(state => state.addTodo)
    const ref = useRef<HTMLInputElement>(null)
    const handleAddTodo = () => {
        if (ref.current) {
            addTodo(ref.current.value);
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
