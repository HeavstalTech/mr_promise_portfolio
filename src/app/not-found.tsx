import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex flex-col justify-center min-h-screen p-8 md:p-24 text-left overflow-hidden">
      <div className="max-w-4xl space-y-8 md:space-y-12 z-10">
        <p className="text-3xl md:text-5xl text-white font-bold leading-relaxed md:leading-snug">
          Whoaaaaa... where do you think you&apos;re going? This place doesn&apos;t even exist.
        </p>
        
        <p className="text-gray-400 text-xl md:text-2xl max-w-lg">
          C&apos;mon Love, let&apos;s get back to Mr. Promise shall we?
        </p>
        
        <div className="pt-6">
          <Link 
            href="/"
            className="inline-flex items-center gap-3 bg-white text-black font-bold py-4 px-10 rounded-full hover:bg-gray-200 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] text-lg"
          >
            <span>&larr;</span> Go Back
          </Link>
        </div>
      </div>
      <img 
        src="https://media0.giphy.com/media/v1.Y2lkPTZjMDliOTUybDBzd3czODJjMmdwNmdzdWVzOG1xdXFyZjY4ZzNvZGg0dnI2cnRtOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sfOQ7g0hmcoejHoydn/giphy.gif"
        alt="Confused reaction"
        className="fixed bottom-8 right-8 md:bottom-12 md:right-12 w-36 md:w-64 rounded-2xl shadow-2xl z-0"
      />
      
    </div>
  );
}
