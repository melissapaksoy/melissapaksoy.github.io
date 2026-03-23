import { useMemo, useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, X, Github } from "lucide-react";
import { Link } from "react-router-dom";
import HeroTitle from "../components/HeroTitle";

const T = {
  bg: "#050508",
  ink: "#F6F7FB",
  muted: "rgba(246,247,251,0.72)",
  soft: "rgba(246,247,251,0.52)",
  border: "rgba(255,255,255,0.10)",
  pink: "#FF4FA3",
  pinkSoft: "rgba(255,79,163,0.16)",
  card: "rgba(255,255,255,0.05)",
};

const LINKS = {
  repo: "https://github.com/melissapaksoy/100966275_lab_test1_chat_app",
};

const techStack = [
  "Node.js",
  "Express",
  "MongoDB",
  "Mongoose",
  "Socket.IO",
  "bcrypt",
  "HTML",
  "CSS",
  "JavaScript",
];

const featureCards = [
  {
    title: "Secure Authentication",
    text: "Users can create accounts and log in securely with validation, unique username checking, and hashed passwords.",
  },
  {
    title: "Real-Time Group Chat",
    text: "The application supports live room-based communication with instant message updates and typing indicators.",
  },
  {
    title: "Private Messaging",
    text: "Users can start direct one-to-one conversations with real-time updates and stored message history.",
  },
  {
    title: "MongoDB Persistence",
    text: "User accounts and both group and private messages are stored in MongoDB for persistent chat history.",
  },
];

const gallerySections = [
  {
    label: "Authentication",
    title: "Secure account creation and login flow",
    description:
      "The experience begins with user signup and login, backed by validation, username uniqueness checks, and password hashing. Session data is stored locally so users can access the chat pages after authentication.",
    images: [
      {
        src: `${import.meta.env.BASE_URL}projects/chatapp/signup.png`,
        alt: "Signup Page",
      },
      {
        src: `${import.meta.env.BASE_URL}projects/chatapp/login1.png`,
        alt: "Login Page",
      },
    ],
  },
  {
    label: "Room-Based Chat",
    title: "Live communication inside themed chat rooms",
    description:
      "Users can join predefined rooms like Makeup, Hair, Lashes, Fashion, Shoes, and Bags. Inside each room, messages appear instantly, typing indicators give live feedback, and system messages reflect room activity.",
    images: [
      {
        src: `${import.meta.env.BASE_URL}projects/chatapp/rooms.png`,
        alt: "Rooms Page",
      },
      {
        src: `${import.meta.env.BASE_URL}projects/chatapp/group_chat.png`,
        alt: "Group Chat",
      },
      {
        src: `${import.meta.env.BASE_URL}projects/chatapp/leave_room.png`,
        alt: "Leave Room Message",
      },
    ],
  },
  {
    label: "Private Messaging",
    title: "One-to-one conversations in real time",
    description:
      "In addition to room messaging, the application supports direct private conversations between users. This adds a second communication flow while keeping real-time delivery and persistent storage.",
    images: [
      {
        src: `${import.meta.env.BASE_URL}projects/chatapp/private_chat.png`,
        alt: "Private Chat",
      },
    ],
  },
  {
    label: "Database Persistence",
    title: "MongoDB collections that preserve the chat history",
    description:
      "The backend stores users, group messages, and private messages in separate MongoDB collections using structured Mongoose schemas, allowing conversations to remain visible even after refresh.",
    images: [
      {
        src: `${import.meta.env.BASE_URL}projects/chatapp/mongodb_users.png`,
        alt: "MongoDB Users",
      },
      {
        src: `${import.meta.env.BASE_URL}projects/chatapp/mongodb_group_messages.png`,
        alt: "MongoDB Group Messages",
      },
      {
        src: `${import.meta.env.BASE_URL}projects/chatapp/mongodb_private_messages.png`,
        alt: "MongoDB Private Messages",
      },
    ],
  },
];

export default function ChatAppProjectPage() {
  const allImages = useMemo(
    () => gallerySections.flatMap((section) => section.images),
    []
  );

  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (imageSrc) => {
    const index = allImages.findIndex((img) => img.src === imageSrc);
    if (index !== -1) setLightboxIndex(index);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const showPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const showNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  const currentImage = lightboxIndex !== null ? allImages[lightboxIndex] : null;

  return (
    <main
      className="min-h-screen px-6 py-10 md:px-10 lg:px-16"
      style={{
        background: `
          radial-gradient(circle at top left, rgba(255,79,163,0.14), transparent 28%),
          radial-gradient(circle at top right, rgba(255,255,255,0.06), transparent 18%),
          linear-gradient(180deg, #050508 0%, #08070B 48%, #050508 100%)
        `,
        color: T.ink,
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition hover:-translate-y-0.5"
            style={{
              borderColor: T.border,
              background: T.card,
              color: T.muted,
            }}
          >
            <ArrowLeft size={16} />
            Back to Homepage
          </Link>
        </div>

        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span
              className="inline-flex rounded-full border px-4 py-1 text-xs uppercase tracking-[0.28em]"
              style={{
                borderColor: "rgba(255,79,163,0.30)",
                background: T.pinkSoft,
                color: "#FFC2DD",
              }}
            >
              Full-Stack Case Study
            </span>

            <HeroTitle>
              Real-Time Chat Application</HeroTitle>
            <p
              className="mt-6 max-w-2xl text-base leading-8 md:text-lg"
              style={{ color: T.muted }}
            >
              A full-stack messaging platform built with Node.js, Express,
              MongoDB, and Socket.IO. This project combines secure
              authentication, room-based group chat, private messaging, typing
              indicators, and persistent storage into one cohesive real-time
              experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {techStack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border px-4 py-2 text-sm"
                  style={{
                    borderColor: T.border,
                    background: "rgba(255,255,255,0.04)",
                    color: T.ink,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={LINKS.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5"
                style={{
                  background: T.pink,
                  color: "#14070F",
                }}
              >
                <Github size={18} />
                View Repository
              </a>

              <a
                href="#gallery"
                className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5"
                style={{
                  borderColor: T.border,
                  background: T.card,
                  color: T.ink,
                }}
              >
                View Gallery
              </a>
            </div>
          </div>

          <div
            className="overflow-hidden rounded-[32px] border shadow-[0_30px_100px_rgba(0,0,0,0.35)]"
            style={{
              borderColor: T.border,
              background: "rgba(255,255,255,0.04)",
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}projects/chatapp/group_chat.png`}
              alt="Real-Time Chat App Preview"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <section className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[28px] border p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1"
              style={{
                borderColor: T.border,
                background: "rgba(255,255,255,0.05)",
              }}
            >
              <div
                className="mb-4 h-10 w-10 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,79,163,0.22), rgba(255,255,255,0.08))",
                }}
              />
              <h2 className="text-xl font-medium">{card.title}</h2>
              <p className="mt-3 text-sm leading-7" style={{ color: T.muted }}>
                {card.text}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-24 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p
              className="text-sm uppercase tracking-[0.28em]"
              style={{ color: "#FFB4D4" }}
            >
              Project Story
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Designing a real-time messaging experience from end to end
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-8 md:text-base" style={{ color: T.muted }}>
            <p>
              This project was built as a full-stack real-time chat application
              where users can register, log in, enter themed rooms, send live
              group messages, start private conversations, view typing
              indicators, and leave rooms while keeping everything connected to
              a persistent MongoDB backend.
            </p>
            <p>
              I wanted the app to feel functional beyond a simple front-end
              mockup, so I implemented authentication, Socket.IO event handling,
              and database persistence together. That made the project a strong
              demonstration of both user-facing design and backend architecture.
            </p>
          </div>
        </section>

        <section id="gallery" className="mt-24 space-y-20">
          <div className="max-w-4xl">
            <p
              className="text-sm uppercase tracking-[0.28em]"
              style={{ color: "#FFB4D4" }}
            >
              Visual Walkthrough
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              A curated gallery of the user flow and system proof
            </h2>
        
          </div>

          {gallerySections.map((section, index) => (
            <div
              key={section.title}
              className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <span
                  className="inline-flex rounded-full border px-4 py-1 text-xs uppercase tracking-[0.25em]"
                  style={{
                    borderColor: "rgba(255,79,163,0.30)",
                    background: T.pinkSoft,
                    color: "#FFC2DD",
                  }}
                >
                  {section.label}
                </span>

                <h3 className="mt-5 text-2xl font-semibold md:text-3xl">
                  {section.title}
                </h3>

                <p
                  className="mt-4 max-w-xl text-sm leading-7 md:text-base"
                  style={{ color: T.muted }}
                >
                  {section.description}
                </p>
              </div>

              <div
                className={`grid gap-4 ${
                  section.images.length === 1
                    ? "grid-cols-1"
                    : section.images.length === 2
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1 md:grid-cols-2"
                } ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                {section.images.map((image, i) => (
                  <button
                    key={image.alt}
                    type="button"
                    onClick={() => openLightbox(image.src)}
                    className={`group overflow-hidden rounded-[28px] border text-left shadow-[0_20px_80px_rgba(0,0,0,0.30)] transition duration-300 hover:-translate-y-1 ${
                      section.images.length === 3 && i === 0 ? "md:col-span-2" : ""
                    }`}
                    style={{
                      borderColor: T.border,
                      background: "rgba(255,255,255,0.05)",
                    }}
                  >
                    <div className="overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                    <div
                      className="border-t px-5 py-4"
                      style={{ borderColor: T.border }}
                    >
                      <p className="text-sm font-medium">{image.alt}</p>
                      <p className="mt-1 text-xs" style={{ color: T.soft }}>
                        Click to enlarge
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mt-24 grid gap-8 lg:grid-cols-2">
          <article
            className="rounded-[30px] border p-8"
            style={{
              borderColor: T.border,
              background: "rgba(255,255,255,0.05)",
            }}
          >
            <p
              className="text-sm uppercase tracking-[0.25em]"
              style={{ color: "#FFB4D4" }}
            >
              Technical Highlights
            </p>

            <ul className="mt-6 space-y-4 text-sm leading-7 md:text-base" style={{ color: T.muted }}>
              <li>• Secure registration and login with bcrypt password hashing</li>
              <li>• Real-time communication powered by Socket.IO</li>
              <li>• Separate flows for room chat and private messaging</li>
              <li>• Typing indicators and room activity feedback</li>
              <li>• MongoDB persistence for users and messages</li>
              <li>• Structured backend validation with Mongoose schemas</li>
            </ul>
          </article>

          <article
            className="rounded-[30px] border p-8"
            style={{
              borderColor: T.border,
              background: "rgba(255,255,255,0.05)",
            }}
          >
            <p
              className="text-sm uppercase tracking-[0.25em]"
              style={{ color: "#FFB4D4" }}
            >
              Takeaway
            </p>

            <p className="mt-6 text-sm leading-8 md:text-base" style={{ color: T.muted }}>
              This project strengthened my ability to connect front-end
              interaction, backend logic, real-time communication, and database
              persistence into a complete application. It reflects how I approach
              software development as both a technical and visual design problem.
            </p>
          </article>
        </section>
      </div>

      {currentImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-md">
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 rounded-full border p-3 transition hover:scale-105"
            style={{
              borderColor: T.border,
              background: "rgba(255,255,255,0.08)",
              color: T.ink,
            }}
            aria-label="Close image preview"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            onClick={showPrev}
            className="absolute left-4 rounded-full border p-3 transition hover:scale-105"
            style={{
              borderColor: T.border,
              background: "rgba(255,255,255,0.08)",
              color: T.ink,
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-[28px] border bg-black/30 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-h-[78vh] w-full object-contain"
              style={{ borderColor: T.border }}
            />
            <div
              className="border-t px-6 py-4"
              style={{
                borderColor: T.border,
                background: "rgba(255,255,255,0.04)",
              }}
            >
              <p className="text-base font-medium">{currentImage.alt}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={showNext}
            className="absolute right-4 rounded-full border p-3 transition hover:scale-105"
            style={{
              borderColor: T.border,
              background: "rgba(255,255,255,0.08)",
              color: T.ink,
            }}
            aria-label="Next image"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </main>
  );
}