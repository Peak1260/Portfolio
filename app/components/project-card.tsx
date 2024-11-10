import Link from "next/link";

interface ProjectProps {
  title: string;
  description: string;
  year: number;
  url: string;
}

export default function ProjectCard({ title, description, year, url }: ProjectProps) {
  return (
    <Link 
      href={url} 
      target="_blank"
      className="flex flex-col h-full rounded-lg border border-neutral-800 hover:border-neutral-600 transition-colors p-4 bg-neutral-900/50"
    >
      <div className="flex items-center gap-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <span className="text-neutral-500">{year}</span>
      </div>
      <p className="mt-2 text-neutral-400 text-sm">{description}</p>
    </Link>
  );
}