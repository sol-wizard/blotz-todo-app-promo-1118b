import type { Todo } from "@/types/todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (todo: Todo) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 py-3 shadow-sm">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo)}
        className="h-5 w-5 cursor-pointer accent-zinc-900"
      />
      <span
        className={`flex-1 ${todo.completed ? "text-zinc-400 line-through" : "text-zinc-900"}`}
      >
        {todo.title}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="rounded px-2 py-1 text-sm text-red-600 hover:bg-red-50"
      >
        Delete
      </button>
    </li>
  );
}
