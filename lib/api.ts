import type { Todo } from "@/types/todo";

const API_URL = "http://localhost:3001";

export async function getAllTodos(): Promise<Todo[]> {
  const res = await fetch(`${API_URL}/todos`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Could not load the to-dos");
  }
  return res.json();
}

export async function addTodo(title: string): Promise<Todo> {
  const res = await fetch(`${API_URL}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, completed: false }),
  });
  if (!res.ok) {
    throw new Error("Could not add the to-do");
  }
  return res.json();
}

export async function updateTodo(id: string, completed: boolean): Promise<Todo> {
  const res = await fetch(`${API_URL}/todos/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed }),
  });
  if (!res.ok) {
    throw new Error("Could not update the to-do");
  }
  return res.json();
}

export async function deleteTodo(id: string): Promise<void> {
  const res = await fetch(`${API_URL}/todos/${id}`, { method: "DELETE" });
  if (!res.ok) {
    throw new Error("Could not delete the to-do");
  }
}
