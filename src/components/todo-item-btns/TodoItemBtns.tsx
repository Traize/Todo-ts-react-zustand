import { FC } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import styles from './TodoItemBtns.module.css'
import { useTodoStore } from '../../store/store';


interface TodoBtnsProps {
  id: number
}


const TodoBtns: FC<TodoBtnsProps> = ({ id }) => {
  const deleteTodo = useTodoStore(state => state.deleteTodo)

  return <div className={styles.btnsWrapper}>
    <button className={styles.btnDefault} onClick={() => deleteTodo(id)}>
      <AiFillDelete className={styles.delBtn}></AiFillDelete>
    </button>
  </div>;
};

export default TodoBtns;
