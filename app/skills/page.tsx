export default function SkillsPage() {
    const skills = {
      languages: [
        { name: "C++", icon: "/icons/C++.png" },
        { name: "C", icon: "/icons/C.png" },
        { name: "Python", icon: "/icons/python.png" },
        { name: "JavaScript", icon: "/icons/JavaScript.png" },
        { name: "HTML", icon: "/icons/HTML.png" },
        { name: "CSS", icon: "/icons/CSS.png" },
        { name: "R", icon: "/icons/R.jpg" },
        { name: "SQL", icon: "/icons/SQL.png" },
        { name: "Verilog", icon: "/icons/Verilog.jpg" },
        { name: "RISC-V", icon: "/icons/RISC-V.png" }
      ],
      technologies: [
        { name: "ReactJS", icon: "/icons/react.png" },
        { name: "Node.js", icon: "/icons/nodejs.png" },
        { name: "LTspice", icon: "/icons/ltspice.jpeg" },
        { name: "ModelSim", icon: "/icons/modelsim.png" },
        { name: "Keil Vision", icon: "/icons/keil.png" },
        { name: "Vivado", icon: "/icons/vivado.png" },
        { name: "Vitis", icon: "/icons/vitis.png" },
        { name: "Pentaho", icon: "/icons/pentaho.png" }
      ],
      devTools: [
        { name: "Git", icon: "/icons/git.png" },
        { name: "Firebase", icon: "/icons/firebase.png" },
        { name: "Spring Boot", icon: "/icons/spring.png" },
        { name: "Postman", icon: "/icons/postman.png" },
        { name: "MongoDB", icon: "/icons/mongo.png" },
        { name: "Linux", icon: "/icons/linux.png" },
        { name: "Unity3D", icon: "/icons/unity.png" }
      ],
      hardware: [
        { name: "Xilinx Artix-7", icon: "/icons/artix7.avif" },
        { name: "STM32", icon: "/icons/stm32.png" },
        { name: "Arduino", icon: "/icons/arduino.png" },
        { name: "Nordic nRF52840", icon: "/icons/nordic.png" }
      ]
    };
  
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