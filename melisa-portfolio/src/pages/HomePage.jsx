import { Link } from "react-router-dom";

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
};

const BIO =
    "Full-Stack and Software Developer with experience designing and deploying full-stack, cross-platform, and real-time systems within institutional and academic environments. Skilled in API architecture, desktop application development, UI modernization, and database reconstruction, with a strong focus on scalable design, workflow optimization, and reliable solutions.";

const ABOUT_ME =
    "My background in both design and software development shapes how I approach building applications. I care about creating experiences that are not only functional and scalable, but also visually refined and intuitive to use.";

const CAREER_GOAL =
    "I am especially interested in full-stack development, real-time systems, application design, and backend architecture. I want to contribute to projects that solve real problems while delivering strong user experiences.";

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

export default function HomePage() {
    return (
        <div
            className="min-h-screen px-6 py-16"
            style={{ background: T.bg, color: T.ink }}
        >
            <div className="max-w-6xl mx-auto space-y-10">


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
                            Full-Stack Developer & Software Developer
                        </div>

                        <p
                            className="mt-6 max-w-3xl text-base md:text-lg leading-[1.9]"
                            style={{ color: T.muted }}
                        >
                            {BIO}
                        </p>

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

                        </div>
                    </div>
                </Card>



                {/* SEPARATE NAV CARD */}
                <Card>
                    <div className="flex flex-wrap justify-center gap-3">
                        <NavButton href="#about">About Me</NavButton>
                        <NavButton href="#projects">Projects</NavButton>
                        <NavButton href="#skills">Technical Skills</NavButton>
                        <NavButton href="#education">Education</NavButton>
                        <NavButton href="#contact">Contact</NavButton>
                    </div>
                </Card>

                {/* ABOUT */}
                <Card id="about">
                    <SectionTitle>About Me</SectionTitle>
                    <div className="max-w-4xl mx-auto space-y-6 text-base md:text-lg leading-[1.9]">
                        <p style={{ color: T.muted }}>{ABOUT_ME}</p>
                        <p style={{ color: T.muted }}>{CAREER_GOAL}</p>
                    </div>
                </Card>

                {/* PROJECTS */}
                <Card id="projects">
                    <SectionTitle>Projects</SectionTitle>

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                        <Link
                            to="/projects/glamup"
                            className="p-6 rounded-2xl border hover:bg-white/5 transition block"
                            style={{ borderColor: T.border }}
                        >
                            <h3 className="font-semibold text-lg">GlamUp!</h3>
                            <p className="mt-2 text-sm leading-7" style={{ color: T.muted }}>
                                Cross-platform beauty services application built with React
                                Native, Expo, and Firebase featuring booking flows, role-based
                                access, and modern mobile UI.
                            </p>
                            <div className="mt-4 text-sm font-medium" style={{ color: T.pink }}>
                                View Project →
                            </div>
                        </Link>

                        <Link
                            to="/projects/academicpdf"
                            className="p-6 rounded-2xl border hover:bg-white/5 transition block"
                            style={{ borderColor: T.border }}
                        >
                            <h3 className="font-semibold text-lg">AcademicPDF</h3>
                            <p className="mt-2 text-sm leading-7" style={{ color: T.muted }}>
                                Desktop PDF analyzer and structured report generator built with
                                Python and PyQt5 to support academic workflow automation and
                                document processing.
                            </p>
                            <div className="mt-4 text-sm font-medium" style={{ color: T.pink }}>
                                View Project →
                            </div>
                        </Link>

                        <Link
                            to="/projects/chat"
                            className="p-6 rounded-2xl border hover:bg-white/5 transition block"
                            style={{ borderColor: T.border }}
                        >
                            <h3 className="font-semibold text-lg">Real-Time Chat Application</h3>
                            <p className="mt-2 text-sm leading-7" style={{ color: T.muted }}>
                                Real-time messaging platform using Node.js, Express, MongoDB,
                                and Socket.IO with authentication, live communication, and data
                                persistence.
                            </p>
                            <div className="mt-4 text-sm font-medium" style={{ color: T.pink }}>
                                View Project →
                            </div>
                        </Link>

                        <Link
                            to="/projects/gomoku"
                            className="p-6 rounded-2xl border hover:bg-white/5 transition block"
                            style={{ borderColor: T.border }}
                        >
                            <h3 className="font-semibold text-lg">Gomoku AI</h3>
                            <p className="mt-2 text-sm leading-7" style={{ color: T.muted }}>
                                Strategic board game implemented in Java using the Minimax
                                algorithm and decision-making logic for intelligent computer play.
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
                                interface to support structured searching, filtering, and data
                                access.
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
                                Flask and Socket.IO for synchronized ceremony display and event
                                workflow support.
                            </p>
                            <div className="mt-4 text-sm font-medium" style={{ color: T.pink }}>
                                View Project →
                            </div>
                        </Link>
                    </div>
                </Card>

                {/* TECHNICAL SKILLS */}
                <Card id="skills">
                    <SectionTitle>Technical Skills</SectionTitle>

                    <div
                        className="space-y-5 text-sm md:text-base max-w-4xl mx-auto"
                        style={{ color: T.muted }}
                    >
                        <div><strong style={{ color: T.ink }}>Languages:</strong> Python, JavaScript, TypeScript, Java, C#, SQL, PHP</div>
                        <div><strong style={{ color: T.ink }}>Frontend:</strong> React, React Native, HTML, CSS, Tailwind</div>
                        <div><strong style={{ color: T.ink }}>Backend:</strong> Flask, Node.js, Express, Spring Boot, GraphQL, Socket.IO</div>
                        <div><strong style={{ color: T.ink }}>Desktop:</strong> PyQt5</div>
                        <div><strong style={{ color: T.ink }}>Databases:</strong> PostgreSQL, MongoDB, Firebase</div>
                        <div><strong style={{ color: T.ink }}>Tools & DevOps:</strong> Git, Docker, Postman, VS Code, ngrok</div>
                        <div><strong style={{ color: T.ink }}>Concepts:</strong> REST APIs, Real-Time Systems, OOP, MVC Architecture, Authentication, Database Design, Microservices</div>
                    </div>
                </Card>

                {/* EDUCATION */}
                <Card id="education">
                    <SectionTitle>Education</SectionTitle>

                    <div className="space-y-10">
                        <div>
                            <h3 className="text-xl font-semibold">
                                Advanced Diploma — Computer Programming & Analysis
                            </h3>

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
                                    <strong style={{ color: T.ink }}>Programming & Software Development</strong>
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
                                    <strong style={{ color: T.ink }}>Systems & Infrastructure</strong>
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

                                <div>
                                    <strong style={{ color: T.ink }}>Mobile & Capstone</strong>
                                    <ul className="mt-2 list-disc list-inside space-y-1">
                                        <li>Mobile Application Development I & II</li>
                                        <li>Capstone Project I & II</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t" style={{ borderColor: T.border }}>
                            <h3 className="text-xl font-semibold">
                                Diploma — Fashion Techniques and Design
                            </h3>

                            <div className="mt-1 text-sm" style={{ color: T.muted }}>
                                George Brown College | 2016
                            </div>

                            <p
                                className="mt-3 text-sm leading-7 max-w-3xl"
                                style={{ color: T.muted }}
                            >
                                Developed a strong creative foundation in design thinking,
                                aesthetics, presentation, and visual communication. This
                                background now influences my approach to building polished user
                                interfaces and thoughtful user experiences in software
                                development.
                            </p>
                        </div>
                    </div>
                </Card>

                {/* CONTACT */}
                <Card id="contact">
                    <SectionTitle>Contact</SectionTitle>

                    <div className="flex flex-wrap justify-center gap-3">
                        <LinkButton href={LINKS.github}>GitHub</LinkButton>
                        <LinkButton href={LINKS.linkedin}>LinkedIn</LinkButton>
                        <LinkButton href={LINKS.email}>Email</LinkButton>
                    </div>
                </Card>

                <footer className="text-center text-sm" style={{ color: T.muted }}>
                    © {new Date().getFullYear()} Melisa Paksoy
                </footer>
            </div>
        </div >
    );
}