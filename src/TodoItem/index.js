import React from 'react';
import './TodoItem.css';
import { FcCheckmark, FcFullTrash } from "react-icons/fc";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        <FcCheckmark />
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <FcFullTrash />
      </span>
    </li >
  );
}

export { TodoItem };
