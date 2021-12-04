import { useDispatch } from 'react-redux';
import {toggleStatus, deleteTodo} from '../store/todoSlice';

const TodoItem = ({ id, title, completed, name, m2 }) => {
  const dispatch = useDispatch();
  console.log(title)

  return (
    <li>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => dispatch(toggleStatus(id))}
      />
      <span>{title}</span>
      <span>{m2}</span>
      <span>{name}</span>

      <span onClick={() => dispatch(deleteTodo(id))}>&times;</span>
    </li>
  );
};

export default TodoItem;
