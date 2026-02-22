import { motion } from "framer-motion";

const T = {
  ink: "#0B0B10",
  card: "#12121C",
  text: "#F7F7FB",
  muted: "#A1A1AA",
  pink: "#FF4FA3",
  border: "rgba(255,255,255,0.10)",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const socials = [
  { label: "GitHub", href: "https://github.com/yourusername" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yourprofile" },
  { label: "Résumé", href: "#contact" }, // swap to a real PDF link later
];

const education = [
  {
    title: "Advanced Diploma in Computer Programming & Analysis",
    org: "George Brown College",
    desc: "Full-stack development, software engineering, and modern dev practices.",
  },
  {
    title: "Diploma in Fashion Techniques & Design",
    org: "George Brown College",
    desc: "Design systems mindset — detail, taste, and presentation.",
  },
];

const skillGroups = [
  { title: "Full-Stack", items: ["React", "Node/Express", "REST APIs", "HTML/CSS"] },
  { title: "Mobile", items: ["React Native", "Expo", "Firebase Auth", "Firestore"] },
  { title: "DevOps", items: ["Docker", "Git/GitHub", "CI/CD basics", "Postman"] },
  { title: "Data", items: ["SQL", "MongoDB", "Redis (basic)", "Firebase"] },
];

const projects = [
  {
    title: "GlamUp!",
    status: "Ongoing Project",
    desc: "Beauty booking platform with role-based flows and a clean glam UI.",
    tags: ["React Native", "Firebase", "UI/UX"],
    github: "#",
    live: "#",
  },
  {
    title: "Student Wellness Hub",
    status: "Microservices",
    desc: "Wellness resources, events, and goal tracking with scalable architecture.",
    tags: ["Spring Boot", "Docker", "API Gateway"],
    github: "#",
    live: "#",
  },
  {
    title: "AcademicReportExtractor",
    status: "Automation",
    desc: "Transcript-to-summary PDF generator for clean automated reporting.",
    tags: ["Python", "PDF", "Parsing"],
    github: "#",
    live: "#",
  },
];

function SectionLabel({ children }) {
  return (
    <div className="text-[11px] tracking-[0.28em] uppercase" style={{ color: T.muted }}>
      {children}
    </div>
  );
}

function Divider() {
  return <div className="h-px w-full my-14" style={{ background: T.border }} />;
}

function Pill({ children }) {
  return (
    <span
      className="px-3 py-1 text-[11px] rounded-full border"
      style={{ borderColor: T.border, color: T.text }}
    >
      {children}
    </span>
  );
}

function Button({ children, variant = "primary", href }) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition duration-300";

  if (variant === "primary") {
    return (
      <a
        href={href}
        className={`${base} hover:-translate-y-[1px]`}
        style={{ background: T.pink, color: T.ink }}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className={`${base} border hover:-translate-y-[1px]`}
      style={{ borderColor: T.border, color: T.text }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,79,163,0.6)")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = T.border)}
    >
      {children}
    </a>
  );
}

function Nav() {
  const items = [
    { label: "Education", id: "education" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <div
      className="sticky top-0 z-50 backdrop-blur"
      style={{
        background: "rgba(11,11,16,0.65)",
        borderBottom: `1px solid ${T.border}`,
      }}
    >
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#top"
          className="text-sm tracking-[0.3em] uppercase"
          style={{ color: T.text, fontFamily: "Inter, system-ui, sans-serif" }}
        >
          MP
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm" style={{ color: T.muted }}>
          {items.map((it) => (
            <a key={it.id} href={`#${it.id}`} className="hover:opacity-90">
              {it.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ children }) {
  return (
    <div className="rounded-3xl border" style={{ background: T.card, borderColor: T.border }}>
      {children}
    </div>
  );
}

function ProjectCard({ p }) {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs" style={{ color: T.muted }}>
              {p.status}
            </div>
            <h3 className="mt-2 text-xl" style={{ color: T.text, fontFamily: "Playfair Display, serif" }}>
              {p.title}
            </h3>
          </div>
          <span
            className="h-2 w-2 rounded-full mt-2 opacity-70"
            style={{ background: T.pink }}
          />
        </div>

        {/* Screenshot placeholder (swap later for real images) */}
        <div
          className="mt-5 h-44 rounded-2xl border flex items-center justify-center text-xs"
          style={{
            borderColor: T.border,
            color: T.muted,
            background:
              "radial-gradient(70% 70% at 50% 20%, rgba(255,79,163,0.12), rgba(255,255,255,0.03))",
          }}
        >
          Add screenshot
        </div>

        <p className="mt-5 text-sm leading-relaxed" style={{ color: T.muted }}>
          {p.desc}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>

        <div className="mt-5 flex gap-4 text-sm">
          <a
            href={p.github}
            className="underline underline-offset-4 opacity-90 hover:opacity-100"
            style={{ color: T.text }}
          >
            GitHub
          </a>
          <a
            href={p.live}
            className="underline underline-offset-4 opacity-90 hover:opacity-100"
            style={{ color: T.text }}
          >
            Live
          </a>
        </div>
      </div>
    </Card>
  );
}

export default function App() {
  return (
    <div id="top" className="min-h-screen" style={{ background: T.ink }}>
      <Nav />

      <main className="max-w-4xl mx-auto px-6">
        {/* HERO (Gozde-style: name/role/tagline + socials) */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="pt-24 pb-14"
        >
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div>
              <SectionLabel>ISSUE NO. 01 — 2026</SectionLabel>
              <h1
                className="mt-5 text-5xl md:text-6xl leading-[1.02]"
                style={{ color: T.text, fontFamily: "Playfair Display, serif" }}
              >
                Melisa <span style={{ color: T.pink }}>Paksoy</span>
              </h1>

              <div className="mt-4 text-sm" style={{ color: T.muted }}>
                Software Developer • Fashion-trained • Toronto
              </div>

              <p className="mt-7 text-base leading-relaxed max-w-xl" style={{ color: T.text }}>
                Building minimal, user-first products — clean engineering with an editorial eye for detail.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button variant="primary" href="#projects">View Projects</Button>
                <Button variant="outline" href="#contact">Contact</Button>
              </div>

              <div className="mt-6 flex flex-wrap gap-4 text-sm" style={{ color: T.muted }}>
                {socials.map((s) => (
                  <a key={s.label} className="hover:opacity-90 underline underline-offset-4" href={s.href}>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Optional portrait placeholder */}
            <div
              className="shrink-0 w-28 h-28 md:w-32 md:h-32 rounded-full border"
              style={{
                borderColor: T.border,
                background:
                  "radial-gradient(80% 80% at 30% 20%, rgba(255,79,163,0.18), rgba(255,255,255,0.03))",
              }}
              title="Drop your headshot later"
            />
          </motion.div>
        </motion.section>

        <Divider />

        {/* EDUCATION */}
        <section id="education" className="py-2">
          <SectionLabel>EDUCATION</SectionLabel>
          <h2 className="mt-4 text-3xl md:text-4xl" style={{ color: T.text, fontFamily: "Playfair Display, serif" }}>
            Education
          </h2>

          <div className="mt-8 grid gap-6">
            {education.map((e) => (
              <Card key={e.title}>
                <div className="p-6">
                  <div className="text-sm" style={{ color: T.muted }}>{e.org}</div>
                  <div className="mt-2 text-lg" style={{ color: T.text }}>{e.title}</div>
                  <div className="mt-2 text-sm leading-relaxed" style={{ color: T.muted }}>{e.desc}</div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Divider />

        {/* SKILLS */}
        <section id="skills" className="py-2">
          <SectionLabel>SKILLS</SectionLabel>
          <h2 className="mt-4 text-3xl md:text-4xl" style={{ color: T.text, fontFamily: "Playfair Display, serif" }}>
            Skills
          </h2>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {skillGroups.map((g) => (
              <Card key={g.title}>
                <div className="p-6">
                  <div className="text-sm" style={{ color: T.muted }}>{g.title}</div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((it) => (
                      <Pill key={it}>{it}</Pill>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Divider />

        {/* PROJECTS */}
        <section id="projects" className="py-2">
          <SectionLabel>PROJECTS</SectionLabel>
          <h2 className="mt-4 text-3xl md:text-4xl" style={{ color: T.text, fontFamily: "Playfair Display, serif" }}>
            Selected <span style={{ color: T.pink }}>Projects</span>
          </h2>

          <div className="mt-8 grid gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </section>

        <Divider />

        {/* CONTACT (Gozde-style: email + form) */}
        <section id="contact" className="py-2 pb-20">
          <SectionLabel>LET’S CONNECT</SectionLabel>
          <h2 className="mt-4 text-3xl md:text-4xl" style={{ color: T.text, fontFamily: "Playfair Display, serif" }}>
            Contact
          </h2>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Card>
              <div className="p-6">
                <div className="text-sm" style={{ color: T.muted }}>Email</div>
                <div className="mt-2 text-lg" style={{ color: T.text }}>your@email.com</div>
                <div className="mt-4 flex gap-4 text-sm">
                  <a className="underline underline-offset-4" style={{ color: T.text }} href={socials[0].href}>GitHub</a>
                  <a className="underline underline-offset-4" style={{ color: T.text }} href={socials[1].href}>LinkedIn</a>
                </div>
                <div className="mt-6">
                  <Button variant="primary" href="mailto:your@email.com">Email Me</Button>
                </div>
              </div>
            </Card>

            <Card>
              <form className="p-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-sm" style={{ color: T.muted }}>Name</label>
                  <input
                    className="mt-2 w-full rounded-2xl px-4 py-3 border bg-transparent outline-none"
                    style={{ borderColor: T.border, color: T.text }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm" style={{ color: T.muted }}>Email</label>
                  <input
                    className="mt-2 w-full rounded-2xl px-4 py-3 border bg-transparent outline-none"
                    style={{ borderColor: T.border, color: T.text }}
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm" style={{ color: T.muted }}>Message</label>
                  <textarea
                    className="mt-2 w-full rounded-2xl px-4 py-3 border bg-transparent outline-none min-h-[120px]"
                    style={{ borderColor: T.border, color: T.text }}
                    placeholder="Write a message..."
                  />
                </div>
                <Button variant="outline" href="#contact">Send Message</Button>
                <div className="text-xs" style={{ color: T.muted }}>
                  (Form is UI-only for now. We can connect it later with Formspree.)
                </div>
              </form>
            </Card>
          </div>

          <div className="mt-10 text-xs" style={{ color: T.muted }}>
            © {new Date().getFullYear()} Melisa Paksoy. All rights reserved.
          </div>
        </section>
      </main>
    </div>
  );
}
