import { Link } from "react-router-dom";

const coverLetterFile = `${import.meta.env.BASE_URL}MelisaPaksoyCoverLetter.pdf`;

const T = {
    bg: "#FAF7F2",
    ink: "#1A1613",
    muted: "rgba(26,22,19,0.72)",
    border: "rgba(20,15,10,0.10)",
    pink: "#9C7A2E",
};

function Card({ children }) {
    return (
        <div
            className="rounded-3xl border p-10 md:p-12"
            style={{
                borderColor: "rgba(20,15,10,0.08)",
                background:
                    "linear-gradient(135deg, rgba(184,134,11,0.08), rgba(20,15,10,0.03))",
                boxShadow:
                    "0 0 0 1px rgba(184,134,11,0.05) inset, 0 24px 80px rgba(20,15,10,0.06)",
            }}
        >
            {children}
        </div>
    );
}

function ActionButton({ href, children, download }) {
    return (
        <a
            href={href}
            download={download}
            target={!download ? "_blank" : undefined}
            rel={!download ? "noreferrer" : undefined}
            className="inline-flex items-center justify-center px-5 py-3 rounded-2xl text-sm font-medium border transition hover:-translate-y-[1px] hover:bg-black/5"
            style={{ borderColor: T.border, color: T.ink }}
        >
            {children}
        </a>
    );
}

export default function CoverLetterPage() {
    return (
        <div
            className="min-h-screen px-6 py-16"
            style={{ background: T.bg, color: T.ink }}
        >
            <div className="max-w-5xl mx-auto space-y-8">
                <div className="flex flex-wrap justify-center gap-3">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center px-5 py-3 rounded-2xl text-sm font-medium border transition hover:-translate-y-[1px] hover:bg-black/5"
                        style={{ borderColor: T.border, color: T.ink }}
                    >
                        Back to Home
                    </Link>

                    <ActionButton href={coverLetterFile} download>
                        Download Cover Letter PDF
                    </ActionButton>
                </div>

                <Card>
                    <div className="space-y-6 text-base leading-8">
                        <div>
                            <h1
                                className="text-2xl font-semibold"
                                style={{ color: T.pink }}
                            >
                                Melisa Paksoy
                            </h1>

                            <p style={{ color: T.muted }}>
                                Toronto, ON
                                <br />
                                melisapaksoy@hotmail.com
                                <br />
                                linkedin.com/in/melisapaksoy
                            </p>
                        </div>

                        <p>Hello Hiring Team,</p>

                        <p style={{ color: T.muted }}>
                            I am excited to apply for an entry-level Software
                            Developer position. I am currently completing the
                            Computer Programming and Analysis program at George
                            Brown Polytechnic in Toronto, where I have developed
                            a strong foundation in full-stack development,
                            object-oriented programming, databases, and modern
                            web technologies.
                        </p>

                        <p style={{ color: T.muted }}>
                            Through academic projects and hands-on development
                            work, I have built web, mobile, and desktop
                            applications from end to end. My experience includes
                            designing database schemas, developing RESTful APIs,
                            and building responsive user interfaces using
                            technologies such as JavaScript, React, Node.js,
                            Java, C#, SQL, and Python.
                        </p>

                        <p style={{ color: T.muted }}>
                            In addition to my coursework, I contribute to
                            software development initiatives at George Brown
                            College as a Student Ambassador and Junior Software
                            Developer. In this role, I help develop internal
                            applications that support institutional operations
                            and academic events, gaining experience working in
                            collaborative development environments.
                        </p>

                        <p style={{ color: T.muted }}>
                            I am motivated, detail-oriented, and eager to
                            continue growing as a developer while contributing
                            meaningful work to a professional team. I am
                            particularly interested in environments that
                            encourage innovation, collaboration, and continuous
                            learning.
                        </p>

                        <p style={{ color: T.muted }}>
                            Thank you for your time and consideration.
                        </p>

                        <p>
                            Sincerely,
                            <br />
                            <span style={{ color: T.pink }}>
                                Melisa Paksoy
                            </span>
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    );
}