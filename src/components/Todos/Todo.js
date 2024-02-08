import { RiTodoFill } from 'react-icons/ri';
import styles from './Todo.module.css';

function Todo({ todos }) {
    return (
        <div className={styles.todo}>
            <RiTodoFill className={styles.todoIcon} />
            <div className={styles.todoText}>{todos}</div>
        </div>
    );
}

export default Todo;
