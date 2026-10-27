import * as Icons from "lucide-react";

export default function Cards({ resource }) {
  const Icon = Icons[resource.icon] || Icons.Code2;

  return (
    <div className="group mx-auto h-64 w-full max-w-sm cursor-pointer [perspective:1000px]">
      <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl border border-border bg-surface p-5 text-center text-text [backface-visibility:hidden]">
          <Icon className="mb-3 text-primary" size={28} />

          <h2 className="mb-2 text-xl font-bold">{resource.name}</h2>

          <p className="mb-2 text-sm text-muted">{resource.description}</p>

          <span className="rounded-full bg-primary/15 px-3 py-1 text-xs text-primary">
            {resource.category}
          </span>

          <p className="mt-3 text-xs text-muted">Hover to flip</p>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl border border-border bg-surface-hover p-5 text-center text-text [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <Icon className="mb-3 text-secondary" size={32} />

          <h2 className="mb-2 text-lg font-bold">{resource.name}</h2>

          <p className="mb-5 text-sm text-muted">
            Explore the official resource.
          </p>

          <a
            href={resource.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-primary px-4 py-2 font-medium text-white transition hover:bg-violet-500"
          >
            Visit Resource ↗
          </a>
        </div>
      </div>
    </div>
  );
}
