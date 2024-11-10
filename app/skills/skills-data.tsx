export interface Skill {
    name: string;
    icon: string;
  }
  
  export interface SkillCategories {
    languages: Skill[];
    technologies: Skill[];
    devTools: Skill[];
    hardware: Skill[];
  }
  
  export const skills: SkillCategories = {
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