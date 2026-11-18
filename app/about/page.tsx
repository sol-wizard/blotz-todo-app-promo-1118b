import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <main className="mx-auto max-w-xl px-6 py-16">
        <h1 className="mb-4 text-3xl font-bold text-zinc-900">About</h1>
        <p className="mb-6 text-zinc-600">
          A simple to-do app built with Next.js, React and Tailwind while learning frontend at Blotz.
        </p>
        <Link href="/" className="font-medium text-zinc-900 underline">
          ← Back to my to-dos
        </Link>
      </main>
    </div>
  );
}
