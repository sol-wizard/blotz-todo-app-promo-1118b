import TodoItem from "@/components/TodoItem";
import type { Todo } from "@/types/todo";

const todos: Todo[] = [
  { id: "1", title: "Watch the React video", completed: true },
  { id: "2", title: "Build the to-do app", completed: false },
  { id: "3", title: "Show it to my Tech Lead", completed: false },
];

export default function Home() {
  return (
    <main>
      <h1>My To-dos</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </main>
  );
}
