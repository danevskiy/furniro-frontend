import Image from "next/image";
import Link from "next/link";
import Container from "@/app/components/Container";
export default function CategoriesSection() {
  type CategoryPreview = {
    title: string;
    url: string;
  };
  type Category = {
    id: number;
    title: string;
    href: string;
    preview: CategoryPreview;
  };

  const categories: Category[] = [
    {
      id: 1,
      title: "Dining",
      href: "#",
      preview: {
        title: "Dining",
        url: "/cat1.png",
      },
    },
    {
      id: 2,
      title: "Living",
      href: "#",
      preview: {
        title: "Living",
        url: "/cat2.png",
      },
    },
    {
      id: 3,
      title: "Bedroom",
      href: "#",
      preview: {
        title: "Bedroom",
        url: "/cat3.png",
      },
    },
  ];
  return (
    <section>
      <Container className="mt-14.5 mb-14">
        <div className="text-zinc-800 text-3xl font-bold text-center">
          Browse The Range
        </div>
        <div className="text-center text-stone-500 text-xl mb-15.5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>

        <div className="grid grid-cols-3 gap-5">
          {categories.map((cat) => (
            <Link
              className="flex flex-col gap-7.5"
              href={cat.href}
              key={cat.id}
            >
              <div className="relative pb-[125.65%]">
                <Image
                  src={cat.preview.url}
                  width={382}
                  height={480}
                  alt={cat.preview.title}
                  className="absolute left-0 top-0 w-full h-full object-cover object-center"
                />
              </div>
              <div className="text-zinc-800 text-2xl font-semibold text-center">
                {cat.title}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
