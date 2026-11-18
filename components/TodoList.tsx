"use client";

import { useState } from "react";
import AddTaskDialog from "@/components/AddTaskDialog";
import TodoItem from "@/components/TodoItem";
import { addTodo, deleteTodo, updateTodo } from "@/lib/api";
import type { Todo } from "@/types/todo";

interface TodoListProps {
  initialTodos: Todo[];
}

export default function TodoList({ initialTodos }: TodoListProps) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  async function handleAdd(title: string) {
    const newTodo = await addTodo(title);
    setTodos([...todos, newTodo]);
  }

  async function handleToggle(todo: Todo) {
    const updated = await updateTodo(todo.id, !todo.completed);
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  }

  async function handleDelete(id: string) {
    await deleteTodo(id);
    setTodos(todos.filter((t) => t.id !== id));
  }

  return (
    <>
      <AddTaskDialog onSave={handleAdd} />
      <ul className="flex flex-col gap-3">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </>
  );
}
