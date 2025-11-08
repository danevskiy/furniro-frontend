import { User, Search, Heart, ShoppingCart } from "lucide-react";
export default function ToolsBar() {
  const iconSize = 28;
  return (
    <div className="flex items-center gap-11.25">
      <a href="#">
        <User size={iconSize} />
      </a>
      <a href="#">
        <Search size={iconSize} />
      </a>
      <a href="#">
        <Heart size={iconSize} />
      </a>
      <a href="#">
        <ShoppingCart size={iconSize} />
      </a>
    </div>
  );
}
