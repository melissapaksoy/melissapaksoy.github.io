import profileImg from "./assets/profile.jpg";
import resumeFile from "./assets/MelisaPaksoyResume.pdf";

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
  "Fullstack and Software Developer with experience designing and deploying full-stack, cross-platform, and real-time systems within institutional production environments. Skilled in API architecture, desktop application development, UI modernization, and database reconstruction. Strong focus on scalable system design, workflow optimization, and delivering reliable solutions under live operational constraints.";

function Card({ children }) {
  return (
    <div
      className="rounded-3xl border p-10"
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

export default function App() {
  return (
    <div className="min-h-screen px-6 py-16" style={{ background: T.bg, color: T.ink }}>
      <div className="max-w-6xl mx-auto space-y-20">

        {/* HERO CARD */}
        <Card>
          <div className="flex flex-col items-center text-center">

            <div className="w-full max-w-[420px] rounded-3xl overflow-hidden border"
              style={{ borderColor: "rgba(255,79,163,0.30)" }}>
              <img src={profileImg} alt="Melisa Paksoy"
                className="w-full h-[440px] object-cover" />
            </div>

            <h1 className="mt-8 text-4xl md:text-5xl font-semibold"
              style={{ color: T.pink }}>
              Melisa Paksoy
            </h1>

            <div className="mt-3 text-xl md:text-2xl font-semibold">
              Full-Stack Developer & Software Developer
            </div>

            <p className="mt-6 max-w-3xl text-base md:text-lg leading-[1.9]"
              style={{ color: T.muted }}>
              {BIO}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <LinkButton href={LINKS.github}>GitHub</LinkButton>
              <LinkButton href={LINKS.linkedin}>LinkedIn</LinkButton>
              <LinkButton href={LINKS.email}>Email</LinkButton>
              <LinkButton href={resumeFile} download>Resume</LinkButton>
            </div>
          </div>
        </Card>

        {/* PROJECTS CARD */}
        <Card>
          <h2
            className="text-center text-2xl font-semibold mb-10"
            style={{ color: T.pink }}
          >
            Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {/* GlamUp */}
            <div className="p-6 rounded-2xl border hover:bg-white/5 transition"
              style={{ borderColor: T.border }}>
              <h3 className="font-semibold text-lg">GlamUp!</h3>
              <p className="mt-2 text-sm" style={{ color: T.muted }}>
                Cross-platform beauty services application built with React Native,
                Expo, and Firebase featuring real-time bookings and role-based flows.
              </p>
            </div>

            {/* AcademicPDF */}
            <div className="p-6 rounded-2xl border hover:bg-white/5 transition"
              style={{ borderColor: T.border }}>
              <h3 className="font-semibold text-lg">AcademicPDF</h3>
              <p className="mt-2 text-sm" style={{ color: T.muted }}>
                Desktop PDF analyzer and structured report generator built with
                Python and PyQt5 for academic workflow automation.
              </p>
            </div>

            {/* Real-Time Chat App */}
            <div className="p-6 rounded-2xl border hover:bg-white/5 transition"
              style={{ borderColor: T.border }}>
              <h3 className="font-semibold text-lg">Real-Time Chat Application</h3>
              <p className="mt-2 text-sm" style={{ color: T.muted }}>
                Full-stack real-time chat system using Node.js, Express, MongoDB,
                and Socket.IO with authentication, private messaging, and database persistence.
              </p>
            </div>

          </div>
        </Card>
        {/* TECHNICAL SKILLS CARD */}
        <Card>
          <h2 className="text-center text-2xl font-semibold mb-8" style={{ color: T.pink }}>Technical Skills</h2>

          <div className="space-y-5 text-sm md:text-base" style={{ color: T.muted }}>
            <div><strong style={{ color: T.ink }}>Languages:</strong> Python, JavaScript, TypeScript, Java, C#, SQL</div>
            <div><strong style={{ color: T.ink }}>Frontend:</strong> React, React Native, HTML, CSS, Tailwind</div>
            <div><strong style={{ color: T.ink }}>Backend:</strong> Flask, Socket.IO, Node.js, Express, Spring Boot, GraphQL</div>
            <div><strong style={{ color: T.ink }}>Desktop:</strong> PyQt5</div>
            <div><strong style={{ color: T.ink }}>Databases:</strong> PostgreSQL, MongoDB, Firebase</div>
            <div><strong style={{ color: T.ink }}>Tools & DevOps:</strong> Git, Docker, ngrok, Postman, VS Code</div>
            <div><strong style={{ color: T.ink }}>Concepts:</strong> REST APIs, Real-Time Systems, OOP, MVC Architecture, Authentication, Microservices</div>
          </div>
        </Card>

        {/* EDUCATION CARD */}
        <Card>
          <h2
            className="text-center text-2xl font-semibold mb-8"
            style={{ color: T.pink }}
          >
            Education
          </h2>

          <div className="space-y-6">
            <div>
              <div className="font-semibold text-lg">
                Advanced Diploma, Computer Programming & Analysis
              </div>
              <div className="mt-2 text-sm" style={{ color: T.muted }}>
                George Brown Polytechnic | 2026
              </div>
            </div>

            <div>
              <div className="font-semibold text-lg">
                Diploma, Fashion Techniques and Design
              </div>
              <div className="mt-2 text-sm" style={{ color: T.muted }}>
                George Brown College | 2016
              </div>
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