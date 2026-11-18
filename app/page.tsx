import Link from "next/link";
import { Suspense } from "react";
import TodoList from "@/components/TodoList";
import { getAllTodos } from "@/lib/api";

async function Todos() {
  const todos = await getAllTodos();
  return <TodoList initialTodos={todos} />;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <main className="mx-auto max-w-xl px-6 py-16">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-zinc-900">My To-dos</h1>
          <Link href="/about" className="text-zinc-600 underline hover:text-zinc-900">
            About
          </Link>
        </div>
        <Suspense fallback={<p className="text-zinc-500">Loading...</p>}>
          <Todos />
        </Suspense>
      </main>
    </div>
  );
}
