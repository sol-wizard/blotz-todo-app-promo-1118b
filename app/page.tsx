import TodoItem from "@/components/TodoItem";
import type { Todo } from "@/types/todo";

const todos: Todo[] = [
  { id: "1", title: "Watch the React video", completed: true },
  { id: "2", title: "Build the to-do app", completed: false },
  { id: "3", title: "Show it to my Tech Lead", completed: false },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <main className="mx-auto max-w-xl px-6 py-16">
        <h1 className="mb-6 text-3xl font-bold text-zinc-900">My To-dos</h1>
        <ul className="flex flex-col gap-3">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </main>
    </div>
  );
}
