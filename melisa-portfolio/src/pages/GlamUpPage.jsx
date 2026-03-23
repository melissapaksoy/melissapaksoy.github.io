import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Smartphone,
  Sparkles,
  FileText,
  PlayCircle,
  ShieldCheck,
  CalendarDays,
  Search,
  Users,
  CheckCircle2,
} from "lucide-react";
import HeroTitle from "../components/HeroTitle";

const glamupHero = `${import.meta.env.BASE_URL}projects/glamup/glamup.png`;
const demoVideo = `${import.meta.env.BASE_URL}projects/glamup/GlamUpDemostration.mp4`; // check exact spelling


const T = {
  bg: "#050508",
  ink: "#F6F7FB",
  muted: "rgba(246,247,251,0.72)",
  soft: "rgba(246,247,251,0.50)",
  border: "rgba(255,255,255,0.10)",
  pink: "#FF4FA3",
  pinkSoft: "rgba(255,79,163,0.14)",
  panel:
    "linear-gradient(135deg, rgba(255,79,163,0.10), rgba(255,255,255,0.03))",
  panelStrong:
    "linear-gradient(135deg, rgba(255,79,163,0.16), rgba(255,255,255,0.04))",
};

function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl border ${className}`}
      style={{
        borderColor: T.border,
        background: T.panel,
        boxShadow:
          "0 0 0 1px rgba(255,79,163,0.05) inset, 0 24px 80px rgba(0,0,0,0.35)",
      }}
    >
      {children}
    </div>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="space-y-3">
      {eyebrow ? (
        <p
          className="text-xs uppercase tracking-[0.28em]"
          style={{ color: T.pink }}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
      {text ? (
        <p className="max-w-3xl leading-8" style={{ color: T.muted }}>
          {text}
        </p>
      ) : null}
    </div>
  );
}

function Pill({ icon, children }) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
      style={{
        borderColor: "rgba(255,255,255,0.10)",
        background: "rgba(255,255,255,0.03)",
        color: T.ink,
      }}
    >
      {icon}
      <span>{children}</span>
    </div>
  );
}

function StatCard({ icon, label, value }) {
  return (
    <div
      className="rounded-2xl border p-5"
      style={{
        borderColor: "rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.03)",
      }}
    >
      <div className="mb-4 inline-flex rounded-2xl p-3" style={{ background: T.pinkSoft }}>
        {icon}
      </div>
      <p className="text-sm" style={{ color: T.soft }}>
        {label}
      </p>
      <p className="mt-2 text-lg font-semibold">{value}</p>
    </div>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <div
      className="rounded-3xl border p-6"
      style={{
        borderColor: "rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.03)",
      }}
    >
      <div
        className="mb-4 inline-flex rounded-2xl p-3"
        style={{ background: "rgba(255,79,163,0.12)", color: T.pink }}
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-3 leading-7" style={{ color: T.muted }}>
        {text}
      </p>
    </div>
  );
}

function DocumentPreviewCard({ title, summary, href, type = "PDF" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-2xl border p-4 transition duration-300 hover:-translate-y-1"
      style={{
        borderColor: "rgba(255,255,255,0.08)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,79,163,0.06))",
        boxShadow: "0 14px 34px rgba(0,0,0,0.20)",
      }}
    >
      <div
        className="mb-4 flex h-28 items-center justify-center rounded-2xl border"
        style={{
          borderColor: "rgba(255,255,255,0.08)",
          background:
            "linear-gradient(180deg, rgba(255,79,163,0.16), rgba(255,255,255,0.03))",
        }}
      >
        <div className="text-center">
          <div
            className="mx-auto mb-2 inline-flex rounded-xl p-3"
            style={{ background: "rgba(255,79,163,0.12)", color: T.pink }}
          >
            <FileText size={22} />
          </div>
          <p className="text-xs uppercase tracking-[0.24em]" style={{ color: T.soft }}>
            {type} Preview
          </p>
        </div>
      </div>

      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold leading-6">{title}</h3>
        <ArrowUpRight
          size={16}
          className="mt-1 shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          style={{ color: T.pink }}
        />
      </div>

      <p className="mt-3 text-sm leading-6" style={{ color: T.muted }}>
        {summary}
      </p>
    </a>
  );
}

export default function GlamUpPage() {

  const DOCS = [
    {
      title: "Project Summary",
      href: `${import.meta.env.BASE_URL}docs/GlamUp!_ProjectSummary.pdf`,
      summary:
        "A short overview of GlamUp!, the project idea, purpose, and what the app aims to solve.",
    },
    {
      title: "Project Vision",
      href: `${import.meta.env.BASE_URL}docs/GlamUp!_ProjectVision.pdf`,
      summary:
        "Defines the product vision, user value, target audience, and platform direction.",
    },
    {
      title: "High Level Requirements",
      href: `${import.meta.env.BASE_URL}docs/GlamUp!_HighLevelRequirements.pdf`,
      summary:
        "Lists the main business and system requirements that shaped the app scope.",
    },
    {
      title: "Project Plan",
      href: `${import.meta.env.BASE_URL}docs/GlamUp!_ProjectPlan.pdf`,
      summary:
        "Shows the timeline, milestones, planned deliverables, and development structure.",
    },
    {
      title: "Requirements Analysis & Design",
      href: `${import.meta.env.BASE_URL}docs/GlamUp!_RequirementsAnalysisDesign.pdf`,
      summary:
        "Covers system analysis, design thinking, and key user workflows for the app.",
    },
    {
      title: "Project Mockups",
      href: `${import.meta.env.BASE_URL}docs/GlamUp!_ProjectMockups.pdf`,
      summary:
        "Visual UI mockups showing GlamUp!’s pink beauty-tech interface and screen flows.",
    },
    {
      title: "Project Report I",
      href: `${import.meta.env.BASE_URL}docs/GlamUp!_ProjectReport1.pdf`,
      summary:
        "Documents early implementation progress, planning updates, and project structure.",
    },
    {
      title: "Project Report II",
      href: `${import.meta.env.BASE_URL}docs/GlamUp!_ProjectReport2.pdf`,
      summary:
        "Shows later prototype progress, role-based login, Firebase work, and refinements.",
    },
  ];

  const FEATURES = [
    {
      icon: <Users size={20} />,
      title: "Role-Based Experience",
      text: "Separate user flows for clients, beauty professionals, and admin users create a more structured and personalized platform experience.",
    },
    {
      icon: <CalendarDays size={20} />,
      title: "Appointment Booking",
      text: "Clients can browse professionals, explore services, and move through a polished booking journey with date and time selection.",
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Verification Workflow",
      text: "Beauty professionals can submit certification details for review, helping the platform support trust and credibility.",
    },
    {
      icon: <Search size={20} />,
      title: "Search & Discovery",
      text: "The app was designed around helping users find beauty professionals by service type, profile details, and availability.",
    },
  ];

  return (
    <div
      className="min-h-screen px-6 py-16 md:px-8"
      style={{
        background:
          "radial-gradient(circle at top, rgba(255,79,163,0.12), transparent 30%), #050508",
        color: T.ink,
      }}
    >
      <div className="mx-auto max-w-6xl space-y-10">
        <Link to="/" style={{ color: T.pink }} className="text-sm">
          ← Back to Home
        </Link>

        <Card className="overflow-hidden p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-5 flex flex-wrap gap-3">
                <Pill icon={<Smartphone size={16} style={{ color: T.pink }} />}>
                  React Native App
                </Pill>
                <Pill icon={<Sparkles size={16} style={{ color: T.pink }} />}>
                  Beauty Marketplace
                </Pill>
              </div>

              <HeroTitle>
                Capstone Project: GlamUp!
              </HeroTitle>

              <p className="mt-5 max-w-2xl text-lg leading-8" style={{ color: T.muted }}>
                GlamUp! is a cross-platform beauty services application designed to
                connect clients with beauty professionals through a modern, role-based
                booking experience. The project focuses on discovery, profiles,
                appointment management, verification, and a polished beauty-tech UI.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={demoVideo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition hover:scale-[1.02]"
                  style={{
                    background: T.pink,
                    color: "#050508",
                    boxShadow: "0 12px 30px rgba(255,79,163,0.35)",
                  }}
                >
                  <PlayCircle size={18} />
                  Watch Demo
                </a>

                <a
                  href="#documents"
                  className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium"
                  style={{
                    borderColor: "rgba(255,255,255,0.10)",
                    background: "rgba(255,255,255,0.03)",
                    color: T.ink,
                  }}
                >
                  <FileText size={18} />
                  View Docs
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div
                className="w-full max-w-[480px] rounded-[2rem] border p-4"
                style={{
                  borderColor: "rgba(255,255,255,0.10)",
                  background:
                    "linear-gradient(180deg, rgba(255,79,163,0.12), rgba(255,255,255,0.03))",
                  boxShadow: "0 22px 60px rgba(0,0,0,0.30)",
                }}
              >
                <img
                  src={glamupHero}
                  alt="GlamUp app branding"
                  className="h-full w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-8 md:p-10">
          <SectionTitle
            eyebrow="Video Showcase"
            title="App walkthrough"
            text="A quick walkthrough of the GlamUp! app experience."
          />

          <div
            className="mt-8 overflow-hidden rounded-[2rem] border p-3"
            style={{
              borderColor: "rgba(255,255,255,0.08)",
              background:
                "linear-gradient(180deg, rgba(255,79,163,0.12), rgba(255,255,255,0.02))",
              boxShadow: "0 18px 50px rgba(0,0,0,0.28)",
            }}
          >
            <video
              className="w-full rounded-[1.5rem]"
              controls
              preload="metadata"
            >
              <source src={demoVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Card>

        <Card className="p-8 md:p-10">
          <SectionTitle
            eyebrow="Project Overview"
            title="What GlamUp is about"
            text="GlamUp! was designed as a beauty marketplace app where clients can discover local beauty professionals, browse profiles, view services, and book appointments in a polished mobile experience."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              icon={<CheckCircle2 size={20} style={{ color: T.pink }} />}
              label="Platform Type"
              value="Mobile app"
            />
            <StatCard
              icon={<Users size={20} style={{ color: T.pink }} />}
              label="User Roles"
              value="Client • BeautyPro • Admin"
            />
            <StatCard
              icon={<ShieldCheck size={20} style={{ color: T.pink }} />}
              label="Focus"
              value="Booking + trust"
            />
            <StatCard
              icon={<CalendarDays size={20} style={{ color: T.pink }} />}
              label="Core Flow"
              value="Browse → Book"
            />
          </div>
        </Card>

        <Card className="p-8 md:p-10">
          <SectionTitle
            eyebrow="Key Features"
            title="Core functionality"
            text="These were the main experiences and workflows that shaped the project."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {FEATURES.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                text={feature.text}
              />
            ))}
          </div>
        </Card>

        <Card className="p-8 md:p-10">
          <SectionTitle
            eyebrow="My Role"
            title="What I contributed"
            text="I contributed to the app design direction, authentication flow work, interface refinement, admin-related screens, and role-based functionality."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              "Worked on register and login screen improvements.",
              "Implemented role-based login flow with Firebase integration.",
              "Contributed to beauty professional verification and email authentication logic.",
              "Refined admin dashboard UI for the working prototype.",
              "Helped shape profile management and future notification-related work.",
              "Contributed to mobile interface development and feature planning.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border px-5 py-4"
                style={{
                  borderColor: "rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <p className="leading-7" style={{ color: T.muted }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <div id="documents">
          <Card className="p-8 md:p-10">
            <SectionTitle
              eyebrow="Documentation"
              title="Project document previews"
            />

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {DOCS.map((doc) => (
                <DocumentPreviewCard
                  key={doc.title}
                  title={doc.title}
                  href={doc.href}
                  summary={doc.summary}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}