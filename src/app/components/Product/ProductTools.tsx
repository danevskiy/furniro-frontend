import { Heart, Share2, ArrowLeftRight } from "lucide-react";
import Link from "next/link";
export default function ProductTools() {
  const iconSize = 16;
  return (
    <div className="transition duration-200 opacity-0 group-hover:opacity-100 absolute left-0 top-0 w-full h-full">
      <div className="absolute left-0 top-0 w-full h-full bg-neutral-700 opacity-75 z-1"></div>
      <Link
        href="/about"
        className="z-2 relative px-4 text-center flex flex-col items-center justify-center gap-6 h-full"
      >
        <button
          type="button"
          className="transition duration-200 text-yellow-600 hover:text-white hover:bg-yellow-600 font-semibold leading-6 bg-white p-3 w-50.5 max-w-full cursor-pointer"
        >
          Add to cart
        </button>
        <div className="flex flex-wrap justify-between items-center w-full">
          <button
            type="button"
            className="transition duration-200 flex flex-wrap items-center gap-1 cursor-pointer text-white hover:text-yellow-600"
          >
            <Share2 size={iconSize} />
            <span className="font-semibold leading-6">Share</span>
          </button>
          <button
            type="button"
            className="transition duration-200 flex flex-wrap items-center gap-1 cursor-pointer text-white hover:text-yellow-600"
          >
            <ArrowLeftRight size={iconSize} />
            <span className="font-semibold leading-6">Compare</span>
          </button>
          <button
            type="button"
            className="transition duration-200 flex flex-wrap items-center gap-1 cursor-pointer text-white hover:text-yellow-600"
          >
            <Heart size={iconSize} />
            <span className="font-semibold leading-6">Like</span>
          </button>
        </div>
      </Link>
    </div>
  );
}
