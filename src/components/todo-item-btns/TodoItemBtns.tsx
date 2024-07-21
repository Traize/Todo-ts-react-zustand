import { FC } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import styles from './TodoItemBtns.module.css'
import { useDeleteTodoMutation } from '../../store/todoApi';

interface TodoBtnProps{
  id:string
}


const TodoBtns: FC<TodoBtnProps> = ({ id }) => {
const [deleteTodo]= useDeleteTodoMutation()
const handleDelete = async(id:string)=>{
  await deleteTodo(id)
}
    return (
    <div className={styles.btnsWrapper}>
      <button className={styles.btnDefault} onClick={() =>handleDelete(id)}>
        <AiFillDelete className={styles.delBtn}></AiFillDelete>
      </button>
    </div>
    );
};

export default TodoBtns;
