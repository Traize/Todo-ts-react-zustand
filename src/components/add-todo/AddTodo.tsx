import { FC, useRef } from 'react';
import Button from '../button/Button';
import styles from './AddTodo.module.css'
import { todosApi } from '../../store/todoApi';
import { ITodo } from '../../types/types';

const AddTodo: FC = () => {
    const [addTodo] = todosApi.useAddTodoMutation()
    const ref = useRef<HTMLInputElement>(null)
    const handleAddTodo = async () => {
        if (ref.current) {
            await addTodo({title: ref.current.value, completed: false} as ITodo);
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
