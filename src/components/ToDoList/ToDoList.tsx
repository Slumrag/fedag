import { useEffect, useState } from 'react';
import { loadToDos } from '../../api/loadToDos';
import { ToDo } from '../../api/types/ToDo';
import './ToDoList.css';
import ToDoItem from './ToDoItem/ToDoItem';

export default function ToDoList() {
  const [toDos, setToDos] = useState<ToDo[]>([]);
  useEffect(() => {
    loadToDos()
      .then((data) => {
        setToDos(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <ul className='ToDoList'>
      {toDos.length > 0 ? (
        toDos.map((e) => <ToDoItem key={e.id} toDo={e}></ToDoItem>)
      ) : (
        <h3>Загрузка...</h3>
      )}
    </ul>
  );
}
