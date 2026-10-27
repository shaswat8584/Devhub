// import * as Icons from "lucide-react";

// export default function Cards({ resource }) {
//   const Icon = Icons[resource.icon] || Icons.Code2;
//   return (
//     <div className="group w-100 h-64 mx-auto perspective-[1000px] cursor-pointer">
//       <div className="relative w-full h-full transition-transform duration-500 transform-3d group-hover:transform-[rotateY(180deg)]">
//         {/* Front Side */}
//         <div className="absolute w-full h-full backface-hidden flex flex-col text-center items-center justify-center rounded-md bg-white border border-gray-200 text-zinc-950">
//           <Icon className="mb-2 text-fuchsia-600" size={24} />
//           <h1>Resource name: {resource.name}</h1>
//           <p>Resource description: {resource.description}</p>
//           <p>Resource category: {resource.category}</p>
//           <a href={resource.url}>Resource url</a>
//         </div>

//         {/* Back Side */}
//         <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center rounded-md bg-indigo-600 text-white transform-[rotateY(180deg)]">
//           <Icon className="mb-2 text-fuchsia-600" size={24} />
//           <h1>Resource name: {resource.name}</h1>
//           <p>Resource description: {resource.description}</p>
//           <p>Resource category: {resource.category}</p>
//           <a href={resource.url}>Resource url</a>
//         </div>
//       </div>
//     </div>
//   );
// }

import * as Icons from "lucide-react";

export default function Cards({ resource }) {
  const Icon = Icons[resource.icon] || Icons.Code2;

  return (
    <div className="group relative mx-auto h-72 w-full min-w-0 [perspective:1000px]">
      <div className="relative h-full w-full [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 flex flex-col rounded-2xl border border-border bg-surface p-5 text-text [backface-visibility:hidden]">
          <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-xl border border-border">
            {resource.image ? (
              <img
                src={resource.image}
                alt={resource.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <Icon size={56} className="text-primary" />
            )}
          </div>

          <div className="flex items-center gap-3 pt-4">
            <Icon size={24} className="shrink-0 text-primary" />
            <h2 className=" text-lg font-semibold">{resource.name}</h2>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex flex-col rounded-2xl border border-border bg-surface p-5 text-text [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="min-h-0 flex-1 overflow-y-auto rounded-xl border-2 border-border p-4">
            <h2 className="mb-3 text-lg font-semibold">{resource.name}</h2>
            <p className="text-sm leading-relaxed text-muted">
              {resource.description}
            </p>
          </div>

          <div className="flex justify-end pt-4 text-muted transition-colors hover:text-text">
            <a href={resource.url} className="flex items-center gap-2 text-sm">
              Open <Icons.ArrowUpRight size={22} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
