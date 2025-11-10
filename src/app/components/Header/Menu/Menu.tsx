import Link from "next/link";
export default function Menu() {
  const menuList = [
    {
      id: 1,
      title: "Home",
      href: "#",
    },
    {
      id: 2,
      title: "Shop",
      href: "/shop",
    },
    {
      id: 3,
      title: "About",
      href: "#",
    },
    {
      id: 4,
      title: "Contact",
      href: "#",
    },
  ];
  return (
    <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <ul className="flex flex-wrap gap-18.75">
        {menuList.map((item) => (
          <li key={item.id}>
            <Link
              className="text-black font-medium hover:text-mainyellow"
              href={item.href}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
