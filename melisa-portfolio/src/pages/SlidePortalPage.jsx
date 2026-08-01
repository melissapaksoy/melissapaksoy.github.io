import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Monitor,
  ScanLine,
  Wifi,
  Presentation,
  Sparkles,
  CheckCircle2,
  LayoutDashboard,
  Globe,
  X,
} from "lucide-react";
import HeroTitle from "../components/HeroTitle";

const BASE = import.meta.env.BASE_URL;

const galleryImages = [
  {
    src: `${BASE}projects/slideportal/scholarship-system-dashboard.png`,
    title: "System Dashboard",
    description:
      "Central hub that links all interfaces, including scanner, MC control panel, display screen, and barcode generation tools.",
  },
  {
    src: `${BASE}projects/slideportal/student-id-scanner-interface.png`,
    title: "Student ID Scanner",
    description:
      "Scanner interface used during the event to scan or manually enter student IDs and add them into the live presentation queue.",
  },
  {
    src: `${BASE}projects/slideportal/scanner-queue-update.png`,
    title: "Scanner Queue Update",
    description:
      "Real-time feedback after scanning a student ID, showing the recognized student, award details, and updated queue state.",
  },
  {
    src: `${BASE}projects/slideportal/mc-control-panel-empty.png`,
    title: "MC Control Panel (Empty State)",
    description:
      "Presenter-facing interface showing queue status, currently displayed student area, and ceremony controls before students are added.",
  },
  {
    src: `${BASE}projects/slideportal/mc-control-panel-active.png`,
    title: "MC Control Panel (Active State)",
    description:
      "Displays live student presentation data, queue management, and recently displayed entries for smoother event flow.",
  },
  {
    src: `${BASE}projects/slideportal/ceremony-display-welcome.png`,
    title: "Ceremony Welcome Display",
    description:
      "Large-screen welcome view designed for the audience before the scholarship presentation begins.",
  },
  {
    src: `${BASE}projects/slideportal/student-award-display.png`,
    title: "Student Award Display",
    description:
      "Elegant fullscreen award screen showing the student name, award title, donor, and ceremony branding.",
  },
  {
    src: `${BASE}projects/slideportal/student-barcode-generator.png`,
    title: "Barcode Generator",
    description:
      "Printable barcode page used to generate and manage student ID scanning resources for testing and event execution.",
  },
];

const techStack = [
  "Flask",
  "Socket.IO",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "ngrok",
  "Real-Time WebSockets",
];

const keyFeatures = [
  "Multi-interface event workflow for scanner, MC panel, and public display",
  "Real-time synchronization between ceremony devices using Socket.IO",
  "Remote hosting support for easier access across devices and locations",
  "Live student queue management for event presentation flow",
  "Fullscreen scholarship display for audience presentation",
  "Barcode-based student identification and testing support",
];

const contributions = [
  "Improved the user interface to make the system cleaner, more readable, and more event-friendly",
  "Added remote hosting support so the app could be accessed outside local-only environments",
  "Refined ceremony display styling for a more polished scholarship presentation experience",
  "Helped modernize the workflow between scanner, control panel, and presentation screen",
];

const heroImage = {
  src: `${BASE}projects/slideportal/student-award-display.png`,
  alt: "Student Award Display",
};

export default function SlidePortal() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => setSelectedImage(image);
  const closeImage = () => setSelectedImage(null);

  return (
    <main style={styles.page}>
      <div style={styles.bgGlowOne} />
      <div style={styles.bgGlowTwo} />

      <section style={styles.container}>
        <Link to="/" style={styles.backLink}>
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </Link>

        <div style={styles.heroCard}>
          <div style={styles.heroGrid}>
            <div>
              <div style={styles.eyebrow}>Real-Time Event System</div>

              <HeroTitle>
                Student Awards Slide Portal
              </HeroTitle>

              <p style={styles.summary}>
                A real-time scholarship ceremony application built to manage student
                award presentations across multiple screens and devices. The system
                includes a scanner interface, MC control panel, big-screen display,
                and barcode tools to support a smooth live event experience.
              </p>

              <div style={styles.heroHighlights}>
                <div style={styles.highlightCard}>
                  <Presentation size={18} />
                  <span>Live Ceremony Workflow</span>
                </div>
                <div style={styles.highlightCard}>
                  <Wifi size={18} />
                  <span>Real-Time Sync</span>
                </div>
                <div style={styles.highlightCard}>
                  <Globe size={18} />
                  <span>Remote Hosting Added</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                openImage({
                  src: heroImage.src,
                  title: "Student Award Display",
                  description:
                    "Elegant fullscreen award screen showing the student name, award title, donor, and ceremony branding.",
                })
              }
              style={styles.heroImageButton}
            >
              <div style={styles.heroImageWrap}>
                <img
                  src={heroImage.src}
                  alt={heroImage.alt}
                  style={styles.heroImage}
                />
              </div>
            </button>
          </div>
        </div>

        <section style={styles.sectionGrid}>
          <div style={styles.infoCard}>
            <div style={styles.sectionIconWrap}>
              <Sparkles size={18} />
              <h2 style={styles.sectionTitle}>Project Overview</h2>
            </div>

            <p style={styles.paragraph}>
              This app was already developed as a scholarship presentation
              system, and our work focused on improving the overall experience.
              We enhanced the interface design, refined the ceremony display,
              and added the option to host the project remotely so it could be
              accessed more easily across devices during event setup and
              execution.
            </p>

            <p style={styles.paragraph}>
              The application uses a Flask backend with Socket.IO for real-time
              communication, allowing instant updates between the scanner,
              presenter controls, and the audience display.
            </p>
          </div>

          <div style={styles.infoCard}>
            <div style={styles.sectionIconWrap}>
              <CheckCircle2 size={18} />
              <h2 style={styles.sectionTitle}>My Contribution</h2>
            </div>

            <ul style={styles.list}>
              {contributions.map((item) => (
                <li key={item} style={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section style={styles.sectionGrid}>
          <div style={styles.infoCard}>
            <div style={styles.sectionIconWrap}>
              <LayoutDashboard size={18} />
              <h2 style={styles.sectionTitle}>Key Features</h2>
            </div>

            <ul style={styles.list}>
              {keyFeatures.map((item) => (
                <li key={item} style={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={styles.infoCard}>
            <div style={styles.sectionIconWrap}>
              <Monitor size={18} />
              <h2 style={styles.sectionTitle}>Tech Stack</h2>
            </div>

            <div style={styles.tags}>
              {techStack.map((item) => (
                <span key={item} style={styles.tag}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section style={styles.fullCard}>
          <div style={styles.sectionIconWrap}>
            <ScanLine size={18} />
            <h2 style={styles.sectionTitle}>Architecture / Workflow</h2>
          </div>

          <div style={styles.workflowGrid}>
            <div style={styles.workflowStep}>
              <div style={styles.stepNumber}>01</div>
              <h3 style={styles.workflowTitle}>Scanner</h3>
              <p style={styles.workflowText}>
                Student IDs are scanned or entered manually into the scanner
                interface.
              </p>
            </div>

            <div style={styles.workflowStep}>
              <div style={styles.stepNumber}>02</div>
              <h3 style={styles.workflowTitle}>Queue Sync</h3>
              <p style={styles.workflowText}>
                Data is pushed instantly through Socket.IO to update the shared
                queue across devices.
              </p>
            </div>

            <div style={styles.workflowStep}>
              <div style={styles.stepNumber}>03</div>
              <h3 style={styles.workflowTitle}>MC Control</h3>
              <p style={styles.workflowText}>
                The MC selects the next student and manages what appears on the
                audience display.
              </p>
            </div>

            <div style={styles.workflowStep}>
              <div style={styles.stepNumber}>04</div>
              <h3 style={styles.workflowTitle}>Big Screen Display</h3>
              <p style={styles.workflowText}>
                The audience sees a polished, fullscreen scholarship slide for
                each student during the event.
              </p>
            </div>
          </div>
        </section>

        <section style={styles.fullCard}>
          <div style={styles.sectionIconWrap}>
            <Sparkles size={18} />
            <h2 style={styles.sectionTitle}>Gallery</h2>
          </div>

          <p style={styles.galleryIntro}>
            Click any image to view it larger.
          </p>

          <div style={styles.galleryGrid}>
            {galleryImages.map((image) => (
              <button
                key={image.title}
                type="button"
                onClick={() => openImage(image)}
                style={styles.galleryCardButton}
              >
                <article style={styles.galleryCard}>
                  <div style={styles.imageWrap}>
                    <img
                      src={image.src}
                      alt={image.title}
                      style={styles.image}
                      loading="lazy"
                    />
                  </div>

                  <div style={styles.galleryContent}>
                    <h3 style={styles.galleryTitle}>{image.title}</h3>
                    <p style={styles.galleryDescription}>{image.description}</p>
                  </div>
                </article>
              </button>
            ))}
          </div>
        </section>

        <section style={styles.sectionGrid}>
          <div style={styles.infoCard}>
            <div style={styles.sectionIconWrap}>
              <Wifi size={18} />
              <h2 style={styles.sectionTitle}>What Was Improved</h2>
            </div>

            <p style={styles.paragraph}>
              One of the biggest improvements added to this project was remote
              hosting support. Instead of being limited to one local setup, the
              system could now be exposed through ngrok, making it easier to
              test and access across multiple devices during live event
              preparation.
            </p>

            <p style={styles.paragraph}>
              On top of that, the interface and visual presentation were refined
              to feel more polished and user-friendly during ceremony use.
            </p>
          </div>

          <div style={styles.infoCard}>
            <div style={styles.sectionIconWrap}>
              <Sparkles size={18} />
              <h2 style={styles.sectionTitle}>Why This Project Matters</h2>
            </div>

            <p style={styles.paragraph}>
              This project shows my ability to work on real event-based systems
              where usability, timing, and reliability matter. It also reflects
              experience improving an existing application rather than only
              building from scratch, which is a very real part of software
              development.
            </p>
          </div>
        </section>

        <div style={styles.footerButtons}>

          <Link to="/" style={styles.secondaryButton}>
            Back to Main Page
          </Link>
        </div>
      </section>

      {selectedImage && (
        <div style={styles.modalOverlay} onClick={closeImage}>
          <div
            style={styles.modalCard}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" onClick={closeImage} style={styles.closeButton}>
              <X size={20} />
            </button>

            <div style={styles.modalImageWrap}>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                style={styles.modalImage}
              />
            </div>

            <div style={styles.modalContent}>
              <h3 style={styles.modalTitle}>{selectedImage.title}</h3>
              <p style={styles.modalDescription}>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, rgba(184,134,11,0.14), transparent 22%), #FAF7F2",
    color: "#1A1613",
    position: "relative",
    overflow: "hidden",
  },

  bgGlowOne: {
    position: "absolute",
    top: "-120px",
    left: "-100px",
    width: "340px",
    height: "340px",
    background: "rgba(184,134,11,0.12)",
    filter: "blur(90px)",
    borderRadius: "999px",
    pointerEvents: "none",
  },

  bgGlowTwo: {
    position: "absolute",
    bottom: "-120px",
    right: "-80px",
    width: "340px",
    height: "340px",
    background: "rgba(184,134,11,0.10)",
    filter: "blur(90px)",
    borderRadius: "999px",
    pointerEvents: "none",
  },

  container: {
    maxWidth: "1240px",
    margin: "0 auto",
    padding: "40px 24px 80px",
    position: "relative",
    zIndex: 1,
  },

  backLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    color: "#1A1613",
    textDecoration: "none",
    marginBottom: "22px",
    fontSize: "0.95rem",
    opacity: 0.9,
  },

  heroCard: {
    border: "1px solid rgba(20,15,10,0.10)",
    background:
      "linear-gradient(180deg, rgba(20,15,10,0.05), rgba(20,15,10,0.025))",
    backdropFilter: "blur(12px)",
    borderRadius: "28px",
    padding: "36px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
    marginBottom: "28px",
  },

  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1.25fr 0.95fr",
    gap: "28px",
    alignItems: "center",
  },

  eyebrow: {
    color: "#9C7A2E",
    fontSize: "0.88rem",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    marginBottom: "12px",
  },

  title: {
    fontSize: "clamp(2.1rem, 4vw, 4rem)",
    lineHeight: 1.05,
    margin: "0 0 16px",
    fontWeight: 800,
  },

  summary: {
    fontSize: "1.05rem",
    lineHeight: 1.8,
    color: "rgba(26,22,19,0.78)",
    maxWidth: "900px",
    margin: 0,
  },

  heroHighlights: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    marginTop: "24px",
  },

  highlightCard: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px 16px",
    borderRadius: "999px",
    border: "1px solid rgba(20,15,10,0.10)",
    background: "rgba(20,15,10,0.04)",
    color: "#1A1613",
    fontSize: "0.95rem",
  },

  heroImageButton: {
    background: "transparent",
    border: "none",
    padding: 0,
    cursor: "pointer",
  },

  heroImageWrap: {
    width: "100%",
    aspectRatio: "16 / 10",
    borderRadius: "24px",
    overflow: "hidden",
    border: "1px solid rgba(20,15,10,0.10)",
    background: "rgba(20,15,10,0.03)",
    boxShadow: "0 16px 40px rgba(0,0,0,0.28)",
  },

  heroImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  sectionGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "20px",
    marginBottom: "20px",
  },

  infoCard: {
    border: "1px solid rgba(20,15,10,0.10)",
    background: "rgba(20,15,10,0.03)",
    borderRadius: "24px",
    padding: "26px",
    boxShadow: "0 12px 40px rgba(0,0,0,0.24)",
  },

  fullCard: {
    border: "1px solid rgba(20,15,10,0.10)",
    background: "rgba(20,15,10,0.03)",
    borderRadius: "24px",
    padding: "26px",
    boxShadow: "0 12px 40px rgba(0,0,0,0.24)",
    marginBottom: "20px",
  },

  sectionIconWrap: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "16px",
    color: "#9C7A2E",
  },

  sectionTitle: {
    fontSize: "1.22rem",
    margin: 0,
    color: "#1A1613",
  },

  paragraph: {
    margin: "0 0 14px",
    lineHeight: 1.8,
    color: "rgba(26,22,19,0.78)",
  },

  list: {
    margin: 0,
    paddingLeft: "18px",
    color: "rgba(26,22,19,0.82)",
    lineHeight: 1.8,
  },

  listItem: {
    marginBottom: "10px",
  },

  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },

  tag: {
    padding: "10px 14px",
    borderRadius: "999px",
    fontSize: "0.9rem",
    border: "1px solid rgba(184,134,11,0.28)",
    background: "rgba(184,134,11,0.10)",
    color: "#7A5C1E",
  },

  workflowGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
  },

  workflowStep: {
    border: "1px solid rgba(20,15,10,0.08)",
    background: "rgba(20,15,10,0.025)",
    borderRadius: "22px",
    padding: "20px",
  },

  stepNumber: {
    fontSize: "0.82rem",
    fontWeight: 800,
    color: "#9C7A2E",
    marginBottom: "10px",
    letterSpacing: "0.08em",
  },

  workflowTitle: {
    margin: "0 0 10px",
    fontSize: "1.05rem",
    color: "#1A1613",
  },

  workflowText: {
    margin: 0,
    lineHeight: 1.7,
    color: "rgba(26,22,19,0.72)",
    fontSize: "0.95rem",
  },

  galleryIntro: {
    color: "rgba(26,22,19,0.72)",
    lineHeight: 1.7,
    marginTop: 0,
    marginBottom: "18px",
  },

  galleryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "18px",
  },

  galleryCardButton: {
    background: "transparent",
    border: "none",
    padding: 0,
    textAlign: "left",
    cursor: "pointer",
  },

  galleryCard: {
    border: "1px solid rgba(20,15,10,0.08)",
    background: "rgba(20,15,10,0.03)",
    borderRadius: "22px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.22)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },

  imageWrap: {
    width: "100%",
    aspectRatio: "16 / 10",
    background: "#F0ECE4",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  galleryContent: {
    padding: "18px",
  },

  galleryTitle: {
    margin: "0 0 10px",
    fontSize: "1rem",
    color: "#1A1613",
  },

  galleryDescription: {
    margin: 0,
    fontSize: "0.94rem",
    lineHeight: 1.7,
    color: "rgba(26,22,19,0.72)",
  },

  footerButtons: {
    display: "flex",
    flexWrap: "wrap",
    gap: "14px",
    marginTop: "28px",
  },

  primaryButton: {
    textDecoration: "none",
    background: "linear-gradient(135deg, #9C7A2E, #C9A961)",
    color: "#1A1613",
    fontWeight: 700,
    padding: "14px 22px",
    borderRadius: "999px",
    boxShadow: "0 10px 30px rgba(184,134,11,0.28)",
  },

  secondaryButton: {
    textDecoration: "none",
    border: "1px solid rgba(20,15,10,0.12)",
    color: "#1A1613",
    padding: "14px 22px",
    borderRadius: "999px",
    background: "rgba(20,15,10,0.04)",
  },

  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(5,5,8,0.82)",
    backdropFilter: "blur(10px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    zIndex: 1000,
  },

  modalCard: {
    width: "min(1100px, 100%)",
    maxHeight: "90vh",
    overflow: "auto",
    borderRadius: "24px",
    border: "1px solid rgba(20,15,10,0.10)",
    background: "#FFFFFF",
    boxShadow: "0 24px 80px rgba(20,15,10,0.18)",
    position: "relative",
  },

  closeButton: {
    position: "absolute",
    top: "14px",
    right: "14px",
    width: "40px",
    height: "40px",
    borderRadius: "999px",
    border: "1px solid rgba(20,15,10,0.12)",
    background: "rgba(20,15,10,0.06)",
    color: "#1A1613",
    display: "grid",
    placeItems: "center",
    cursor: "pointer",
    zIndex: 2,
  },

  modalImageWrap: {
    width: "100%",
    background: "#FAF7F2",
  },

  modalImage: {
    width: "100%",
    height: "auto",
    display: "block",
  },

  modalContent: {
    padding: "22px",
  },

  modalTitle: {
    margin: "0 0 10px",
    fontSize: "1.15rem",
    color: "#1A1613",
  },

  modalDescription: {
    margin: 0,
    lineHeight: 1.8,
    color: "rgba(26,22,19,0.74)",
  },
};