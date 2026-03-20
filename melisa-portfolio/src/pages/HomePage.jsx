import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const profileImg = `${import.meta.env.BASE_URL}profile.jpg`;

const T = {
    bg: "#050508",
    ink: "#F6F7FB",
    muted: "rgba(246,247,251,0.72)",
    border: "rgba(255,255,255,0.10)",
    pink: "#FF4FA3",
};

const LINKS = {
    github: "https://github.com/melissapaksoy",
    linkedin: "https://www.linkedin.com/in/melissapaksoy/",
    email: "mailto:melisapaksoy@hotmail.com",
    portfolioDemo: "#",
};

const BIO =
    "Building full-stack web, mobile, and real-time applications that combine scalable system design with clean, intuitive, and visually refined user experiences.";

const ABOUT_ME =
    "I am a Computer Programming and Analysis student with a background in both design and software development. My journey from fashion and visual design into technology has shaped the way I approach building digital products. I care deeply about creating applications that are not only functional and reliable, but also refined, user-friendly, and thoughtfully designed.";

const CAREER_PHILOSOPHY =
    "Inspired by the idea that imagination is as important as knowledge, I believe strong software is built where creativity and logic meet. I focus on creating solutions that are not only functional, but also intuitive and thoughtfully designed.";

const CAREER_GOAL =
    "My goal is to grow into a full-stack developer who builds scalable, innovative applications that combine technical strength with creative thinking and user-focused design.";

function Card({ children, id }) {
    return (
        <div
            id={id}
            className="rounded-3xl border p-8 md:p-10 scroll-mt-24"
            style={{
                borderColor: "rgba(255,255,255,0.08)",
                background:
                    "linear-gradient(135deg, rgba(255,79,163,0.08), rgba(255,255,255,0.03))",
                boxShadow:
                    "0 0 0 1px rgba(255,79,163,0.05) inset, 0 24px 80px rgba(0,0,0,0.35)",
            }}
        >
            {children}
        </div>
    );
}

function LinkButton({ href, children, download }) {
    return (
        <a
            href={href}
            download={download}
            target={!download ? "_blank" : undefined}
            rel={!download ? "noreferrer" : undefined}
            className="inline-flex items-center justify-center px-5 py-3 rounded-2xl text-sm font-medium border transition hover:-translate-y-[1px] hover:bg-white/5"
            style={{ borderColor: T.border, color: T.ink }}
        >
            {children}
        </a>
    );
}

function NavButton({ href, children }) {
    return (
        <a
            href={href}
            className="inline-flex items-center justify-center px-4 py-2 rounded-2xl text-sm font-medium border transition hover:-translate-y-[1px] hover:bg-white/5"
            style={{ borderColor: T.border, color: T.muted }}
        >
            {children}
        </a>
    );
}

function SectionTitle({ children }) {
    return (
        <h2
            className="text-center text-2xl md:text-3xl font-semibold mb-8"
            style={{ color: T.pink }}
        >
            {children}
        </h2>
    );
}

function MiniTitle({ children }) {
    return (
        <h3 className="text-xl font-semibold" style={{ color: T.ink }}>
            {children}
        </h3>
    );
}

export default function HomePage() {
    return (
        <div
            className="min-h-screen px-6 py-16"
            style={{ background: T.bg, color: T.ink }}
        >
            <div className="max-w-6xl mx-auto space-y-10">
                {/* HERO */}
                <Card>
                    <div className="flex flex-col items-center text-center">
                        <div
                            className="w-full max-w-[420px] rounded-3xl overflow-hidden border"
                            style={{ borderColor: "rgba(255,79,163,0.30)" }}
                        >
                            <img
                                src={profileImg}
                                alt="Melisa Paksoy"
                                className="w-full h-[440px] object-cover"
                            />
                        </div>

                        <h1
                            className="mt-8 text-4xl md:text-5xl font-semibold"
                            style={{ color: T.pink }}
                        >
                            Melisa Paksoy
                        </h1>

                        <div className="mt-3 text-xl md:text-2xl font-semibold">
                            Full-Stack Developer
                        </div>

                        <p
                            className="mt-6 max-w-3xl text-base md:text-lg leading-[1.9]"
                            style={{ color: T.muted }}
                        >
                            {BIO}
                        </p>

                        <p
                            className="mt-6 text-xs uppercase tracking-widest"
                            style={{ color: T.muted }}
                        >
                            Contact Me
                        </p>

                        <div className="mt-3 flex flex-wrap justify-center gap-6">
                            <a
                                href={LINKS.github}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 text-sm hover:opacity-80 hover:scale-105 transition"
                                style={{ color: T.ink }}
                            >
                                <Github size={18} />
                                GitHub
                            </a>

                            <a
                                href={LINKS.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 text-sm hover:opacity-80 hover:scale-105 transition"
                                style={{ color: T.ink }}
                            >
                                <Linkedin size={18} />
                                LinkedIn
                            </a>

                            <a
                                href={LINKS.email}
                                className="flex items-center gap-2 text-sm hover:opacity-80 hover:scale-105 transition"
                                style={{ color: T.ink }}
                            >
                                <Mail size={18} />
                                Email
                            </a>
                        </div>

                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            <Link
                                to="/resume"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-2xl text-sm font-medium border transition hover:-translate-y-[1px] hover:bg-white/5"
                                style={{ borderColor: T.border, color: T.ink }}
                            >
                                Resume
                            </Link>

                            <Link
                                to="/cover-letter"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-2xl text-sm font-medium border transition hover:-translate-y-[1px] hover:bg-white/5"
                                style={{ borderColor: T.border, color: T.ink }}
                            >
                                Cover Letter
                            </Link>

                            <LinkButton href={LINKS.portfolioDemo}>Video Demo</LinkButton>
                        </div>
                    </div>
                </Card>

                {/* NAV */}
                <Card>
                    <div className="flex flex-wrap justify-center gap-3">
                        <NavButton href="#about">About Me</NavButton>
                        <NavButton href="#philosophy">Career Philosophy</NavButton>
                        <NavButton href="#professional-work">Professional Work</NavButton>
                        <NavButton href="#academic-work">Academic Work</NavButton>
                        <NavButton href="#skills">Technical Skills</NavButton>
                        <NavButton href="#education">Education</NavButton>
                        <NavButton href="#experience">Experience</NavButton>
                    </div>
                </Card>

                {/* ABOUT */}
                <Card id="about">
                    <SectionTitle>About Me</SectionTitle>
                    <div className="max-w-4xl mx-auto space-y-6 text-base md:text-lg leading-[1.9] text-center">
                        <p style={{ color: T.muted }}>{ABOUT_ME}</p>
                    </div>
                </Card>

                {/* CAREER PHILOSOPHY */}
                <Card id="philosophy">
                    <SectionTitle>Career Philosophy</SectionTitle>
                    <div className="max-w-4xl mx-auto space-y-6 text-base md:text-lg leading-[1.9] text-center">
                        <div className="text-center max-w-2xl mx-auto mb-6">
                            <p
                                className="italic text-sm md:text-base"
                                style={{ color: T.muted }}
                            >
                                “Imagination is more important than knowledge.”
                            </p>
                            <p className="mt-2 text-xs" style={{ color: T.pink }}>
                                — Albert Einstein
                            </p>
                        </div>
                        <p style={{ color: T.muted }}>{CAREER_PHILOSOPHY}</p>
                        <p style={{ color: T.muted }}>{CAREER_GOAL}</p>
                    </div>
                </Card>

                {/* PROFESSIONAL WORK */}
                <Card id="professional-work">
                    <SectionTitle>Professional Work Samples</SectionTitle>
                    <p
                        className="text-center max-w-2xl mx-auto text-sm mb-6"
                        style={{ color: T.muted }}
                    >
                        The following projects were developed within institutional and
                        collaborative environments, focusing on real-world applications,
                        system design, and production-level functionality.
                    </p>

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                        <Link
                            to="/projects/academicpdf"
                            className="p-6 rounded-2xl border hover:bg-white/5 transition block"
                            style={{ borderColor: T.border }}
                        >
                            <h3 className="font-semibold text-lg">AcademicPDF</h3>
                            <p className="mt-2 text-sm leading-7" style={{ color: T.muted }}>
                                Desktop PDF analyzer and structured report generator built with
                                Python and PyQt5 to support academic workflow automation and
                                document processing within institutional environments.
                            </p>
                            <div className="mt-4 text-sm font-medium" style={{ color: T.pink }}>
                                View Project →
                            </div>
                        </Link>

                        <Link
                            to="/projects/pathways"
                            className="p-6 rounded-2xl border hover:bg-white/5 transition block"
                            style={{ borderColor: T.border }}
                        >
                            <h3 className="font-semibold text-lg">Pathways Database</h3>
                            <p className="mt-2 text-sm leading-7" style={{ color: T.muted }}>
                                Academic pathway search system using PostgreSQL and a modern web
                                interface, designed to support structured searching, filtering,
                                and efficient data access for institutional use.
                            </p>
                            <div className="mt-4 text-sm font-medium" style={{ color: T.pink }}>
                                View Project →
                            </div>
                        </Link>

                        <Link
                            to="/projects/slideportal"
                            className="p-6 rounded-2xl border hover:bg-white/5 transition block"
                            style={{ borderColor: T.border }}
                        >
                            <h3 className="font-semibold text-lg">Student Awards SlidePortal</h3>
                            <p className="mt-2 text-sm leading-7" style={{ color: T.muted }}>
                                Real-time multi-device awards presentation system built with
                                Flask and Socket.IO to enable synchronized displays and
                                streamlined event workflows during institutional ceremonies.
                            </p>
                            <div className="mt-4 text-sm font-medium" style={{ color: T.pink }}>
                                View Project →
                            </div>
                        </Link>
                    </div>
                </Card>
                {/* ACADEMIC WORK */}
                <Card id="academic-work">
                    <SectionTitle>Academic Work Samples</SectionTitle>

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

                        <Link
                            to="/projects/glamup"
                            className="p-6 rounded-2xl border hover:bg-white/5 transition block text-center"
                            style={{ borderColor: T.border }}
                        >
                            <h3 className="font-semibold text-lg">GlamUp!</h3>
                            <p className="mt-2 text-sm leading-7" style={{ color: T.muted }}>
                                Cross-platform beauty services application built with React Native,
                                Expo, and Firebase featuring booking systems, role-based access,
                                and modern mobile UI.
                            </p>
                            <div className="mt-4 text-sm font-medium" style={{ color: T.pink }}>
                                View Project →
                            </div>
                        </Link>

                        <Link
                            to="/projects/chat"
                            className="p-6 rounded-2xl border hover:bg-white/5 transition block text-center"
                            style={{ borderColor: T.border }}
                        >
                            <h3 className="font-semibold text-lg">Real-Time Chat Application</h3>
                            <p className="mt-2 text-sm leading-7" style={{ color: T.muted }}>
                                Real-time messaging system built with Node.js, Express, MongoDB,
                                and Socket.IO supporting authentication and live communication.
                            </p>
                            <div className="mt-4 text-sm font-medium" style={{ color: T.pink }}>
                                View Project →
                            </div>
                        </Link>

                        <Link
                            to="/projects/gomoku"
                            className="p-6 rounded-2xl border hover:bg-white/5 transition block text-center"
                            style={{ borderColor: T.border }}
                        >
                            <h3 className="font-semibold text-lg">Gomoku AI</h3>
                            <p className="mt-2 text-sm leading-7" style={{ color: T.muted }}>
                                Strategic board game developed in Java using the Minimax algorithm
                                to simulate intelligent decision-making and gameplay.
                            </p>
                            <div className="mt-4 text-sm font-medium" style={{ color: T.pink }}>
                                View Project →
                            </div>
                        </Link>

                    </div>
                </Card>
                {/* SKILLS */}
                <Card id="skills">
                    <SectionTitle>Technical Skills</SectionTitle>

                    <div
                        className="space-y-5 text-sm md:text-base max-w-4xl mx-auto text-center"
                        style={{ color: T.muted }}
                    >
                        <div>
                            <strong style={{ color: T.ink }}>Languages:</strong> Python,
                            JavaScript, TypeScript, Java, C#, SQL, PHP
                        </div>
                        <div>
                            <strong style={{ color: T.ink }}>Frontend:</strong> React, React
                            Native, HTML, CSS, Tailwind
                        </div>
                        <div>
                            <strong style={{ color: T.ink }}>Backend:</strong> Flask, Node.js,
                            Express, Spring Boot, GraphQL, Socket.IO
                        </div>
                        <div>
                            <strong style={{ color: T.ink }}>Desktop:</strong> PyQt5
                        </div>
                        <div>
                            <strong style={{ color: T.ink }}>Databases:</strong> PostgreSQL,
                            MongoDB, Firebase
                        </div>
                        <div>
                            <strong style={{ color: T.ink }}>Tools & DevOps:</strong> Git,
                            Docker, Postman, VS Code, ngrok
                        </div>
                        <div>
                            <strong style={{ color: T.ink }}>Concepts:</strong> REST APIs,
                            Real-Time Systems, OOP, MVC Architecture, Authentication, Database
                            Design, Microservices
                        </div>
                    </div>
                </Card>

                {/* EDUCATION */}
                <Card id="education">
                    <SectionTitle>Academic Credentials & Awards</SectionTitle>

                    <div className="space-y-10 text-center">
                        <div>
                            <MiniTitle>
                                Advanced Diploma — Computer Programming & Analysis
                            </MiniTitle>

                            <div className="mt-1 text-sm" style={{ color: T.muted }}>
                                George Brown Polytechnic | Expected 2026
                            </div>

                            <div className="mt-2 text-sm font-medium" style={{ color: T.pink }}>
                                Honours Standing — Achieved Every Semester
                            </div>

                            <div
                                className="mt-6 grid md:grid-cols-2 gap-4 text-sm"
                                style={{ color: T.muted }}
                            >
                                <div>
                                    <strong style={{ color: T.ink }}>
                                        Programming & Software Development
                                    </strong>
                                    <ul className="mt-2 list-disc list-inside space-y-1">
                                        <li>Object-Oriented Programming</li>
                                        <li>Java Application Development</li>
                                        <li>Agile Software Development</li>
                                        <li>Open Source Development</li>
                                    </ul>
                                </div>

                                <div>
                                    <strong style={{ color: T.ink }}>Web & Full-Stack</strong>
                                    <ul className="mt-2 list-disc list-inside space-y-1">
                                        <li>Introduction to Web Development</li>
                                        <li>Advanced Web Programming</li>
                                        <li>Web Application Development</li>
                                        <li>Full Stack Development I & II</li>
                                    </ul>
                                </div>

                                <div>
                                    <strong style={{ color: T.ink }}>
                                        Systems & Infrastructure
                                    </strong>
                                    <ul className="mt-2 list-disc list-inside space-y-1">
                                        <li>Linux Essentials</li>
                                        <li>DevOps</li>
                                        <li>Introduction to Cyber Security</li>
                                    </ul>
                                </div>

                                <div>
                                    <strong style={{ color: T.ink }}>Data & Algorithms</strong>
                                    <ul className="mt-2 list-disc list-inside space-y-1">
                                        <li>Data Structures & Algorithms</li>
                                        <li>Database Management</li>
                                        <li>Applied Data Science</li>
                                        <li>Applied Machine Learning</li>
                                    </ul>
                                </div>

                                <div className="md:col-span-2">
                                    <strong style={{ color: T.ink }}>Mobile & Capstone</strong>
                                    <ul className="mt-2 list-disc list-inside space-y-1">
                                        <li>Mobile Application Development I & II</li>
                                        <li>Capstone Project I & II</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t" style={{ borderColor: T.border }}>
                            <MiniTitle>Diploma — Fashion Techniques and Design</MiniTitle>

                            <div className="mt-1 text-sm" style={{ color: T.muted }}>
                                George Brown College | 2016
                            </div>

                            <p
                                className="mt-3 text-sm leading-7 max-w-3xl mx-auto"
                                style={{ color: T.muted }}
                            >
                                Developed a strong creative foundation in design thinking,
                                visual communication, aesthetics, and presentation. This
                                background continues to influence the way I design user
                                interfaces and approach software with both technical and visual
                                intention.
                            </p>
                        </div>
                    </div>
                </Card>

                {/* EXPERIENCE */}
                <Card id="experience">
                    <SectionTitle>Professional Experience</SectionTitle>

                    <div className="max-w-4xl mx-auto space-y-8 text-center">
                        <div>
                            <MiniTitle>Student Ambassador & Junior Software Developer</MiniTitle>
                            <p className="mt-2 text-sm leading-7" style={{ color: T.muted }}>
                                Contributed to academic and institutional software initiatives,
                                supporting the design and development of real-world systems used
                                in student and administrative environments. Worked on projects
                                involving workflow improvement, interface modernization,
                                real-time communication, and software usability.
                            </p>
                        </div>

                        <div className="border-t pt-6" style={{ borderColor: T.border }}>
                            <MiniTitle>
                                Brand Ambassador / Beauty Expert / Creative Experience
                            </MiniTitle>
                            <p className="mt-2 text-sm leading-7" style={{ color: T.muted }}>
                                Prior experience in beauty, retail, and design strengthened my
                                communication, presentation, client-facing, and brand awareness
                                skills. These experiences continue to support how I approach
                                user needs, product presentation, and polished digital design.
                            </p>
                        </div>
                    </div>
                </Card>

                <footer className="text-center text-sm" style={{ color: T.muted }}>
                    © {new Date().getFullYear()} Melisa Paksoy
                </footer>
            </div>
        </div>
    );
}