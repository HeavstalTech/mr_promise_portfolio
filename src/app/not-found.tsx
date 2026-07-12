import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row-reverse items-center justify-between gap-12">
        <div className="flex justify-center shrink-0">
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTZjMDliOTUybDBzd3czODJjMmdwNmdzdWVzOG1xdXFyZjY4ZzNvZGg0dnI2cnRtOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sfOQ7g0hmcoejHoydn/giphy.gif"
            alt="Walking back"
            className="w-72 md:w-96"
          />
        </div>
        <div className="max-w-xl text-center md:text-left">
          <p className="text-xl md:text-3xl text-white font-bold mb-4 leading-relaxed">
            Whoaaaaa.... where do you think you&apos;re going? This place doesn&apos;t even exist.
          </p>
          <p className="text-gray-400 text-lg mb-10">
            C&apos;mon Love, let&apos;s get back to Mr. Promise, shall we?
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 hover:scale-105 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          >
            <span>&larr;</span> Go Back
          </Link>
        </div>

      </div>
    </div>
  );
}
