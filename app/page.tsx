import Image from "next/image";
import Link from "next/link";
import NewComponent from "./components/NewComponent";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-[#faf7f2]">
      {/* Your existing Navigation Links */}
      <div className="flex flex-row gap-4 mb-12">
        <Link href="/about">About Me</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/projects">Projects</Link>
      </div>

      <NewComponent />
    </main>
  );
}
