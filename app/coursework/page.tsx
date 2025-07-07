import Link from 'next/link';

export default function CourseworkPage() {
    const courses = [
        {
            category: "Computer Science",
            classes: [
                {
                    code: "CS 8, 16, 24, 32",
                    description: "Variables, Functions, Loops, Arrays/Vectors, Branches, Pointers, Struct, Linked Lists, Recursion, Constructors, String Stream, Heap/Stack, Encapsulation, Polymorphism, Inheritance."
                },
                {
                    code: "CS 40",
                    description: "Propositional predicate logic, set theory, functions and relations, counting, mathematical induction, recursion."
                },
                {
                    code: "CS 130A",
                    description: "DFS/BFS, Dijkstra\'s, Bellman-Ford\'s, Topological Sort, MST (Prim\'s and Kruskal\'s), Hash Tables, AVL rotations/insertions/removals."
                },
                {
                    code: "CS 156",
                    description: "Generic programming, exception handling, application development, third-party library use, version control, software testing, issue tracking, code review, working with legacy code."
                },
                {
                    code: "CS 170",
                    description: "Process; interprocess communication and synchronization; input-output, file systems, memory management."
                },
                {
                    code: "CS 171",
                    description: "Distributed systems architecture/programming, network of computers, message passing, remote procedure calls, group communication, naming and membership problems, asynchrony, logical time, consistency, fault tolerance, and recovery."
                },
                {
                    code: "CS 177",
                    description: "Analysis of technical difficulties in producing secure computer information systems that provide guaranteed controlled sharing. Examination and critique of current systems, methods, and certification."
                },
                {
                    code: "CS 176A",
                    description: "Basic concepts in networking, the OSI model, error detection codes, flow control, routing, medium access control, and high-speed networks"
                },
                {
                    code: "CS 190J",
                    description: "Introduction to network science and its applications. Topics include network structure, dynamics, and algorithms, with a focus on real-world applications in social networks, biological networks, and technological networks."
                }
            ]
        },
        {
            category: "Electrical & Computer Engineering",
            classes: [
                {
                    code: "ECE 10A, 10B, 10C",
                    description: "Resistive networks, network analysis, MOSFET, small-signal analysis, BJT, op-amps, first-order and second-order linear time-invariant circuits, sinusoidal steady state, impedance representation, feedback and resonance."
                },
                {
                    code: "ECE 15A",
                    description: "Boolean algebra, logic of propositions, minterm and maxterm expansions, Karnaugh maps, Quine-McCluskey methods, multi-level circuits, combinational circuit design and simulation, multiplexers, decoders, programmable logic devices."
                },
                {
                    code: "ECE 152A",
                    description: "Design of synchronous digital systems: timing diagrams, propagation delay, latches and flip-flops, shift registers and counters, Mealy/Moore finite state machines, Verilog, timing analysis, state minimization."
                },
                {
                    code: "ECE 153A",
                    description: "Issues in interfacing computing systems and software to practical I/O interfaces. Rapid response, realtime events and management of tasks, threads, and scheduling."
                },
                {
                    code: "ECE 153B",
                    description: "Hardware description languages; field-programmable logic and ASIC design techniques. Mixed signal techniques: ADC/DAC; video and audio signal acquisition, processing and generation, communication and network interfaces."
                },
                {
                    code: "ECE 154A, 154B",
                    description: "Instruction-set architecture (ISA) and computer performance; Machine instructions, assembly; Memory map; Procedure calls; Simple ALUs; Pipelined data paths and control schemes; Cache and virtual memory; Instruction-level parallelism."
                },
                {
                    code: "ECE 157A, 157B",
                    description: "Introduces an artificial intelligence system view to apply machine learning to improve hardware design and test automation processes."
                },
                {
                    code: "ECE 152B",
                    description: "Design methodologies of digital systems, the register and processor levels. Design of functional subsystems, including arithmetic processors, hardwired and microprogrammed control units, memory systems, and bussing systems."
                }
            ]
        }
    ];

    return (
        <main className="max-w-6xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-12 text-center">My Coursework</h1>
    
            {courses.map((category) => (
                <div key={category.category} className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6 text-green-600">{category.category}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.classes.map((course) => (
                            <div
                                key={course.code}
                                className="group bg-gray-700 rounded-xl shadow-md overflow-hidden cursor-pointer 
                                         transition-all duration-300 hover:shadow-xl"
                            >
                                <div className="p-6 min-h-[96px] flex flex-col justify-center items-center
                                              group-hover:min-h-[200px] transition-all duration-300 w-full">
                                    <h3 className="text-base font-bold text-center mb-2 w-full">{course.code}</h3>
                                    
                                    <p className="mt-4 text-sm text-white opacity-0 max-h-0 
                                              group-hover:max-h-[500px] group-hover:opacity-100 
                                              transition-all duration-300 overflow-hidden
                                              w-full text-center whitespace-normal break-words">
                                        {course.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </main>
    );
}