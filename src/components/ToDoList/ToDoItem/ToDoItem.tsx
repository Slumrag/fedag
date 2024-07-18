import { ToDo } from '../../../api/types/ToDo';
import './ToDoItem.css';
type ToDoItemProps = { toDo: ToDo };

export default function ToDoItem({ toDo }: ToDoItemProps) {
  return <li className={`ToDoItem ${toDo.completed ? 'completed' : ''}`}>{toDo.title}</li>;
}
