import Logo from "./Logo";
import Menu from "./Menu/Menu";
import Container from "../Container";
import ToolsBar from "./ToolsBar";
export default function Header() {
  return (
    <header className="py-7.5 sticky left-0 top-0 z-3 bg-white">
      <Container className="flex flex-wrap items-center justify-between relative">
        <Logo />
        <Menu />
        <ToolsBar />
      </Container>
    </header>
  );
}
