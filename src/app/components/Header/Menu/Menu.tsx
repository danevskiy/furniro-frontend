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
      href: "#",
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
            <a className="text-black text-base font-medium" href={item.href}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
