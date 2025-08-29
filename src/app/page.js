import Image from "next/image";
import Link from "next/link";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">



      
      <main className="max-w-lg flex flex-col gap-[10rem] row-start-2 items-center sm:items-start">
        <ul className="font-mono list-inside list-none text-sm/6 text-center sm:text-left">
          <li className="mb-2 text-sm/7 tracking-[-.01em]">
            Hi, my name is Jordan Taylor. A{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              Full Stack Software Engineer
            </code>
            , working towards becoming an{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">AI Automation Engineer
            </code>
            .
          </li>
        </ul>




        {/* Nav Container */}
        <nav className="flex top-0 z-10 p-5 min-w-full fixed gap-4 items-center flex-col sm:flex-row">

        {/* Home Link */}
          <Link href="/" className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
          rel="noopener noreferrer"
          >
          Home
          </Link>

        {/* GitHub */}
          <a href="https://github.com/Buildeployship?tab=repositories" className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
          target="_blank"
          rel="noopener noreferrer"
          >
          GitHub
          </a>

          {/* Projects Link */}
          <a href="/projects" className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
          rel="noopener noreferrer"
          >
          Projects
          </a>

          {/* About Link */}
          <Link href="/about" className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
          rel="noopener noreferrer"
          >
          About
          </Link>
        </nav>
        {/* </div> */}
      </main>
    </div>
  );
}
