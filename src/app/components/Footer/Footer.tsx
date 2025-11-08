import Container from "../Container";
import LinksColumn from "./LinksColumn";
import SubscribeColumn from "./SubscribeColumn";
export default function Footer() {
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

  const helpList = [
    {
      id: 1,
      title: "Payment Options",
      href: "#",
    },
    {
      id: 2,
      title: "Returns",
      href: "#",
    },
    {
      id: 3,
      title: "Privacy Policies",
      href: "#",
    },
  ];

  return (
    <footer className="pt-12 pb-9.5 border-t border-black/20">
      <Container>
        <div className="flex flex-wrap pb-12 mb-8.75 border-b border-black/20">
          <div className="mr-34.5 flex flex-col gap-13.5">
            <div className="text-black text-2xl font-bold ">Funiro.</div>
            <div className="text-neutral-400">
              400 University Drive Suite 200 Coral
              <br />
              Gables,
              <br />
              FL 33134 USA
            </div>
          </div>
          <LinksColumn className="mr-36" links={menuList} title="Links" />
          <LinksColumn className="mr-18" links={helpList} title="Help" />
          <SubscribeColumn title="Newsletter" />
        </div>
        <div>
          <div className="text-black">2025 furino. All rights reverved</div>
        </div>
      </Container>
    </footer>
  );
}
