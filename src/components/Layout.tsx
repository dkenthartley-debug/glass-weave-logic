import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/capabilities", label: "Capabilities" },
  { to: "/technologies", label: "Technologies" },
  { to: "/products", label: "Products" },
  { to: "/markets", label: "Markets" },
  { to: "/technical-library", label: "Technical Library" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Layout = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-navy-deep/85 backdrop-blur-md">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Hotlineglass USA"
              className="h-9 md:h-10 w-auto object-contain"
            />
            <span className="hidden sm:block text-[10px] text-muted-foreground leading-tight max-w-[140px]">
              HLG / Specialty Glass Technology
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-1">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `px-3 py-2 text-xs font-medium tracking-wide uppercase transition-colors border-b-2 ${
                    isActive ? "text-primary border-primary" : "text-muted-foreground border-transparent hover:text-foreground"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden xl:inline-flex mono px-4 py-2 bg-primary text-primary-foreground hover:bg-primary-glow transition-colors"
          >
            Discuss a Project
          </Link>

          <button
            className="xl:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="xl:hidden border-t border-border bg-surface">
            <nav className="container py-4 flex flex-col">
              {NAV.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.to === "/"}
                  className={({ isActive }) =>
                    `py-3 text-sm uppercase tracking-wide border-b border-border/60 ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <Link to="/contact" className="mt-4 mono px-4 py-3 bg-primary text-primary-foreground text-center">
                Discuss a Project
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border bg-navy-deep mt-24">
        <div className="container py-14 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <img
              src="/logo.png"
              alt="Hotlineglass USA"
              className="h-12 w-auto object-contain"
            />
            <p className="mono text-muted-foreground mt-3">Conductive Interlayers · Specialty Films · Embedded Wire</p>
            <p className="text-sm text-muted-foreground mt-4 max-w-md leading-relaxed">
              HLG develops and supplies specialty interlayers, embedded wire products, conductive films,
              sensor mats, and electrically active glass components for advanced glazing manufacturers.
            </p>
          </div>
          <div>
            <div className="mono text-foreground mb-3">Technologies</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/technologies" className="hover:text-primary">All Technologies</Link></li>
              <li><Link to="/products" className="hover:text-primary">Products</Link></li>
              <li><Link to="/markets" className="hover:text-primary">Markets</Link></li>
              <li><Link to="/conductive-interlayers" className="hover:text-primary">Conductive Interlayers</Link></li>
            </ul>
          </div>
          <div>
            <div className="mono text-foreground mb-3">Engineering</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/engineering-resources" className="hover:text-primary">Resource Center</Link></li>
              <li><Link to="/engineering-resources/faq" className="hover:text-primary">FAQ Library</Link></li>
              <li><Link to="/technical-library" className="hover:text-primary">Engineering Standards &amp; Technical Library</Link></li>
              <li><Link to="/capabilities" className="hover:text-primary">Capabilities</Link></li>
              <li><Link to="/about" className="hover:text-primary">About HLG</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="container py-5 flex flex-col md:flex-row justify-between gap-2 text-xs text-muted-foreground">
            <div>© {new Date().getFullYear()} Hotlineglass USA. All rights reserved.</div>
            <div className="mono">HLG · Specialty Glass Technology</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
