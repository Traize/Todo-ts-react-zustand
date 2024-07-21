import { FC } from 'react';
import styles from './TodoCategory.module.css'
import Button from '../button/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { filterTodos } from '../../store/todoSlice';


const TodoCategory: FC = () => {
    const dispatch = useAppDispatch()
    const filter = useAppSelector(state => state.todos.filter)
    return (

        <div className={styles.category}>
            <Button
                text='Все заметки'
                disabled={filter === 'all'}
                onClick={() => dispatch(filterTodos('all'))}
            ></Button>
            <Button
                text='Завершенные'
                disabled={filter === 'completed'}
                onClick={() => dispatch(filterTodos('completed'))}
            ></Button>
            <Button
                text='Не завершенные'
                disabled={filter === 'uncompleted'}
                onClick={() => dispatch(filterTodos('uncompleted'))}
            ></Button>
        </div>

    );
};

export default TodoCategory;
