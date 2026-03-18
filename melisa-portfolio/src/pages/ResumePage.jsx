import { Link } from "react-router-dom";

const resumeFile = `${import.meta.env.BASE_URL}MelisaPaksoyResume.pdf`;

const T = {
    bg: "#050508",
    ink: "#F6F7FB",
    muted: "rgba(246,247,251,0.72)",
    border: "rgba(255,255,255,0.10)",
    pink: "#FF4FA3",
};

function Card({ children }) {
    return (
        <div
            className="rounded-3xl border p-8 md:p-10"
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

function SectionTitle({ children }) {
    return (
        <h2
            className="text-xl md:text-2xl font-semibold mb-5"
            style={{ color: T.pink }}
        >
            {children}
        </h2>
    );
}

function ActionButton({ href, children, download }) {
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

export default function ResumePage() {
    return (
        <div
            className="min-h-screen px-6 py-16"
            style={{ background: T.bg, color: T.ink }}
        >
            <div className="max-w-5xl mx-auto space-y-8">
                {/* Top Buttons */}
                <div className="flex flex-wrap justify-center gap-3">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center px-5 py-3 rounded-2xl text-sm font-medium border transition hover:-translate-y-[1px] hover:bg-white/5"
                        style={{ borderColor: T.border, color: T.ink }}
                    >
                        Back to Home
                    </Link>

                    <ActionButton href={resumeFile} download>
                        Download Resume PDF
                    </ActionButton>
                </div>

                {/* Resume Card */}
                <Card>
                    {/* Header */}
                    <div className="text-center border-b pb-6" style={{ borderColor: T.border }}>
                        <h1
                            className="text-3xl md:text-4xl font-semibold tracking-[0.08em]"
                            style={{ color: T.pink }}
                        >
                            MELISA PAKSOY
                        </h1>

                        <p
                            className="mt-3 text-sm md:text-base leading-7"
                            style={{ color: T.muted }}
                        >
                            Toronto, ON | melisapaksoy@hotmail.com | melisapaksoy.com | GitHub | LinkedIn
                        </p>
                    </div>

                    {/* Professional Summary */}
                    <section className="mt-8">
                        <SectionTitle>Professional Summary</SectionTitle>
                        <p
                            className="text-sm md:text-base leading-8"
                            style={{ color: T.muted }}
                        >
                            Full-Stack and Software Developer with experience designing and deploying
                            full-stack, cross-platform, and real-time systems within institutional
                            production environments. Skilled in API architecture, desktop application
                            development, UI modernization, and database reconstruction. Strong focus on
                            scalable system design, workflow optimization, and delivering reliable
                            solutions under live operational constraints.
                        </p>
                    </section>

                    {/* Technical Skills */}
                    <section className="mt-10">
                        <SectionTitle>Technical Skills</SectionTitle>

                        <div
                            className="space-y-3 text-sm md:text-base leading-8"
                            style={{ color: T.muted }}
                        >
                            <div>
                                <strong style={{ color: T.ink }}>Languages:</strong> Python,
                                JavaScript, TypeScript, Java, C#, SQL
                            </div>

                            <div>
                                <strong style={{ color: T.ink }}>Frontend:</strong> React, React
                                Native, HTML, CSS, Tailwind
                            </div>

                            <div>
                                <strong style={{ color: T.ink }}>Backend:</strong> Flask, Socket.IO,
                                Node.js, Express, Spring Boot, GraphQL
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
                                Docker, ngrok, Postman, VS Code
                            </div>

                            <div>
                                <strong style={{ color: T.ink }}>Concepts:</strong> REST APIs,
                                Real-Time Systems, OOP, MVC Architecture, Authentication,
                                Microservices
                            </div>
                        </div>
                    </section>

                    {/* Professional Experience */}
                    <section className="mt-10">
                        <SectionTitle>Professional Experience</SectionTitle>

                        <div className="space-y-4">
                            <div>
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                                    <h3 className="text-base md:text-lg font-semibold">
                                        Student Ambassador & Junior Software Developer, George Brown College
                                    </h3>
                                    <div
                                        className="text-sm md:text-base font-medium"
                                        style={{ color: T.pink }}
                                    >
                                        Oct 2025 – Present
                                    </div>
                                </div>

                                <ul
                                    className="mt-4 list-disc list-inside space-y-3 text-sm md:text-base leading-8"
                                    style={{ color: T.muted }}
                                >
                                    <li>
                                        Leading development and deployment of 5 internal software
                                        systems supporting institutional operations and live academic
                                        events.
                                    </li>

                                    <li>
                                        Engineered AcademicPDF, a Python (PyQt5) desktop application
                                        that processes students’ degree work transcripts, extracts
                                        desired content, and regenerates formatted summary reports
                                        through automated analysis workflows.
                                    </li>

                                    <li>
                                        Modernized the Student Awards Slide Display System by
                                        redesigning the UI for non-technical staff, migrating
                                        deployment from server-hosted architecture to secure localhost
                                        execution, and engineering a real-time multi-device
                                        scholarship display system (Flask, Socket.IO).
                                    </li>

                                    <li>
                                        Contributing to the reconstruction and optimization of George
                                        Brown Polytechnic pathway database systems.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Projects */}
                    <section className="mt-10">
                        <SectionTitle>Projects</SectionTitle>

                        <div>
                            <h3 className="text-base md:text-lg font-semibold">
                                GlamUp! – Cross-Platform Beauty Services Application, React Native | Firebase
                            </h3>

                            <ul
                                className="mt-4 list-disc list-inside space-y-3 text-sm md:text-base leading-8"
                                style={{ color: T.muted }}
                            >
                                <li>
                                    Designed and developed a cross-platform mobile and web
                                    application connecting clients with freelance beauty
                                    professionals (nail artists, lash technicians, makeup artists).
                                </li>

                                <li>
                                    Identified and addressed a market gap by providing an affordable,
                                    flexible alternative to traditional salon-based services.
                                </li>

                                <li>
                                    Implemented authentication, role-based user flows, and real-time
                                    booking logic using Firebase.
                                </li>

                                <li>
                                    Built scalable UI components and structured backend logic to
                                    support long-term platform growth and increased professional
                                    visibility.
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Additional Experience */}
                    <section className="mt-10">
                        <SectionTitle>Additional Experience</SectionTitle>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-base md:text-lg font-semibold">
                                    Beauty Expert, Shoppers Drug Mart | Toronto, ON
                                </h3>
                                <p
                                    className="mt-2 text-sm md:text-base leading-8"
                                    style={{ color: T.muted }}
                                >
                                    Delivered high-volume client service, trained new team members,
                                    and supported inventory and merchandising operations.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base md:text-lg font-semibold">
                                    Designer Assistant & Operations Support, Fatal Envy Apparel | Toronto, ON
                                </h3>
                                <p
                                    className="mt-2 text-sm md:text-base leading-8"
                                    style={{ color: T.muted }}
                                >
                                    Supported e-commerce operations, content creation, scheduling,
                                    and brand logistics coordination.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Education */}
                    <section className="mt-10">
                        <SectionTitle>Education</SectionTitle>

                        <div
                            className="space-y-5 text-sm md:text-base leading-8"
                            style={{ color: T.muted }}
                        >
                            <div>
                                <h3 className="font-semibold" style={{ color: T.ink }}>
                                    Advanced Diploma, Computer Programming & Analysis
                                </h3>
                                <p>George Brown Polytechnic (Expected 2026)</p>
                            </div>

                            <div>
                                <h3 className="font-semibold" style={{ color: T.ink }}>
                                    Diploma, Fashion Techniques & Design
                                </h3>
                                <p>George Brown College (April 2016)</p>
                            </div>
                        </div>
                    </section>
                </Card>
            </div>
        </div>
    );
}