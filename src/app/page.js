
import AnimatedDescription from "./AnimatedDescription";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] dark:from-black dark:to-zinc-900 font-sans">
      <main className="flex min-h-screen w-full max-w-2xl flex-col items-center justify-center py-20 px-6 sm:px-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-lg mb-8 tracking-tight text-center">
          NEXORA
        </h1>
        <AnimatedDescription />
        <div className="mt-12 w-full max-w-lg rounded-2xl bg-white/80 dark:bg-zinc-900/80 shadow-xl p-8 flex flex-col gap-6 border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-2 text-center">Collection Details</h2>
          <ul className="text-lg text-zinc-700 dark:text-zinc-300 space-y-1">
            <li><span className="font-semibold">Supply:</span> 3333</li>
            <li><span className="font-semibold">Mint on:</span> <a href="https://opensea.io/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500">OpenSea</a></li>
            <li><span className="font-semibold">Chain:</span> Base</li>
          </ul>
          <div className="mt-4">
            <h3 className="font-semibold text-zinc-800 dark:text-zinc-100 mb-1">Mint Phases:</h3>
            <ul className="text-zinc-700 dark:text-zinc-300 space-y-1">
              <li>GDT: <span className="font-bold text-green-600">Freemint</span></li>
              <li>WL: <span className="font-bold text-blue-600">0.1$</span></li>
              <li>Public: <span className="font-bold text-pink-600">0.3$</span></li>
            </ul>
          </div>
          <div className="mt-4 text-zinc-700 dark:text-zinc-300">
            <span className="font-semibold">Mint date:</span> 20th February
          </div>
        </div>
        <footer className="mt-12 text-zinc-400 text-xs text-center w-full">Inspired by getbullshit.wtf | Not affiliated</footer>
      </main>
    </div>
  );
}
