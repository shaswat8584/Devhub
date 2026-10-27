import { Code2, ArrowUpRight, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t mt-32 border-border bg-bg text-text">
      <div className="mx-auto max-w-7xl px-6 py-4 sm:px-8">
        <div className="flex flex-col items-center justify-between gap- sm:flex-row">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2">
            <Code2 size={26} className="text-primary" />
            <span className="text-xl font-bold">
              Dev<span className="text-primary">Hub</span>
            </span>
          </a>

          {/* Description */}
          <p className="max-w-sm text-center text-sm text-muted sm:text-left">
            Your curated collection of resources to learn, build, and grow.
          </p>

          {/* Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted transition hover:text-primary"
            >
              {/* <Github size={21} /> */}
            </a>

            <a
              href="#top"
              className="flex items-center gap-1 text-sm text-muted transition hover:text-text"
            >
              Back to top <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
