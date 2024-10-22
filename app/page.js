import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-3xl font-bold">Welcome to homepage !</h1>

        <Link href="/about">About</Link>

        <Link href="/users">Users</Link>
       
      </div>
    </main>
  );
}
