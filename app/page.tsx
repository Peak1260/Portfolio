"use client";
import { motion } from "framer-motion";
import Particles from "./components/particles";
import Image from "next/image";
import { Section } from "./components/sections";
import { projects } from "./projects/project-data";
import ProjectCard from "./components/project-card";
import { skills } from "./skills/skills-data";

export default function HomePage() {
  const courses = [
    {
      category: "Computer Science",
      classes: [
        {
          code: "CS 8, 16, 24, 32",
          description:
            "Variables, Functions, Loops, Arrays/Vectors, Branches, Pointers, Struct, Linked Lists, Recursion, Constructors, String Stream, Heap/Stack, Encapsulation, Polymorphism, Inheritance.",
        },
        {
          code: "CS 40",
          description:
            "Propositional predicate logic, set theory, functions and relations, counting, mathematical induction, recursion.",
        },
        {
          code: "CS 130A",
          description:
            "DFS/BFS, Dijkstra's, Bellman-Ford's, Topological Sort, MST (Prim's and Kruskal's), Hash Tables, AVL rotations/insertions/removals.",
        },
        {
          code: "CS 156",
          description:
            "Generic programming, exception handling, application development, third-party library use, version control, software testing, issue tracking, code review, working with legacy code.",
        },
        {
          code: "CS 170",
          description:
            "Process; interprocess communication and synchronization; input-output, file systems, memory management.",
        },
        {
          code: "CS 171",
          description:
            "Distributed systems architecture/programming, network of computers, message passing, remote procedure calls, group communication, naming and membership problems, asynchrony, logical time, consistency, fault tolerance, and recovery.",
        },
        {
          code: "CS 177",
          description:
            "Analysis of technical difficulties in producing secure computer information systems that provide guaranteed controlled sharing. Examination and critique of current systems, methods, and certification.",
        },
        {
          code: "CS 176A",
          description:
            "Basic concepts in networking, the OSI model, error detection codes, flow control, routing, medium access control, and high-speed networks",
        },
        {
          code: "CS 190J",
          description:
            "Introduction to network science and its applications. Topics include network structure, dynamics, and algorithms, with a focus on real-world applications in social networks, biological networks, and technological networks.",
        },
      ],
    },
    {
      category: "Electrical & Computer Engineering",
      classes: [
        {
          code: "ECE 10A, 10B, 10C",
          description:
            "Resistive networks, network analysis, MOSFET, small-signal analysis, BJT, op-amps, first-order and second-order linear time-invariant circuits, sinusoidal steady state, impedance representation, feedback and resonance.",
        },
        {
          code: "ECE 15A",
          description:
            "Boolean algebra, logic of propositions, minterm and maxterm expansions, Karnaugh maps, Quine-McCluskey methods, multi-level circuits, combinational circuit design and simulation, multiplexers, decoders, programmable logic devices.",
        },
        {
          code: "ECE 152A",
          description:
            "Design of synchronous digital systems: timing diagrams, propagation delay, latches and flip-flops, shift registers and counters, Mealy/Moore finite state machines, Verilog, timing analysis, state minimization.",
        },
        {
          code: "ECE 153A",
          description:
            "Issues in interfacing computing systems and software to practical I/O interfaces. Rapid response, realtime events and management of tasks, threads, and scheduling.",
        },
        {
          code: "ECE 153B",
          description:
            "Hardware description languages; field-programmable logic and ASIC design techniques. Mixed signal techniques: ADC/DAC; video and audio signal acquisition, processing and generation, communication and network interfaces.",
        },
        {
          code: "ECE 154A, 154B",
          description:
            "Instruction-set architecture (ISA) and computer performance; Machine instructions, assembly; Memory map; Procedure calls; Simple ALUs; Pipelined data paths and control schemes; Cache and virtual memory; Instruction-level parallelism.",
        },
        {
          code: "ECE 157A, 157B",
          description:
            "Introduces an artificial intelligence system view to apply machine learning to improve hardware design and test automation processes.",
        },
        {
          code: "ECE 152B",
          description:
            "Design methodologies of digital systems, the register and processor levels. Design of functional subsystems, including arithmetic processors, hardwired and microprogrammed control units, memory systems, and bussing systems.",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center pt-20 pb-20 min-h-screen">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-sky-400 to-orange-500 bg-clip-text text-transparent"
        >
          Pitchaya Manopchantaroj
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl mb-8 text-neutral-400 text-center"
        >
          Computer Engineer
        </motion.h2>
      </div>

      {/* About Me Section */}
      <section className="w-full p-6 md:p-8 bg-neutral-900 rounded-xl shadow-lg mb-16">
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={180}
          height={180}
          priority
        />
        <div className="prose prose-neutral dark:prose-invert">
          <h2 className="text-orange-500">Get To Know Me</h2>
          <p>
            I recently graduated with a degree in Computer Engineering from UC
            Santa Barbara. I'm passionate about technology and its potential to
            drive innovation. My experience spans building projects ranging from
            embedded systems to web development. I'm eager to apply my skills to
            real-world problems and create meaningful solutions. I believe
            technology is the catalyst that pushes our world forward, and I'm
            excited to be part of this journey.
          </p>
          <h2 className="text-orange-500">Beyond the Code</h2>
          <p>
            When I'm not working on coding or engineering projects, you'll find
            me on the basketball court or at the gym. I'm a firm believer in
            maintaining a healthy balance between mental and physical
            well-being. I'm also deeply interested in financial markets and
            investing. Understanding the intricacies of stocks and finance isn't
            just a hobby for me, it's a passion that complements my technical
            background and analytical mindset.
          </p>
          <h2 className="text-orange-500">Exploring the World</h2>
          <p>
            One of my greatest aspirations is to explore different corners of the
            world. I'm fascinated by diverse cultures, cuisines, and
            perspectives. I believe that traveling isn't just about visiting new
            places; it's about broadening our horizons and understanding
            different ways of life.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="w-full p-6 md:p-8 bg-neutral-900 rounded-xl shadow-lg mb-16">
        <h1 className="text-3xl font-bold tracking-tight mb-8 text-sky-400 text-center">
          Work Experience
        </h1>
        <div className="flex flex-col gap-16">
          <Section>
            <h2 className="text-xl font-bold text-orange-500">Data Engineer Intern</h2>
            <p className="text-neutral-400">Forsys · Milpitas, CA</p>
            <p className="text-neutral-500">July 2024 - Sept 2024</p>
            <ul className="list-disc list-inside space-y-2 text-neutral-300 mt-4">
              <li>
                Converted customers&apos; legacy codebases to modern database
                platforms using the Flodata ETL tool. Designed data pipelines to
                ensure seamless migration, enhance workflow, and minimize manual
                efforts by 80%.
              </li>
              <li>
                Performed data integration for 15 SAP tables into Oracle
                database using REST API calls, converting data to XML, parsing
                values, and executing nightly full loads by truncating and
                reloading SQL tables.
              </li>
            </ul>
          </Section>
          <Section>
  
            <h2 className="text-xl font-bold text-orange-500">Frontend Developer</h2>
            {/* Adjusted secondary text color */}
            <p className="text-neutral-400">EZessence · Redwood City, CA</p>
            {/* Adjusted tertiary text color */}
            <p className="text-neutral-500">June 2023 - June 2024</p>
             {/* Adjusted list text color */}
            <ul className="list-disc list-inside space-y-2 text-neutral-300 mt-4">
              <li>
                Developed a responsive e-commerce website with ReactJS, HTML,
                CSS, and JavaScript to improve user experience, foster customer
                relationships, and drive sustained business growth.
              </li>
              <li>
                Created innovative spreadsheets for pricing and profitability
                analysis, enabling data-driven procurement. Executed daily
                purchases to replenish inventory, resulting in a 20% revenue
                increase on Amazon Seller Central.
              </li>
            </ul>
          </Section>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full p-6 md:p-8 bg-neutral-900 rounded-xl shadow-lg mb-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-sky-400 text-center">Projects</h1>
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
      </section>

      {/* Skills Section */}
      <section className="w-full p-6 md:p-8 bg-neutral-900 rounded-xl shadow-lg mb-16">
        <h1 className="text-3xl font-bold mb-8 text-sky-400 text-center">Technical Skills</h1>
        <div className="space-y-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <h2 className="text-2xl font-semibold capitalize text-orange-500">
                {category.replace(/([A-Z])/g, " $1").trim()}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {items.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 bg-neutral-800 rounded-xl shadow-md hover:shadow-lg
                             transition-all duration-300 flex items-center space-x-3
                             min-h-[4rem] break-words hover:bg-neutral-700"
                  >
                    <div className="flex-shrink-0">
                      <img
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    {/* Kept skill name white for readability */}
                    <span className="font-medium text-sm flex-1 break-words text-neutral-100">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coursework Section */}
      <section className="w-full p-6 md:p-8 bg-neutral-900 rounded-xl shadow-lg mb-16">
        <h1 className="text-3xl font-bold mb-12 text-center text-sky-400">My Coursework</h1>
        {courses.map((category) => (
          <div key={category.category} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-orange-500">
              {category.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.classes.map((course) => (
                <div
                  key={course.code}
                  className="group bg-neutral-800 rounded-xl shadow-md overflow-hidden cursor-pointer
                                   transition-all duration-300 hover:shadow-xl hover:bg-neutral-700"
                >
                  <div
                    className="p-6 min-h-[96px] flex flex-col justify-center items-center
                                          group-hover:min-h-[200px] transition-all duration-300 w-full"
                  >
                    <h3 className="text-base font-bold text-center mb-2 w-full text-neutral-100">
                      {course.code}
                    </h3>
                    <p
                      className="mt-4 text-sm text-neutral-300 opacity-0 max-h-0
                                            group-hover:max-h-[500px] group-hover:opacity-100
                                            transition-all duration-300 overflow-hidden
                                            w-full text-center whitespace-normal break-words"
                    >
                      {course.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}