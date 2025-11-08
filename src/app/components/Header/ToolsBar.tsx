import { User, Search, Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
export default function ToolsBar() {
  const iconSize = 28;
  return (
    <div className="flex items-center gap-11.25">
      <Link className="hover:text-mainyellow" href="#">
        <User size={iconSize} />
      </Link>
      <Link className="hover:text-mainyellow" href="#">
        <Search size={iconSize} />
      </Link>
      <Link className="hover:text-mainyellow" href="#">
        <Heart size={iconSize} />
      </Link>
      <Link className="hover:text-mainyellow" href="#">
        <ShoppingCart size={iconSize} />
      </Link>
    </div>
  );
}
