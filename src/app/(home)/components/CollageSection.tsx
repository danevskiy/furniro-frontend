import Image from "next/image";
export default function CollageSection() {
  return (
    <section className="pt-16.75 pb-12.5">
      <div className="text-zinc-600 text-xl font-semibold leading-8 text-center">
        Share your setup with
      </div>
      <div className="text-neutral-700 text-4xl font-bold leading-12 text-center">
        #FuniroFurniture
      </div>
      <div
        className="grid items-center gap-4"
        style={{
          gridTemplateColumns:
            "calc(38% - 0.66666666666rem) calc(22% - 0.66666666666rem) calc(40% - 0.66666666666rem)",
        }}
      >
        <div>
          <div
            className="grid gap-4 items-end"
            style={{
              gridTemplateColumns: "calc(15% - 0.5rem) calc(85% - 0.5rem)",
            }}
          >
            <div className="relative pb-[489.74%]">
              <Image
                width={274}
                height={382}
                src="/collage/collage1.png"
                alt="collage1"
                className="absolute left-0 top-0 w-full h-full object-cover object-bottom-right"
              />
            </div>
            <div className="relative pb-[69.18%]">
              <Image
                width={451}
                height={312}
                src="/collage/collage2.png"
                alt="collage2"
                className="absolute left-0 top-0 w-full h-full object-cover object-bottom-right"
              />
            </div>
          </div>
          <div
            className="grid gap-4 items-start mt-4"
            style={{
              gridTemplateColumns: "calc(35% - 0.5rem) calc(65% - 0.5rem)",
            }}
          >
            <div className="relative pb-[174.32%]">
              <Image
                width={381}
                height={323}
                src="/collage/collage3.png"
                alt="collage1"
                className="absolute left-0 top-0 w-full h-full object-cover object-bottom-right"
              />
            </div>
            <div className="relative pb-[70.23%]">
              <Image
                width={344}
                height={242}
                src="/collage/collage4.png"
                alt="collage2"
                className="absolute left-0 top-0 w-full h-full object-cover object-bottom-right"
              />
            </div>
          </div>
        </div>

        <div className="relative pb-[132.88%]">
          <Image
            width={295}
            height={392}
            src="/collage/collage5.png"
            alt="collage1"
            className="absolute left-0 top-0 w-full h-full object-cover object-bottom-right"
          />
        </div>

        <div>
          <div
            className="grid gap-4 items-end"
            style={{
              gridTemplateColumns: "calc(52% - 0.5rem) calc(48% - 0.5rem)",
            }}
          >
            <div className="relative pb-[120%]">
              <Image
                width={274}
                height={382}
                src="/collage/collage6.png"
                alt="collage6"
                className="absolute left-0 top-0 w-full h-full object-cover object-bottom-right"
              />
            </div>
            <div className="relative pb-[163.21%]">
              <Image
                width={451}
                height={312}
                src="/collage/collage7.png"
                alt="collage7"
                className="absolute left-0 top-0 w-full h-full object-cover object-bottom-right"
              />
            </div>
          </div>
          <div
            className="grid gap-4 items-start mt-4"
            style={{
              gridTemplateColumns: "calc(32% - 0.5rem) calc(50% - 0.5rem)",
            }}
          >
            <div className="relative pb-[174.32%]">
              <Image
                width={381}
                height={323}
                src="/collage/collage8.png"
                alt="collage8"
                className="absolute left-0 top-0 w-full h-full object-cover object-bottom-right"
              />
            </div>
            <div className="relative pb-[70.23%]">
              <Image
                width={344}
                height={242}
                src="/collage/collage9.png"
                alt="collage9"
                className="absolute left-0 top-0 w-full h-full object-cover object-bottom-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
