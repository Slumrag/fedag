import { ToDo } from './types/ToDo';

export async function loadToDos(): Promise<ToDo[]> {
  const toDoURI = new URL('https://jsonplaceholder.typicode.com/todos');
  const response = await fetch(toDoURI, { method: 'GET' });
  if (!response.ok) {
    const badResponseMsg = `Can't load to do list. Status code ${response.status}`;
    const error = new Error(badResponseMsg);
    throw error;
  }
  const data = await response.json();
  return data;
}
