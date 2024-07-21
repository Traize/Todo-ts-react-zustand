import { FC } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import styles from './TodoItemBtns.module.css'
import { useAppDispatch } from '../../hooks/hooks';
import { deleteTodo } from '../../store/todoSlice';

interface TodoBtnProps{
  id:number
}


const TodoBtns: FC<TodoBtnProps> = ({ id }) => {
  const dispatch = useAppDispatch()
  
    return (
    <div className={styles.btnsWrapper}>
      <button className={styles.btnDefault} onClick={() => dispatch(deleteTodo(id))}>
        <AiFillDelete className={styles.delBtn}></AiFillDelete>
      </button>
    </div>
    );
};

export default TodoBtns;
