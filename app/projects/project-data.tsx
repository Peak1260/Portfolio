export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "MoneyTracker Website",
    year: 2024,
    description: 
      "A financial literacy platform built with HTML, CSS, and JavaScript, offering interactive budgeting tools and investment education resources to promote financial well-being.",
    url: "https://moneytracker-5ad6b.web.app",
  },
  {
    title: "Garage Door Controller",
    year: 2024,
    description:
      "An STM32-based smart garage door system utilizing accelerometer, stepper motor, and temperature sensors. Features optimized UART commands, SPI display integration, and I2C temperature monitoring.",
    url: "",
  },
  {
    title: "Pipeline Processor",
    year: 2024,
    description:
      "A RISC-V pipeline processor implemented in Verilog with branch prediction capabilities, achieving 15% faster execution time through optimized cycle management.",
    url: "",
  },
  {
    title: "Calculator Compiler",
    year: 2023,
    description:
      "A C++ based calculator interpreter featuring custom lexer and parser implementation with robust error handling and abstract syntax tree processing.",
    url: "",
  },
  {
    title: "Thunderbird Taillight",
    year: 2023,
    description:
      "A Verilog-based finite state machine implementation for Ford Thunderbird sequential taillights, demonstrated through FPGA programming and circuit construction.",
    url: "",
  },
  {
    title: "Online Poker Platform",
    year: 2021,
    description:
      "A ReactJS multiplayer poker website with real-time gameplay, lobby system, and chip-based betting mechanics. Features comprehensive player actions and persistent chip tracking.",
    url: "https://project-series-f21.web.app",
  },
  {
    title: "Peak Gaming",
    year: 2020,
    description:
      "A comprehensive gaming portal featuring game reviews, esports coverage, hardware recommendations, and gaming guides.",
    url: "https://peak-gaming.netlify.app",
  },
  {
    title: "Peak Racing",
    year: 2019,
    description:
      "A Unity 3D racing game featuring six unique maps, vehicle customization, and performance tracking. Includes lap counter, race timer, and multiple vehicle options.",
    url: "",
  },
];