import Link from "next/link";
type LinkType = {
  id: number;
  title: string;
  href: string;
};
type LinksColumnProps = {
  title: string;
  links: LinkType[];
  className?: string;
};
export default function LinksColumn({
  title = "",
  links = [],
  className = "",
}: LinksColumnProps) {
  return (
    <div className={`${className} flex flex-col gap-13.5`}>
      <div className="text-neutral-400 font-medium">{title}</div>
      <div>
        <ul className="flex flex-col gap-11.5">
          {links.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="text-black font-medium hover:text-mainyellow"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
