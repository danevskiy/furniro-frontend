import Logo from "./Logo";
import Menu from "./Menu/Menu";
import Container from "../Container";
import ToolsBar from "./ToolsBar";
import { Menu as MenuIcon } from "lucide-react";
export default function Header() {
  return (
    <header className="py-3 lg:py-7.5 sticky left-0 top-0 z-3 bg-white">
      <Container className="flex flex-wrap items-center justify-between relative">
        <div className="block lg:hidden">
          <MenuIcon size={28} />
        </div>
        <Logo />
        <Menu />
        <ToolsBar />
      </Container>
    </header>
  );
}
