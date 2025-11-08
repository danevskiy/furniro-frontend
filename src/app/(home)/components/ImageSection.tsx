import Image from "next/image";
import Link from "next/link";
import Container from "@/app/components/Container";
export default function ImageSection() {
  return (
    <section className="relative pt-38.25 pb-29">
      <Container className="flex justify-end items-center">
        <Image
          width={1440}
          height={712}
          src="/main.png"
          alt="new collection"
          className="w-full h-full object-cover object-bottom-left absolute left-0 bottom-0"
        />
        <div className="bg-yellow-50 rounded-xl pl-10.25 pt-15.5 pb-9.25 pr-14 max-w-161 relative">
          <div className="text-zinc-800 text-base font-semibold tracking-[3px] mb-1">
            New Arrival
          </div>
          <div className="text-mainyellow text-5xl font-bold mb-4.25">
            Discover Our <br /> New Collection
          </div>
          <div className="text-zinc-800 text-lg font-medium leading-6 mb-11.5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </div>

          <Link className="px-18 py-6.5 bg-mainyellow inline-block" href="#">
            <span className="text-white text-base font-bold uppercase">
              BUY Now
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
