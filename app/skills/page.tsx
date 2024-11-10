import { skills } from "./skills-data";

export default function SkillsPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold mb-8">Technical Skills</h1>
  
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="space-y-4">
          <h2 className="text-2xl font-semibold capitalize text-green-600">
            {category.replace(/([A-Z])/g, ' $1').trim()}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {items.map((skill) => (
              <div
                key={skill.name}
                className="p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg 
                         transition-all duration-300 flex items-center space-x-3
                         min-h-[4rem] break-words"
              >
                <div className="flex-shrink-0">
                  <img
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="font-medium text-sm flex-1 break-words">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}