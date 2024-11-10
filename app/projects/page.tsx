import { projects } from "./project-data";
import ProjectCard from "../components/project-card";

export default function ProjectsPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Projects</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            year={project.year}
            url={project.url || "#"}
          />
        ))}
      </div>
    </div>
  );
}