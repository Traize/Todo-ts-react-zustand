import { FC } from 'react';
import styles from './TodoCategory.module.css'
import Button from '../button/Button';
import { useTodoStore } from '../../store/store';

// interface ITodoCategoryProps {
// }

const TodoCategory: FC = () => {
    const filter = useTodoStore(state => state.filter)
    const filterTodos = useTodoStore(state => state.filterTodos)
    return (

        <div className={styles.category}>
            <Button
                text='Все заметки'
                disabled={filter === 'all'}
                onClick={() => filterTodos('all')}
            ></Button>
            <Button
                text='Завершенные'
                disabled={filter === 'completed'}
                onClick={() => filterTodos('completed')}
            ></Button>
            <Button
                text='Не завершенные'
                disabled={filter === 'uncompleted'}
                onClick={() => filterTodos('uncompleted')}
            ></Button>
        </div>

    );
};

export default TodoCategory;
