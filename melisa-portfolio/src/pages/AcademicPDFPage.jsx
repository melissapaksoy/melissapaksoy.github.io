import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Monitor,
  Sparkles,
  Layers3,
  Shield,
  FolderOpen,
  X,
  CheckCircle2,
  FileText,
  Wand2,
} from "lucide-react";
import HeroTitle from "../components/HeroTitle";


const T = {
  bg: "#FAF7F2",
  card: "rgba(255,255,255,0.92)",
  card2: "rgba(255,255,255,0.98)",
  ink: "#1A1613",
  muted: "rgba(26,22,19,0.72)",
  soft: "rgba(26,22,19,0.52)",
  border: "rgba(20,15,10,0.10)",
  pink: "#9C7A2E",
  pink2: "#B8860B",
  pink3: "#7A5C1E",
  glow: "rgba(184,134,11,0.22)",
  glowStrong: "rgba(184,134,11,0.34)",
};

const IMAGES = {
  hero: `${import.meta.env.BASE_URL}projects/academicpdf/academicpdf-batch-upload.png`,
  emptyState: `${import.meta.env.BASE_URL}projects/academicpdf/academicpdf-empty-state.png`,
  batchUpload: `${import.meta.env.BASE_URL}projects/academicpdf/academicpdf-batch-upload.png`,
  success: `${import.meta.env.BASE_URL}projects/academicpdf/academicpdf-processing-success.png`,
  degree1: `${import.meta.env.BASE_URL}projects/academicpdf/maria_degreeworks1.png`,
  degree2: `${import.meta.env.BASE_URL}projects/academicpdf/maria_degreeworks2.png`,
  degree3: `${import.meta.env.BASE_URL}projects/academicpdf/maria_degreeworks3.png`,
  degree4: `${import.meta.env.BASE_URL}projects/academicpdf/maria_degreeworks4.png`,
  report1: `${import.meta.env.BASE_URL}projects/academicpdf/maria-report-page-1.png`,
  report2: `${import.meta.env.BASE_URL}projects/academicpdf/maria-report-page-2.png`,
};

const appGallery = [
  {
    src: IMAGES.emptyState,
    title: "Empty State",
    subtitle: "Interface before any PDFs are selected",
    tag: "Application Interface",
  },
  {
    src: IMAGES.batchUpload,
    title: "Batch Upload",
    subtitle: "Multiple student PDFs loaded and ready for processing",
    tag: "Application Interface",
  },
  {
    src: IMAGES.success,
    title: "Processing Success",
    subtitle: "Confirmation modal after report generation is completed",
    tag: "Application Interface",
  },
];

const inputGallery = [
  {
    src: IMAGES.degree1,
    title: "Original Degree Audit — Page 1",
    subtitle: "Program progress summary and requirement overview",
    tag: "Input PDF",
  },
  {
    src: IMAGES.degree2,
    title: "Original Degree Audit — Page 2",
    subtitle: "Semester 1 and Semester 2 breakdown",
    tag: "Input PDF",
  },
  {
    src: IMAGES.degree3,
    title: "Original Degree Audit — Page 3",
    subtitle: "Semester 3, Semester 4, and general education requirements",
    tag: "Input PDF",
  },
  {
    src: IMAGES.degree4,
    title: "Original Degree Audit — Page 4",
    subtitle: "Courses not applied, insufficient courses, and in-progress details",
    tag: "Input PDF",
  },
];

const outputGallery = [
  {
    src: IMAGES.report1,
    title: "Generated Report — Page 1",
    subtitle: "Student summary, semester records, and program snapshot",
    tag: "Generated Output",
  },
  {
    src: IMAGES.report2,
    title: "Generated Report — Page 2",
    subtitle: "Structured insufficient courses summary",
    tag: "Generated Output",
  },
];

const stack = [
  "Python",
  "PyQt5",
  "PDF Processing",
  "Desktop UI",
  "Batch File Handling",
  "Local File System",
  "Report Generation",
];

const finalOutcomeCards = [
  {
    icon: <FileText size={20} />,
    title: "Student Summary",
    text: "Generates a cleaner overview of academic standing, program information, and progress details from the original DegreeWorks audit.",
  },
  {
    icon: <Layers3 size={20} />,
    title: "Semester Breakdown",
    text: "Reorganizes course details into a more readable semester-by-semester structure that is easier to scan than the raw source PDF.",
  },
  {
    icon: <CheckCircle2 size={20} />,
    title: "Insufficient Courses Highlight",
    text: "Clearly identifies missing or unmet academic requirements so the remaining coursework is instantly easier to understand.",
  },
  {
    icon: <Wand2 size={20} />,
    title: "Polished Report Output",
    text: "Transforms dense academic audit data into a structured and visually cleaner final report summary for faster review.",
  },
];

function SectionTitle({ eyebrow, title, text, center = false }) {
  return (
    <div
      style={{
        marginBottom: 28,
        textAlign: center ? "center" : "left",
      }}
    >
      {eyebrow ? (
        <div
          style={{
            color: T.pink2,
            fontSize: 13,
            fontWeight: 800,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          {eyebrow}
        </div>
      ) : null}

      <h2
        style={{
          margin: 0,
          color: T.ink,
          fontSize: "clamp(28px, 4vw, 44px)",
          lineHeight: 1.05,
          fontWeight: 800,
          letterSpacing: "-0.03em",
        }}
      >
        {title}
      </h2>

      {text ? (
        <p
          style={{
            margin: "14px auto 0",
            maxWidth: center ? 860 : 820,
            color: T.muted,
            fontSize: 16,
            lineHeight: 1.8,
          }}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}

function LargeGalleryCard({ item, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background:
          "linear-gradient(180deg, rgba(184,134,11,0.08), rgba(20,15,10,0.02))",
        border: `1px solid ${T.border}`,
        borderRadius: 26,
        overflow: "hidden",
        cursor: "pointer",
        textAlign: "left",
        padding: 0,
        transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
        boxShadow: `0 0 0 rgba(0,0,0,0)`,
        backdropFilter: "blur(10px)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = `0 0 28px ${T.glow}`;
        e.currentTarget.style.borderColor = "rgba(184,134,11,0.35)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
        e.currentTarget.style.borderColor = T.border;
      }}
    >
      <div
        style={{
          aspectRatio: "16 / 10",
          background: "#F0ECE4",
          overflow: "hidden",
          borderBottom: `1px solid ${T.border}`,
        }}
      >
        <img
          src={item.src}
          alt={item.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      <div style={{ padding: 18 }}>
        <div
          style={{
            display: "inline-block",
            padding: "6px 10px",
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 700,
            color: T.pink3,
            background: "rgba(184,134,11,0.12)",
            border: "1px solid rgba(184,134,11,0.22)",
            marginBottom: 12,
          }}
        >
          {item.tag}
        </div>

        <div
          style={{
            color: T.ink,
            fontSize: 18,
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          {item.title}
        </div>

        <div
          style={{
            color: T.muted,
            fontSize: 14,
            lineHeight: 1.65,
          }}
        >
          {item.subtitle}
        </div>
      </div>
    </button>
  );
}

function SmallPdfCard({ item, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        border: `1px solid ${T.border}`,
        borderRadius: 20,
        overflow: "hidden",
        background:
          "linear-gradient(180deg, rgba(184,134,11,0.06), rgba(20,15,10,0.02))",
        cursor: "pointer",
        transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
        padding: 0,
        textAlign: "left",
        backdropFilter: "blur(10px)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = `0 0 22px ${T.glow}`;
        e.currentTarget.style.borderColor = "rgba(184,134,11,0.28)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = T.border;
      }}
    >
      <div
        style={{
          position: "relative",
          aspectRatio: "3 / 4",
          background: "#ffffff",
          padding: 10,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            zIndex: 2,
            background: "rgba(10,10,16,0.80)",
            color: "#fff",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "5px 7px",
            borderRadius: 999,
          }}
        >
          PDF
        </div>

        <img
          src={item.src}
          alt={item.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
            borderRadius: 10,
            boxShadow: "0 12px 30px rgba(0,0,0,0.14)",
          }}
        />
      </div>

      <div style={{ padding: 12 }}>
        <div
          style={{
            color: T.ink,
            fontSize: 14,
            fontWeight: 700,
            lineHeight: 1.35,
            marginBottom: 4,
          }}
        >
          {item.title}
        </div>
        <div
          style={{
            color: T.muted,
            fontSize: 12,
            lineHeight: 1.5,
          }}
        >
          {item.subtitle}
        </div>
      </div>
    </button>
  );
}

function OutcomeCard({ item }) {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(184,134,11,0.09), rgba(20,15,10,0.02))",
        border: `1px solid ${T.border}`,
        borderRadius: 24,
        padding: 22,
        backdropFilter: "blur(10px)",
        boxShadow: `0 0 0 rgba(0,0,0,0)`,
      }}
    >
      <div
        style={{
          width: 46,
          height: 46,
          display: "grid",
          placeItems: "center",
          borderRadius: 15,
          background: "rgba(184,134,11,0.14)",
          color: T.pink2,
          marginBottom: 14,
        }}
      >
        {item.icon}
      </div>

      <div
        style={{
          color: T.ink,
          fontSize: 18,
          fontWeight: 700,
          marginBottom: 8,
        }}
      >
        {item.title}
      </div>

      <div
        style={{
          color: T.muted,
          fontSize: 15,
          lineHeight: 1.75,
        }}
      >
        {item.text}
      </div>
    </div>
  );
}

export default function AcademicPdf() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `
          radial-gradient(circle at top left, rgba(184,134,11,0.16), transparent 25%),
          radial-gradient(circle at top right, rgba(255,133,193,0.10), transparent 22%),
          radial-gradient(circle at center, rgba(184,134,11,0.05), transparent 38%),
          #FAF7F2
        `,
        color: T.ink,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "32px 20px 90px",
        }}
      >
        <div style={{ marginBottom: 28 }}>
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
              color: T.muted,
              fontWeight: 600,
              transition: "color 160ms ease",
            }}
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>

        <section
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 1fr",
            gap: 30,
            alignItems: "center",
            marginBottom: 88,
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 14px",
                borderRadius: 999,
                border: "1px solid rgba(184,134,11,0.22)",
                background: "rgba(184,134,11,0.10)",
                color: T.pink2,
                fontWeight: 700,
                fontSize: 13,
                marginBottom: 18,
                backdropFilter: "blur(10px)",
              }}
            >
              <Monitor size={16} />
              Desktop Application
            </div>

            <HeroTitle>
              Academic PDF
              <br />
              Processor
            </HeroTitle>

            <p
              style={{
                marginTop: 22,
                maxWidth: 700,
                color: T.muted,
                fontSize: 18,
                lineHeight: 1.85,
              }}
            >
              A Python and PyQt5 desktop application that transforms dense
              academic degree audit PDFs into cleaner, structured report
              summaries through a polished local workflow and batch processing
              support.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                marginTop: 24,
                marginBottom: 28,
              }}
            >
              {["Batch Processing", "PDF Analysis", "Report Generation", "Local & Private"].map(
                (item) => (
                  <div
                    key={item}
                    style={{
                      padding: "10px 14px",
                      borderRadius: 999,
                      color: T.ink,
                      fontWeight: 600,
                      fontSize: 14,
                      background: "rgba(20,15,10,0.04)",
                      border: `1px solid ${T.border}`,
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    ✦ {item}
                  </div>
                )
              )}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <a
                href="#gallery"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  textDecoration: "none",
                  color: T.ink,
                  background:
                    "linear-gradient(135deg, rgba(184,134,11,0.22), rgba(20,15,10,0.05))",
                  border: "1px solid rgba(184,134,11,0.24)",
                  padding: "14px 18px",
                  borderRadius: 16,
                  fontWeight: 700,
                  boxShadow: `0 0 24px ${T.glow}`,
                }}
              >
                <Sparkles size={18} />
                View Gallery
              </a>

              <a
                href="#final-outcome"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  textDecoration: "none",
                  color: T.ink,
                  background: T.card,
                  border: `1px solid ${T.border}`,
                  padding: "14px 18px",
                  borderRadius: 16,
                  fontWeight: 700,
                }}
              >
                <CheckCircle2 size={18} />
                Final Outcome
              </a>
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: "10% 10% auto 10%",
                height: "72%",
                background: T.glowStrong,
                filter: "blur(74px)",
                borderRadius: 999,
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "relative",
                background:
                  "linear-gradient(180deg, rgba(184,134,11,0.08), rgba(20,15,10,0.03))",
                borderRadius: 30,
                border: `1px solid rgba(184,134,11,0.20)`,
                overflow: "hidden",
                boxShadow: `0 0 36px ${T.glow}`,
                backdropFilter: "blur(12px)",
              }}
            >
              <img
                src={IMAGES.hero}
                alt="Academic PDF Processor batch upload interface"
                style={{
                  width: "100%",
                  display: "block",
                }}
              />
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 78 }}>
          <SectionTitle
            eyebrow="Project Overview"
            title="Turning complex academic audits into clear, polished report summaries."
            text="This project was designed to simplify how academic progress PDFs are interpreted. Instead of forcing users to read dense multi-page degree audit documents, the application extracts key details and generates a cleaner summary report focused on semester progress, insufficient courses, and overall requirement status."
          />

          <div
            className="three-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 18,
              marginTop: 28,
            }}
          >
            {[
              {
                icon: <Layers3 size={20} />,
                title: "Batch PDF Processing",
                text: "Supports multiple student PDFs in one workflow for faster report generation.",
              },
              {
                icon: <FolderOpen size={20} />,
                title: "Custom Output Directory",
                text: "Users can choose where reports are saved before processing begins.",
              },
              {
                icon: <Shield size={20} />,
                title: "Privacy-First Workflow",
                text: "All file analysis happens locally on the desktop with no external upload required.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background:
                    "linear-gradient(180deg, rgba(184,134,11,0.06), rgba(20,15,10,0.02))",
                  border: `1px solid ${T.border}`,
                  borderRadius: 24,
                  padding: 22,
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: 14,
                    background: "rgba(184,134,11,0.12)",
                    color: T.pink2,
                    marginBottom: 14,
                  }}
                >
                  {item.icon}
                </div>
                <div
                  style={{
                    color: T.ink,
                    fontSize: 18,
                    fontWeight: 700,
                    marginBottom: 8,
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    color: T.muted,
                    fontSize: 15,
                    lineHeight: 1.75,
                  }}
                >
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 78 }}>
          <SectionTitle
            eyebrow="Workflow"
            title="A simple three-step processing flow."
            text="The interface was designed to keep the report generation process clear, minimal, and easy to use."
          />

          <div
            className="three-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 18,
            }}
          >
            {[
              {
                num: "01",
                title: "Upload Academic PDFs",
                text: "Users add one or more degree audit PDFs to the queue through the desktop interface.",
              },
              {
                num: "02",
                title: "Choose Output Location",
                text: "A destination folder is selected so generated summary reports can be saved in the preferred location.",
              },
              {
                num: "03",
                title: "Generate Reports",
                text: "The application processes the selected files and produces structured PDF report summaries.",
              },
            ].map((step) => (
              <div
                key={step.num}
                style={{
                  background:
                    "linear-gradient(180deg, rgba(184,134,11,0.05), rgba(20,15,10,0.02))",
                  border: `1px solid ${T.border}`,
                  borderRadius: 24,
                  padding: 22,
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 800,
                    letterSpacing: "0.14em",
                    color: T.pink2,
                    marginBottom: 14,
                  }}
                >
                  {step.num}
                </div>
                <div
                  style={{
                    color: T.ink,
                    fontSize: 20,
                    fontWeight: 700,
                    marginBottom: 10,
                  }}
                >
                  {step.title}
                </div>
                <div
                  style={{
                    color: T.muted,
                    fontSize: 15,
                    lineHeight: 1.8,
                  }}
                >
                  {step.text}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="final-outcome" style={{ marginBottom: 78 }}>
          <SectionTitle
            eyebrow="Final Outcome"
            title="From dense academic audits to elegant, readable report output."
            text="The final result of AcademicPDF is a cleaner and more structured summary report that helps users understand academic progress much faster than reading the original DegreeWorks document."
            center
          />

          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(184,134,11,0.08), rgba(20,15,10,0.02))",
              border: `1px solid rgba(184,134,11,0.18)`,
              borderRadius: 30,
              padding: "28px 24px",
              marginBottom: 26,
              boxShadow: `0 0 30px ${T.glow}`,
              backdropFilter: "blur(12px)",
            }}
          >
            <div
              style={{
                color: T.ink,
                fontSize: "clamp(22px, 3vw, 30px)",
                fontWeight: 800,
                marginBottom: 12,
                textAlign: "center",
              }}
            >
              Converts complex academic audit PDFs into clean, structured reports
              that make student progress instantly understandable.
            </div>

            <p
              style={{
                margin: 0,
                color: T.muted,
                fontSize: 16,
                lineHeight: 1.8,
                textAlign: "center",
                maxWidth: 900,
                marginInline: "auto",
              }}
            >
              Instead of manually reviewing cluttered multi-page academic audits,
              the system extracts the important information and reorganizes it into
              a polished summary focused on readability, academic progress, and
              missing requirements.
            </p>
          </div>

          <div
            className="two-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 18,
              marginBottom: 26,
            }}
          >
            {finalOutcomeCards.map((item) => (
              <OutcomeCard key={item.title} item={item} />
            ))}
          </div>

          <div
            className="two-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 18,
            }}
          >
            <div
              style={{
                background:
                  "linear-gradient(180deg, rgba(184,134,11,0.07), rgba(20,15,10,0.02))",
                border: `1px solid ${T.border}`,
                borderRadius: 24,
                padding: 24,
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                style={{
                  color: T.pink2,
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Before
              </div>
              <div
                style={{
                  color: T.ink,
                  fontSize: 20,
                  fontWeight: 700,
                  marginBottom: 10,
                }}
              >
                Dense, multi-page DegreeWorks PDF
              </div>
              <p
                style={{
                  margin: 0,
                  color: T.muted,
                  fontSize: 15,
                  lineHeight: 1.8,
                }}
              >
                Academic information appears across multiple pages and can feel
                overwhelming to scan quickly, especially when identifying missing
                requirements or semester progress.
              </p>
            </div>

            <div
              style={{
                background:
                  "linear-gradient(180deg, rgba(184,134,11,0.10), rgba(20,15,10,0.02))",
                border: "1px solid rgba(184,134,11,0.22)",
                borderRadius: 24,
                padding: 24,
                boxShadow: `0 0 24px ${T.glow}`,
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                style={{
                  color: T.pink2,
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                After
              </div>
              <div
                style={{
                  color: T.ink,
                  fontSize: 20,
                  fontWeight: 700,
                  marginBottom: 10,
                }}
              >
                Clean, structured report summary
              </div>
              <p
                style={{
                  margin: 0,
                  color: T.muted,
                  fontSize: 15,
                  lineHeight: 1.8,
                }}
              >
                The generated output is easier to read, easier to interpret, and
                better suited for quickly understanding academic standing,
                semester details, and insufficient courses.
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 78 }}>
          <SectionTitle
            eyebrow="Tech Stack"
            title="Built with a desktop-first development workflow."
          />

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            {stack.map((item) => (
              <div
                key={item}
                style={{
                  padding: "12px 16px",
                  borderRadius: 999,
                  background: "rgba(20,15,10,0.04)",
                  border: `1px solid ${T.border}`,
                  color: T.ink,
                  fontWeight: 600,
                  fontSize: 14,
                  backdropFilter: "blur(10px)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="gallery" style={{ marginBottom: 78 }}>
          <SectionTitle
            eyebrow="Gallery"
            title="From raw academic audit PDFs to polished generated summaries."
            text="The application screenshots stay larger as the main focus, while the DegreeWorks pages and report output are shown as smaller preview cards for a cleaner portfolio layout."
          />

          <div style={{ marginBottom: 50 }}>
            <div
              style={{
                color: T.ink,
                fontSize: 24,
                fontWeight: 800,
                marginBottom: 18,
              }}
            >
              Application Interface
            </div>

            <div
              className="three-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 18,
              }}
            >
              {appGallery.map((item) => (
                <LargeGalleryCard
                  key={item.title}
                  item={item}
                  onClick={() => setSelectedImage(item)}
                />
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 50 }}>
            <div
              style={{
                color: T.ink,
                fontSize: 22,
                fontWeight: 800,
                marginBottom: 16,
              }}
            >
              Original Academic Audit
            </div>

            <div
              className="pdf-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                gap: 14,
              }}
            >
              {inputGallery.map((item) => (
                <SmallPdfCard
                  key={item.title}
                  item={item}
                  onClick={() => setSelectedImage(item)}
                />
              ))}
            </div>
          </div>

          <div>
            <div
              style={{
                color: T.ink,
                fontSize: 22,
                fontWeight: 800,
                marginBottom: 16,
              }}
            >
              Generated Report Output
            </div>

            <div
              className="pdf-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: 14,
              }}
            >
              {outputGallery.map((item) => (
                <SmallPdfCard
                  key={item.title}
                  item={item}
                  onClick={() => setSelectedImage(item)}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      {selectedImage ? (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(5,5,8,0.88)",
            backdropFilter: "blur(8px)",
            display: "grid",
            placeItems: "center",
            zIndex: 1000,
            padding: 20,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "min(1100px, 100%)",
              maxHeight: "90vh",
              overflow: "auto",
              background: T.card2,
              border: `1px solid rgba(184,134,11,0.20)`,
              borderRadius: 24,
              boxShadow: `0 0 40px ${T.glow}`,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                padding: "16px 18px",
                borderBottom: `1px solid ${T.border}`,
              }}
            >
              <div>
                <div
                  style={{
                    color: T.ink,
                    fontWeight: 800,
                    fontSize: 18,
                    marginBottom: 6,
                  }}
                >
                  {selectedImage.title}
                </div>
                <div
                  style={{
                    color: T.muted,
                    fontSize: 14,
                  }}
                >
                  {selectedImage.subtitle}
                </div>
              </div>

              <button
                onClick={() => setSelectedImage(null)}
                style={{
                  border: `1px solid ${T.border}`,
                  background: "rgba(20,15,10,0.03)",
                  color: T.ink,
                  width: 42,
                  height: 42,
                  borderRadius: 12,
                  cursor: "pointer",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <X size={18} />
              </button>
            </div>

            <div style={{ padding: 18 }}>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: 18,
                  background: "#fff",
                }}
              />
            </div>
          </div>
        </div>
      ) : null}

      <style>{`
        @media (max-width: 980px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 900px) {
          .three-grid,
          .two-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 700px) {
          .pdf-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 460px) {
          .pdf-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}