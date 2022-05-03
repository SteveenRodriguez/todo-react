import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
import { FcInspection } from "react-icons/fc";

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  return (
    <h2 className="TodoCounter"> <FcInspection /> Has completado {completedTodos} de {totalTodos} TODOs</h2>
  );
}

export { TodoCounter };
