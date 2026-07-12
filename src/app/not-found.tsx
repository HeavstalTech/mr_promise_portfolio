import Link from "next/link";
import Script from "next/script";

export default function NotFound() {
  return (
    <>
      <Script
        src="https://tenor.com/embed.js"
        strategy="lazyOnload"
      />

      <div className="flex flex-col items-center justify-center min-h-[75vh] px-6 text-center">
        <h1 className="text-7xl md:text-9xl font-bold text-[#ff0055] mb-6 drop-shadow-[0_0_20px_rgba(255,0,85,0.4)]">
          404
        </h1>

        <p className="text-xl md:text-3xl text-white font-bold mb-4 max-w-2xl leading-relaxed">
          Whoaaaaa.... where do you think you&apos;re going? This place doesn&apos;t even exist.
        </p>

        <p className="text-gray-400 text-lg mb-6 max-w-md">
          C&apos;mon, let&apos;s get back to Mr. Promise shall we?
        </p>

        <div className="w-48 md:w-60 mb-8">
          <div
            className="tenor-gif-embed"
            data-postid="411255227033297887"
            data-share-method="host"
            data-aspect-ratio="1"
            data-width="100%"
          >
            <a href="https://tenor.com/view/pengu-pudgy-penguin-pudgypenguins-holiday-gif-411255227033297887">
              Pengu Pudgy Sticker
            </a>
          </div>
        </div>

        <Link
          href="/"
          className="flex items-center gap-2 bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 hover:scale-105 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)]"
        >
          <span>&larr;</span> Go Back
        </Link>
      </div>
    </>
  );
}
