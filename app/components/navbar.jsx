// @flow strict
import Link from "next/link";

const links = [
  { href: "/#about", label: "ABOUT" },
  { href: "/#experience", label: "EXPERIENCE" },
  { href: "/#skills", label: "SKILLS" },
  { href: "/#education", label: "EDUCATION" },
  { href: "/#certifications", label: "CERTS" },
  { href: "/blog", label: "BLOGS" },
  { href: "/#projects", label: "PROJECTS" },
];

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5 gap-4">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-[#16f2b3] text-2xl lg:text-3xl font-bold">
            AKSHAY VERMA
          </Link>
        </div>

        {/* Below md this list used to stay in the layout as an invisible
            (max-h-0 + opacity-0) column, which still pushed the page ~27px wide
            and gave mobile a sideways scroll. There is no hamburger to open it,
            so it is simply not rendered until md. Padding and the wordmark tighten
            at md so all seven items fit at 768px instead of overflowing by 217px. */}
        {/* min-w-0 + overflow-x-auto: seven items and the wordmark do not fit in
            the 657px content box at 768px. Letting the strip scroll inside itself
            keeps every link reachable without widening the page, and at lg it is
            wide enough that no scrollbar ever appears. */}
        <ul className="hidden md:flex md:flex-row md:items-center text-sm min-w-0 overflow-x-auto no-scrollbar" id="navbar-default">
          {links.map(({ href, label }) => (
            <li key={href} className="flex-shrink-0">
              <Link className="block px-2 lg:px-4 py-2 no-underline outline-none hover:no-underline" href={href}>
                <div className="text-sm text-white whitespace-nowrap transition-colors duration-300 hover:text-pink-600">{label}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
