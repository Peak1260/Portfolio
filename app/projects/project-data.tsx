export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "LCD Volume Bar",
    year: 2024,
    description: 
      "Implemented a hierarchical state machine on Xilinx Artix-7 FPGA using QP Nano framework. Features rotary encoder integration with debouncing and real-time volume bar visualization on an LCD display.",
    url: "https://youtu.be/AUGEYYG1B_s?si=CCIdHl_tRixV05ta",
  },
  {
    title: "MoneyTracker Website",
    year: 2024,
    description: 
      "A financial literacy platform built with HTML, CSS, and JavaScript, offering interactive budgeting tools and investment education resources to promote financial well-being.",
    url: "https://moneytracker-5ad6b.web.app",
  },
  {
    title: "Arts and Crafts Shop",
    year: 2024,
    description: 
      "A serverless e-commerce platform built with AWS Lambda, S3, and API Gateway. Features full CRUD operations for product management, secure image storage, and responsive design.",
    url: "https://hannah-artsandcrafts.netlify.app/",
  },
  {
    title: "Mini Garage Door",
    year: 2024,
    description:
      "An STM32-based garage door system utilizing accelerometer, stepper motor, and temperature sensors. Features optimized UART commands, SPI display integration, and I2C temperature monitoring.",
    url: "https://youtube.com/shorts/ZiEfbAlhHbw?si=-StQ1hJoBHUKk3U6",
  },
  {
    title: "Pipeline Processor",
    year: 2024,
    description:
      "A RISC-V pipeline processor implemented in Verilog with branch prediction capabilities, achieving 65% hit rate through optimized cycle management and global history predictor.",
    url: "",
  },
  {
    title: "Thunderbird Taillight",
    year: 2023,
    description:
      "A Verilog-based finite state machine implementation for Ford Thunderbird sequential taillights, demonstrated through FPGA programming and circuit construction.",
    url: "https://youtu.be/cghLAF-14a0?si=YELl_EWRi26JehNB",
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
    url: "https://github.com/Peak1260/Racing-Game",
  },
];