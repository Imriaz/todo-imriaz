import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../../model/model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import TodoList from "../TodoList";

type SingleTodoProps = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<SingleTodoProps> = ({
  todo,
  todos,
  setTodos,
}: SingleTodoProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  /*

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              isDone: !todo.isDone,
            }
          : todo
      )
    );
  };
  */

  /*
  This is for confirm the task is done
  */

  const handleDone = (id: number) => {
    setTodos(
      (
        prev // For getting current State
      ) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        )
    );
  };

  /*
  This is for delete the task from todo list
  */

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  /*
  This is for edit the task on todo list
  */
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              todo: editTodo,
            }
          : todo
      )
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <React.Fragment>
      <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
        {edit ? (
          <input
            ref={inputRef}
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            className="todos__single--text"
          />
        ) : todo.isDone ? (
          <s className="todos__single--text">{todo.todo}</s>
        ) : (
          <span className="todos__single--text">{todo.todo}</span>
        )}
        <div>
          <span
            className="icon"
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              }
            }}
          >
            <AiFillEdit />
          </span>
          <span className="icon" onClick={() => handleDelete(todo.id)}>
            <AiFillDelete />
          </span>
          <span className="icon" onClick={() => handleDone(todo.id)}>
            <MdDone />
          </span>
        </div>
      </form>
    </React.Fragment>
  );
};

export default SingleTodo;
