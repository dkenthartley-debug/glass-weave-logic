import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Breadcrumbs = ({ items }: { items: { name: string; path: string }[] }) => (
  <nav aria-label="Breadcrumb" className="border-b border-border bg-surface/40">
    <div className="container py-3 flex items-center gap-2 text-xs text-muted-foreground overflow-x-auto">
      {items.map((it, i) => (
        <span key={it.path} className="flex items-center gap-2 whitespace-nowrap">
          {i > 0 && <ChevronRight size={12} className="opacity-50" />}
          {i === items.length - 1 ? (
            <span className="text-foreground">{it.name}</span>
          ) : (
            <Link to={it.path} className="hover:text-primary">
              {it.name}
            </Link>
          )}
        </span>
      ))}
    </div>
  </nav>
);

export default Breadcrumbs;
