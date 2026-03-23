import { useState } from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const profileImg = `${import.meta.env.BASE_URL}profile.jpg`;


const DOCUMENTS = {
    honoursFall2023: `${import.meta.env.BASE_URL}honours_fall2023.png`,
    honoursFall2024: `${import.meta.env.BASE_URL}honours_fall2024.png`,
    honoursFall2025: `${import.meta.env.BASE_URL}honours_fall2025.png`,
    honoursWinter2024: `${import.meta.env.BASE_URL}honours_winter2024.png`,
    honoursWinter2025: `${import.meta.env.BASE_URL}honours_winter2025.png`,
    fashionDiploma: `${import.meta.env.BASE_URL}MelisaPaksoyFashionDesignDiploma.png`,
    ontarioScholar: `${import.meta.env.BASE_URL}MelisaPaksoyOntarioScholar.png`,
    ontarioDiploma: `${import.meta.env.BASE_URL}MelisaPaksoyOntarioDiploma.png`,
    cipsMembership: `${import.meta.env.BASE_URL}cipsmembershipcard.png`,
    devfest2025: `${import.meta.env.BASE_URL}devfest2025.png`,
};

const PROJECT_IMAGES = {
    academicpdf: `${import.meta.env.BASE_URL}academicpdf.png`,
    slideportal: `${import.meta.env.BASE_URL}slideportal.png`,
    chat: `${import.meta.env.BASE_URL}chatapp.png`,
    gomoku: `${import.meta.env.BASE_URL}gomoku.png`,
    pathways: `${import.meta.env.BASE_URL}pathways.png`,
    glamup: `${import.meta.env.BASE_URL}glamup.png`,
};


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

function DocumentModal({ open, onClose, title, src }) {
    if (!open || !src) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-5xl rounded-3xl border p-4 md:p-6"
                style={{
                    borderColor: T.border,
                    background: "#0b0b10",
                    boxShadow: "0 24px 80px rgba(0,0,0,0.45)",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="mb-4 flex items-center justify-between gap-4">
                    <h3 className="text-lg md:text-xl font-semibold" style={{ color: T.ink }}>
                        {title}
                    </h3>

                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-xl border px-4 py-2 text-sm transition hover:bg-white/5"
                        style={{ borderColor: T.border, color: T.ink }}
                    >
                        Close
                    </button>
                </div>

                <div className="max-h-[80vh] overflow-auto rounded-2xl border bg-white p-2">
                    <img
                        src={src}
                        alt={title}
                        className="w-full h-auto object-contain"
                    />
                </div>

                <div className="mt-4 flex justify-end">
                    <a
                        href={src}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center px-5 py-3 rounded-2xl text-sm font-medium border transition hover:-translate-y-[1px] hover:bg-white/5"
                        style={{ borderColor: T.border, color: T.ink }}
                    >
                        Open Full Size
                    </a>
                </div>
            </div>
        </div>
    );
}

function ProjectCard({ to, image, title, description }) {
    return (
        <Link
            to={to}
            className="group h-full rounded-2xl border overflow-hidden hover:bg-white/5 transition block"
            style={{ borderColor: T.border }}
        >
            <div className="relative w-full h-[190px] overflow-hidden bg-black">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            </div>

            <div className="p-6 flex flex-col min-h-[230px]">
                <h3 className="font-semibold text-lg" style={{ color: T.ink }}>
                    {title}
                </h3>

                <p className="mt-2 text-sm leading-7 flex-1" style={{ color: T.muted }}>
                    {description}
                </p>

                <div className="mt-4 text-sm font-medium" style={{ color: T.pink }}>
                    View Project →
                </div>
            </div>
        </Link>
    );
}

export default function HomePage() {
    const [selectedDoc, setSelectedDoc] = useState(null);

    const honoursDocs = [
        { title: "Fall 2025", src: DOCUMENTS.honoursFall2025 },
        { title: "Winter 2025", src: DOCUMENTS.honoursWinter2025 },
        { title: "Fall 2024", src: DOCUMENTS.honoursFall2024 },
        { title: "Winter 2024", src: DOCUMENTS.honoursWinter2024 },
        { title: "Fall 2023", src: DOCUMENTS.honoursFall2023 },
    ];

    const certificationDocs = [
        {
            title: "CIPS Ontario Membership",
            src: DOCUMENTS.cipsMembership,
            description:
                "Provincial society membership connected to the Canadian Information Processing Society, supporting IT standards, professional development, networking, and best practices in the Canadian tech industry.",
        },
        {
            title: "Google DevFest Toronto 2025",
            src: DOCUMENTS.devfest2025,
            description:
                "Participation in DevFest 2025 Toronto, a major developer conference bringing together students, developers, companies, and industry experts to explore Google Cloud, machine learning, AI, and emerging technologies.",
        },
    ];

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
                                alt="Melissa Paksoy"
                                className="w-full h-[440px] object-cover"
                            />
                        </div>

                        <h1
                            className="mt-8 text-4xl md:text-5xl font-semibold"
                            style={{ color: T.pink }}
                        >
                            Melissa Paksoy
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

                            <Link
                                to="/demo"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-2xl text-sm font-medium border transition hover:-translate-y-[1px] hover:bg-white/5"
                                style={{ borderColor: T.border, color: T.ink }}
                            >
                                Video Demo
                            </Link>
                        </div>
                    </div>
                </Card>

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

                <Card id="about">
                    <SectionTitle>About Me</SectionTitle>
                    <div className="max-w-4xl mx-auto space-y-6 text-base md:text-lg leading-[1.9] text-center">
                        <p style={{ color: T.muted }}>{ABOUT_ME}</p>
                    </div>
                </Card>

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

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
                        <ProjectCard
                            to="/projects/academicpdf"
                            image={PROJECT_IMAGES.academicpdf}
                            title="AcademicPDF"
                            description="Desktop PDF analyzer and structured report generator built with Python and PyQt5 to support academic workflow automation and document processing within institutional environments."
                        />

                        <ProjectCard
                            to="/projects/pathways"
                            image={PROJECT_IMAGES.pathways}
                            title="Pathways Database"
                            description="Academic pathway search system using PostgreSQL and a modern web interface, designed to support structured searching, filtering, and efficient data access for institutional use."
                        />

                        <ProjectCard
                            to="/projects/slideportal"
                            image={PROJECT_IMAGES.slideportal}
                            title="Student Awards SlidePortal"
                            description="Real-time multi-device awards presentation system built with Flask and Socket.IO to enable synchronized displays and streamlined event workflows during institutional ceremonies."
                        />
                    </div>
                </Card>

                <Card id="academic-work">
                    <SectionTitle>Academic Work Samples</SectionTitle>

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
                        <ProjectCard
                            to="/projects/glamup"
                            image={PROJECT_IMAGES.glamup}
                            title="Capstone Project: GlamUp!"
                            description="Cross-platform beauty services application built with React Native, Expo, and Firebase featuring booking systems, role-based access, and modern mobile UI."
                        />

                        <ProjectCard
                            to="/projects/chat"
                            image={PROJECT_IMAGES.chat}
                            title="Real-Time Chat Application"
                            description="Real-time messaging system built with Node.js, Express, MongoDB, and Socket.IO supporting authentication and live communication."
                        />

                        <ProjectCard
                            to="/projects/gomoku"
                            image={PROJECT_IMAGES.gomoku}
                            title="Gomoku AI"
                            description="Strategic board game developed in Java using the Minimax algorithm to simulate intelligent decision-making and gameplay."
                        />
                    </div>
                </Card>

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

                <Card id="education">
                    <SectionTitle>Education, Awards & Certifications</SectionTitle>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">

                        {/* 1️⃣ COMPUTER PROGRAMMING */}
                        <div
                            className="rounded-3xl border p-7 md:p-8 flex flex-col justify-between h-full text-center"
                            style={{
                                borderColor: T.border,
                                background:
                                    "linear-gradient(135deg, rgba(255,79,163,0.07), rgba(255,255,255,0.02))",
                                boxShadow: "0 0 40px rgba(255,79,163,0.05)",
                            }}
                        >
                            <div>
                                <MiniTitle>
                                    Advanced Diploma — Computer Programming & Analysis
                                </MiniTitle>

                                <div className="mt-1 text-sm" style={{ color: T.muted }}>
                                    George Brown Polytechnic | Expected 2026
                                </div>

                                <p
                                    className="mt-4 text-sm leading-7 max-w-md mx-auto"
                                    style={{ color: T.muted }}
                                >
                                    Focused on software development, full-stack applications,
                                    database systems, real-time communication, mobile development,
                                    and scalable system design.
                                </p>

                                <div
                                    className="mt-5 inline-flex rounded-full px-4 py-2 text-xs md:text-sm font-medium"
                                    style={{
                                        background: "rgba(255,79,163,0.10)",
                                        color: T.pink,
                                        border: "1px solid rgba(255,79,163,0.18)",
                                    }}
                                >
                                    Honours Standing — Achieved Every Semester
                                </div>

                                {/* DEANS LIST INSIDE */}
                                <div className="mt-7">
                                    <MiniTitle>Dean’s Honour List</MiniTitle>

                                    <p
                                        className="mt-3 text-sm leading-7 max-w-md mx-auto"
                                        style={{ color: T.muted }}
                                    >
                                        GPA 3.5+ across multiple semesters.
                                    </p>

                                    <div className="mt-5 grid grid-cols-2 gap-3">
                                        {honoursDocs.map((doc) => (
                                            <button
                                                key={doc.title}
                                                onClick={() =>
                                                    setSelectedDoc({
                                                        title: `Dean’s Honour List — ${doc.title}`,
                                                        src: doc.src,
                                                    })
                                                }
                                                className="rounded-xl border px-3 py-3 text-xs md:text-sm font-medium transition hover:-translate-y-[1px] hover:bg-white/5"
                                                style={{
                                                    borderColor: T.border,
                                                    color: T.ink,
                                                    background: "rgba(255,255,255,0.02)",
                                                }}
                                            >
                                                {doc.title}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2️⃣ CERTIFICATIONS */}
                        <div
                            className="rounded-3xl border p-7 md:p-8 flex flex-col justify-between h-full text-center"
                            style={{
                                borderColor: T.border,
                                background:
                                    "linear-gradient(135deg, rgba(255,79,163,0.05), rgba(255,255,255,0.02))",
                                boxShadow: "0 0 35px rgba(255,79,163,0.04)",
                            }}
                        >
                            <div>
                                <MiniTitle>Certifications & Memberships</MiniTitle>

                                <p
                                    className="mt-3 text-sm max-w-md mx-auto leading-7"
                                    style={{ color: T.muted }}
                                >
                                    Professional memberships and industry participation that support
                                    technical growth and networking.
                                </p>
                            </div>

                            <div className="mt-6 grid gap-4">
                                {certificationDocs.map((cert) => (
                                    <div
                                        key={cert.title}
                                        className="rounded-2xl border p-4"
                                        style={{
                                            borderColor: "rgba(255,255,255,0.06)",
                                            background: "rgba(255,255,255,0.015)",
                                        }}
                                    >
                                        <button
                                            onClick={() =>
                                                setSelectedDoc({
                                                    title: cert.title,
                                                    src: cert.src,
                                                })
                                            }
                                            className="w-full rounded-xl border px-4 py-3 text-sm font-medium transition hover:-translate-y-[1px] hover:bg-white/5"
                                            style={{
                                                borderColor: T.border,
                                                color: T.ink,
                                                background: "rgba(255,255,255,0.02)",
                                            }}
                                        >
                                            {cert.title}
                                        </button>

                                        <p
                                            className="mt-3 text-sm leading-7"
                                            style={{ color: T.muted }}
                                        >
                                            {cert.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3️⃣ FASHION */}
                        <div
                            className="rounded-3xl border p-7 md:p-8 flex flex-col justify-between h-full text-center"
                            style={{
                                borderColor: T.border,
                                background:
                                    "linear-gradient(135deg, rgba(255,79,163,0.04), rgba(255,255,255,0.02))",
                                boxShadow: "0 0 25px rgba(255,79,163,0.03)",
                            }}
                        >
                            <div>
                                <MiniTitle>Fashion Techniques & Design</MiniTitle>

                                <div className="mt-1 text-sm" style={{ color: T.muted }}>
                                    George Brown College | 2016
                                </div>

                                <p
                                    className="mt-4 text-sm leading-7 max-w-md mx-auto"
                                    style={{ color: T.muted }}
                                >
                                    Strong foundation in design thinking, aesthetics,
                                    and creative problem solving.
                                </p>
                            </div>

                            <div className="mt-6">
                                <button
                                    onClick={() =>
                                        setSelectedDoc({
                                            title: "Fashion Techniques & Design Diploma",
                                            src: DOCUMENTS.fashionDiploma,
                                        })
                                    }
                                    className="w-full rounded-xl border px-4 py-3 text-sm font-medium transition hover:-translate-y-[1px] hover:bg-white/5"
                                    style={{
                                        borderColor: T.border,
                                        color: T.ink,
                                        background: "rgba(255,255,255,0.02)",
                                    }}
                                >
                                    View Diploma
                                </button>
                            </div>
                        </div>

                        {/* 4️⃣ HIGH SCHOOL */}
                        <div
                            className="rounded-3xl border p-7 md:p-8 flex flex-col justify-between h-full text-center"
                            style={{
                                borderColor: T.border,
                                background:
                                    "linear-gradient(135deg, rgba(255,79,163,0.04), rgba(255,255,255,0.02))",
                                boxShadow: "0 0 25px rgba(255,79,163,0.03)",
                            }}
                        >
                            <div>
                                <MiniTitle>High School Diploma & Ontario Scholar</MiniTitle>

                                <p
                                    className="mt-3 text-sm leading-7 max-w-md mx-auto"
                                    style={{ color: T.muted }}
                                >
                                    Blyth Academy — Ontario Secondary School Diploma, 2014
                                </p>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-3">
                                <button
                                    onClick={() =>
                                        setSelectedDoc({
                                            title: "Ontario Secondary School Diploma",
                                            src: DOCUMENTS.ontarioDiploma,
                                        })
                                    }
                                    className="rounded-xl border px-4 py-3 text-xs md:text-sm font-medium transition hover:-translate-y-[1px] hover:bg-white/5"
                                    style={{
                                        borderColor: T.border,
                                        color: T.ink,
                                        background: "rgba(255,255,255,0.02)",
                                    }}
                                >
                                    Diploma
                                </button>

                                <button
                                    onClick={() =>
                                        setSelectedDoc({
                                            title: "Ontario Scholar Certificate",
                                            src: DOCUMENTS.ontarioScholar,
                                        })
                                    }
                                    className="rounded-xl border px-4 py-3 text-xs md:text-sm font-medium transition hover:-translate-y-[1px] hover:bg-white/5"
                                    style={{
                                        borderColor: T.border,
                                        color: T.ink,
                                        background: "rgba(255,255,255,0.02)",
                                    }}
                                >
                                    Ontario Scholar
                                </button>
                            </div>
                        </div>

                    </div>
                </Card>
                <Card id="experience">
                    <SectionTitle>Professional Experience</SectionTitle>

                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 text-left">

                        {/* LEFT */}
                        <div
                            className="rounded-2xl p-6 border"
                            style={{
                                borderColor: "rgba(255,255,255,0.08)",
                                background:
                                    "linear-gradient(135deg, rgba(255,79,163,0.06), rgba(255,255,255,0.02))",
                            }}
                        >
                            <MiniTitle>Student Ambassador & Junior Software Developer</MiniTitle>
                            <p className="mt-3 text-sm leading-7" style={{ color: T.muted }}>
                                Contributed to academic and institutional software initiatives,
                                supporting the design and development of real-world systems used
                                in student and administrative environments. Worked on projects
                                involving workflow improvement, interface modernization,
                                real-time communication, and software usability.
                            </p>
                        </div>

                        {/* RIGHT */}
                        <div
                            className="rounded-2xl p-6 border"
                            style={{
                                borderColor: "rgba(255,255,255,0.08)",
                                background:
                                    "linear-gradient(135deg, rgba(255,79,163,0.06), rgba(255,255,255,0.02))",
                            }}
                        >
                            <MiniTitle>
                                Brand Ambassador / Beauty Expert / Creative Experience
                            </MiniTitle>
                            <p className="mt-3 text-sm leading-7" style={{ color: T.muted }}>
                                Prior experience in beauty, retail, and design strengthened my
                                communication, presentation, client-facing, and brand awareness
                                skills. These experiences continue to support how I approach
                                user needs, product presentation, and polished digital design.
                            </p>
                        </div>

                    </div>
                </Card>

                <footer className="text-center text-sm" style={{ color: T.muted }}>
                    © {new Date().getFullYear()} Melissa Paksoy
                </footer>

                <DocumentModal
                    open={!!selectedDoc}
                    onClose={() => setSelectedDoc(null)}
                    title={selectedDoc?.title}
                    src={selectedDoc?.src}
                />
            </div>
        </div>
    );
}