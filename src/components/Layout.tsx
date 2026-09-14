import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { markets, solutions, technologies } from "@/data/hlg";

type NavItem = { label: string; to: string; children?: { label: string; to: string }[] };

export const NAV: NavItem[] = [
  {
    label: "Technologies",
    to: "/technologies",
    children: technologies.map((t) => ({ label: `${t.code} — ${t.name}`, to: `/technologies/${t.slug}` })),
  },
  {
    label: "Solutions",
    to: "/solutions",
    children: solutions.map((s) => ({ label: s.name, to: `/solutions#${s.id}` })),
  },
  {
    label: "Markets",
    to: "/markets",
    children: markets.map((m) => ({ label: m.name, to: `/markets/${m.slug}` })),
  },
  {
    label: "Engineering & Quality",
    to: "/engineering-quality",
    children: [
      { label: "Engineering & Quality", to: "/engineering-quality" },
      { label: "Technical Library", to: "/technical-library" },
      { label: "HLG Mutual NDA", to: "/engineering-review#nda" },
    ],
  },
  { label: "About HLG", to: "/about" },
];

const Layout = () => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="container flex items-center justify-between h-[68px] gap-4">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src="/logo.png" alt="Hotlineglass USA" className="h-9 md:h-10 w-auto object-contain" />
            <span className="sr-only">Hotlineglass USA</span>
          </Link>

          <nav className="hidden xl:flex items-center gap-1" aria-label="Primary">
            {NAV.map((n) => (
              <div key={n.label} className="relative group">
                <NavLink
                  to={n.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 px-3 py-2 mono transition-colors border-b-2 ${
                      isActive
                        ? "text-primary border-primary"
                        : "text-muted-foreground border-transparent hover:text-foreground"
                    }`
                  }
                >
                  {n.label}
                  {n.children && <ChevronDown size={12} />}
                </NavLink>
                {n.children && (
                  <div className="absolute left-0 top-full pt-2 hidden group-hover:block group-focus-within:block">
                    <div className="min-w-[300px] panel py-2">
                      {n.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          className="block px-5 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-surface transition-colors"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <Link to="/engineering-review" className="hidden xl:inline-flex btn-primary !px-5 !py-2.5">
            Start an Engineering Review
          </Link>

          <button className="xl:hidden p-2 text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="xl:hidden border-t border-border bg-background max-h-[80vh] overflow-y-auto">
            <nav className="container py-4 flex flex-col" aria-label="Mobile">
              {NAV.map((n) => (
                <div key={n.label} className="border-b border-border/70">
                  <div className="flex items-center justify-between">
                    <Link to={n.to} className="py-4 mono text-foreground flex-1">
                      {n.label}
                    </Link>
                    {n.children && (
                      <button
                        className="p-3 text-muted-foreground"
                        aria-label={`Expand ${n.label}`}
                        onClick={() => setExpanded(expanded === n.label ? null : n.label)}
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${expanded === n.label ? "rotate-180" : ""}`}
                        />
                      </button>
                    )}
                  </div>
                  {n.children && expanded === n.label && (
                    <div className="pb-3 flex flex-col">
                      {n.children.map((c) => (
                        <Link key={c.to} to={c.to} className="py-2.5 pl-4 text-sm text-muted-foreground">
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/engineering-review" className="mt-5 btn-primary w-full">
                Start an Engineering Review
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border bg-navy-deep text-silver">
        <div className="container py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src="/logo.png" alt="Hotlineglass USA" className="h-11 w-auto object-contain" />
            <p className="mono text-primary-glow mt-4">Engineered Functional Interlayers</p>
            <p className="text-sm text-silver/70 mt-4 leading-relaxed">
              Hotlineglass USA engineers and manufactures electrically functional interlayer systems for advanced
              laminated glass. Engineered in Butler, Pennsylvania.
            </p>
            <p className="mono text-silver/60 mt-5">ISO 9001:2015 · 100% Interlayer Inspection</p>
          </div>

          <div>
            <div className="mono text-background mb-4">Technologies</div>
            <ul className="space-y-2.5 text-sm">
              {technologies.map((t) => (
                <li key={t.slug}>
                  <Link to={`/technologies/${t.slug}`} className="text-silver/70 hover:text-primary-glow">
                    <span className="mono text-primary-glow mr-2">{t.code}</span>
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mono text-background mb-4">Markets</div>
            <ul className="space-y-2.5 text-sm">
              {markets.map((m) => (
                <li key={m.slug}>
                  <Link to={`/markets/${m.slug}`} className="text-silver/70 hover:text-primary-glow">
                    {m.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mono text-background mb-4">Engineering</div>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/solutions" className="text-silver/70 hover:text-primary-glow">Solutions &amp; Integration</Link></li>
              <li><Link to="/engineering-quality" className="text-silver/70 hover:text-primary-glow">Engineering &amp; Quality</Link></li>
              <li><Link to="/technical-library" className="text-silver/70 hover:text-primary-glow">Technical Library</Link></li>
              <li><Link to="/engineering-review" className="text-silver/70 hover:text-primary-glow">Start an Engineering Review</Link></li>
              <li><Link to="/engineering-review#nda" className="text-silver/70 hover:text-primary-glow">HLG Mutual NDA</Link></li>
              <li><Link to="/about" className="text-silver/70 hover:text-primary-glow">About HLG</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-silver/10">
          <div className="container py-5 flex flex-col md:flex-row justify-between gap-2 text-xs text-silver/60">
            <div>© {new Date().getFullYear()} Hotlineglass USA. All rights reserved.</div>
            <div className="mono">Butler, Pennsylvania · USA</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
