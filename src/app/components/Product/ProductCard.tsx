import Image from "next/image";
import { type Product } from "../../types/Product";
import ProductTools from "./ProductTools";

interface ProductProps {
  info: Product;
}

export default function ProductCard({ info }: ProductProps) {
  return (
    <div className="bg-gray-100 flex flex-col relative group">
      <div className="relative w-full pb-[101.2%]">
        <Image
          width={285}
          height={301}
          src={info.preview.url}
          alt={info.preview.title}
          className="absolute left-0 top-0 object-cover object-center w-full h-full"
        />
      </div>
      <div className="pt-4 px-4 pb-7.5">
        <div className="text-neutral-700 text-2xl font-semibold leading-7 mb-2">
          {info.title}
        </div>
        <div className="text-zinc-500 font-medium leading-6 mb-2">
          {info.description}
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <span className="text-neutral-700 text-xl font-semibold leading-8">
            Rp {info.price}
          </span>
          {info.old_price && (
            <span className="text-zinc-400 line-through leading-6">
              Rp {info.old_price}
            </span>
          )}
        </div>
      </div>
      <ProductTools />
    </div>
  );
}
