import type { Todo } from "@/types/todo";

const API_URL = "http://localhost:3001";

export async function getAllTodos(): Promise<Todo[]> {
  const res = await fetch(`${API_URL}/todos`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Could not load the to-dos");
  }
  return res.json();
}
