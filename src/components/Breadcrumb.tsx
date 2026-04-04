import Link from "next/link";

export default function Breadcrumb({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  return (
    <nav aria-label="breadcrumb" className="absolute top-20 left-0 right-0 z-40 text-sm text-white/60 py-3">
      <ol className="max-w-container mx-auto px-6 flex flex-wrap items-center gap-1 list-none p-0 m-0">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.url} className="flex items-center">
              {i > 0 && <span className="mx-1">/</span>}
              {isLast ? (
                <span aria-current="page" className="text-white/80 font-medium">
                  {item.name}
                </span>
              ) : (
                <Link href={item.url} className="hover:underline">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
