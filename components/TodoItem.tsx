import type { Todo } from "@/types/todo";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  return (
    <li className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 py-3 shadow-sm">
      <span>{todo.completed ? "✅" : "⬜"}</span>
      <span className={todo.completed ? "text-zinc-400 line-through" : "text-zinc-900"}>
        {todo.title}
      </span>
    </li>
  );
}
