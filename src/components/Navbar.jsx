
import { Code2 } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = ({ onAddResource }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b border-border transition-colors duration-300 ${
        scrolled ? "bg-surface/70 backdrop-blur-md" : "bg-bg"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <Code2 size={26} className="text-primary" />
          <span className="text-xl font-bold">
            Dev<span className="text-primary">Hub</span>
          </span>
        </a>

        <div className="flex items-center gap-6">
          {/* <a
            href="#resources"
            className="text-muted transition-colors hover:text-text"
          >
            Resources
          </a>

          <a
            href="#categories"
            className="text-muted transition-colors hover:text-text"
          >
            Categories
          </a> */}

          <button
            onClick={onAddResource}
            className="rounded-lg bg-primary px-4 py-2 font-medium text-white transition hover:bg-violet-500"
          >
            Add Resource
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
