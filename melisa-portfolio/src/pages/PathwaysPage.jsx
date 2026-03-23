import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Github,
  Database,
  Search,
  ShieldCheck,
  Upload,
} from "lucide-react";
import HeroTitle from "../components/HeroTitle";

const T = {
  bg: "#050508",
  panel: "rgba(255,255,255,0.04)",
  panelSoft: "rgba(255,255,255,0.03)",
  ink: "#F6F7FB",
  muted: "rgba(246,247,251,0.72)",
  border: "rgba(255,255,255,0.10)",
  pink: "#FF4FA3",
  pinkSoft: "rgba(255,79,163,0.16)",
  glow: "0 0 40px rgba(255,79,163,0.18)",
};

const PROJECT = {
  title: "Pathways Database",
  subtitle:
    "A full-stack academic pathway platform designed to help students browse program pathways by cycle, semester, and course while giving admin users tools to import, manage, and maintain pathway data through a structured PostgreSQL database.",
  stack: [
    "Next.js",
    "React",
    "JavaScript",
    "PostgreSQL",
    "Prisma ORM",
    "pgAdmin",
    "Excel Import",
    "Admin Authentication",
  ],
  highlights: [
    {
      icon: Search,
      title: "Student Search Experience",
      text: "Built a student-facing interface for browsing pathways by program and academic cycle, with support for course code lookup and structured semester views.",
    },
    {
      icon: ShieldCheck,
      title: "Admin Editing Tools",
      text: "Created a protected admin workflow for editing course records, managing academic pathway information, and maintaining data more efficiently.",
    },
    {
      icon: Upload,
      title: "Excel Import Workflow",
      text: "Added an import process that takes pathway data from Excel and loads it into a structured relational database for easier querying and updates.",
    },
    {
      icon: Database,
      title: "Database-Driven Design",
      text: "Used PostgreSQL and Prisma to move pathway data away from static spreadsheets into a scalable backend structure.",
    },
  ],
  gallery: [
    {
      name: "Pathways Student Search Interface",
      title: "Student Search Interface",
      image: `${import.meta.env.BASE_URL}projects/pathwaysdb/pathways_student_search_courses.png`,
      alt: "Student search interface for Pathways Database",
      desc: "The main student-facing view where users can browse programs and pathway information through a clean academic interface.",
    },
    {
      name: "Pathways Student Program Cycle View 1",
      title: "Program Pathway View",
      image: `${import.meta.env.BASE_URL}projects/pathwaysdb/pathways_student_program_cycle_view1.png`,
      alt: "Program pathway view showing semester and course data",
      desc: "A detailed pathway table showing courses, semester placement, hours per week, and prerequisite structure for a selected program cycle.",
    },
    {
      name: "Pathways Student Program Cycle View 2",
      title: "Cycle Comparison View",
      image: `${import.meta.env.BASE_URL}projects/pathwaysdb/pathways_student_program_cycle_view2.png`,
      alt: "Cycle comparison view for academic pathways",
      desc: "Students can switch academic cycles to compare how course pathways change across different years.",
    },
    {
      name: "Pathways Student Course Lookup by Code",
      title: "Course Lookup by Code",
      image: `${import.meta.env.BASE_URL}projects/pathwaysdb/pathways_student_course_lookup_by_code.png`,
      alt: "Course lookup by code in Pathways Database",
      desc: "Search by course code to see which program pathways include that course and where it appears.",
    },
    {
      name: "Pathways Admin Manage Courses",
      title: "Admin Manage Courses",
      image: `${import.meta.env.BASE_URL}projects/pathwaysdb/pathways_admin_manage_courses.png`,
      alt: "Admin manage courses view",
      desc: "Admin users can edit course information, pathway placement, semester values, and structured academic data.",
    },
    {
      name: "Pathways Admin Add Course Form",
      title: "Admin Add Course Form",
      image: `${import.meta.env.BASE_URL}projects/pathwaysdb/pathways_admin_add_course_form.png`,
      alt: "Admin add course form",
      desc: "A dedicated form for creating new course entries and extending the academic pathway dataset.",
    },
    {
      name: "Pathways Database Query View",
      title: "Database Query View",
      image: `${import.meta.env.BASE_URL}projects/pathwaysdb/pathways_database_course_table.png`,
      alt: "PostgreSQL course table shown in pgAdmin",
      desc: "A pgAdmin view of the PostgreSQL course table that powers the student and admin sides of the application.",
    },
  ],
};

function Tag({ children }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "8px 12px",
        borderRadius: 999,
        border: `1px solid ${T.border}`,
        background: T.panelSoft,
        color: T.ink,
        fontSize: "0.9rem",
        lineHeight: 1,
      }}
    >
      {children}
    </span>
  );
}


function SectionTitle({ eyebrow, title, text }) {
  return (
    <div style={{ marginBottom: 28 }}>
      {eyebrow && (
        <div
          style={{
            color: T.pink,
            fontSize: "0.82rem",
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          {eyebrow}
        </div>
      )}
      <h2
        style={{
          color: T.ink,
          fontSize: "clamp(1.7rem, 3vw, 2.5rem)",
          lineHeight: 1.06,
          margin: 0,
        }}
      >
        {title}
      </h2>
      {text && (
        <p
          style={{
            color: T.muted,
            fontSize: "1rem",
            lineHeight: 1.8,
            maxWidth: 900,
            marginTop: 14,
            marginBottom: 0,
          }}
        >
          {text}
        </p>
      )}
    </div>
  );
}

export default function PathwaysProjectPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: `
          radial-gradient(circle at top, rgba(255,79,163,0.12), transparent 32%),
          linear-gradient(180deg, #07070B 0%, #050508 100%)
        `,
        color: T.ink,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "32px 20px 80px",
        }}
      >
        <div style={{ marginBottom: 28 }}>
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              color: T.muted,
              textDecoration: "none",
              border: `1px solid ${T.border}`,
              background: "rgba(255,255,255,0.03)",
              padding: "10px 14px",
              borderRadius: 999,
              transition: "0.2s ease",
            }}
          >
            <ArrowLeft size={16} />
            Back to Main Page
          </Link>
        </div>

        <section
          style={{
            position: "relative",
            overflow: "hidden",
            border: `1px solid ${T.border}`,
            background: `
              linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02)),
              rgba(255,255,255,0.02)
            `,
            borderRadius: 30,
            padding: "34px 24px",
            boxShadow: T.glow,
            marginBottom: 34,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "auto -120px -120px auto",
              width: 260,
              height: 260,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,79,163,0.18), transparent 65%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.15fr 0.85fr",
              gap: 24,
            }}
            className="pathways-hero-grid"
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  border: `1px solid ${T.border}`,
                  background: T.pinkSoft,
                  color: T.pink,
                  borderRadius: 999,
                  padding: "8px 14px",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  marginBottom: 18,
                }}
              >
                Full-Stack • Database • Academic Platform
              </div>

              <HeroTitle>
                {PROJECT.title}
              </HeroTitle>

              <p
                style={{
                  color: T.muted,
                  fontSize: "1.05rem",
                  lineHeight: 1.9,
                  maxWidth: 700,
                  marginTop: 20,
                  marginBottom: 24,
                }}
              >
                {PROJECT.subtitle}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 12,
                  marginBottom: 24,
                }}
              >
                {PROJECT.stack.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              

                <a
                  href="#pathways-gallery"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    textDecoration: "none",
                    color: T.ink,
                    background: "rgba(255,255,255,0.03)",
                    border: `1px solid ${T.border}`,
                    padding: "12px 18px",
                    borderRadius: 999,
                    fontWeight: 700,
                  }}
                >
                  View Gallery
                </a>
              </div>
            </div>

            <div
              style={{
                border: `1px solid ${T.border}`,
                borderRadius: 24,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                padding: 18,
                display: "flex",
                flexDirection: "column",
                gap: 14,
                minHeight: 320,
              }}
            >
              <div
                style={{
                  color: T.ink,
                  fontWeight: 700,
                  fontSize: "1rem",
                  marginBottom: 4,
                }}
              >
                Project Snapshot
              </div>

              {[
                ["Type", "Academic pathway management platform"],
                ["Users", "Students and admin users"],
                ["Database", "PostgreSQL with Prisma ORM"],
                ["Import Flow", "Excel to relational database"],
                ["Focus", "Student search, admin editing, structured academic data"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 16,
                    padding: "12px 14px",
                    borderRadius: 16,
                    border: `1px solid ${T.border}`,
                    background: "rgba(255,255,255,0.025)",
                  }}
                >
                  <span style={{ color: T.muted }}>{label}</span>
                  <span
                    style={{
                      color: T.ink,
                      textAlign: "right",
                      fontWeight: 600,
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: 18,
            marginBottom: 46,
          }}
          className="pathways-highlights-grid"
        >
          {PROJECT.highlights.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                style={{
                  border: `1px solid ${T.border}`,
                  background: T.panel,
                  borderRadius: 24,
                  padding: 22,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: 14,
                    background: T.pinkSoft,
                    color: T.pink,
                    marginBottom: 16,
                  }}
                >
                  <Icon size={22} />
                </div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "1.15rem",
                    color: T.ink,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    marginTop: 10,
                    marginBottom: 0,
                    color: T.muted,
                    lineHeight: 1.8,
                    fontSize: "0.98rem",
                  }}
                >
                  {item.text}
                </p>
              </article>
            );
          })}
        </section>

        <section style={{ marginBottom: 52 }}>
          <SectionTitle
            eyebrow="Overview"
            title="Project Breakdown"
            text="Pathways Database was built to organize academic pathway information into a more maintainable and searchable system. Instead of relying only on spreadsheets, the project introduces a structured full-stack workflow with student-facing search tools, admin maintenance screens, and a relational database backend."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 18,
            }}
            className="pathways-overview-grid"
          >
            <div
              style={{
                border: `1px solid ${T.border}`,
                background: T.panel,
                borderRadius: 24,
                padding: 24,
              }}
            >
              <h3 style={{ marginTop: 0, color: T.ink }}>What I Built</h3>
              <p style={{ color: T.muted, lineHeight: 1.85, marginBottom: 0 }}>
                I worked on a system that helps students view their pathway by program,
                academic cycle, and semester while also giving admin users the ability
                to import and maintain course records. The application supports course
                lookup, structured pathway views, admin editing workflows, and a
                PostgreSQL-backed data layer for long-term scalability.
              </p>
            </div>

            <div
              style={{
                border: `1px solid ${T.border}`,
                background: T.panel,
                borderRadius: 24,
                padding: 24,
              }}
            >
              <h3 style={{ marginTop: 0, color: T.ink }}>Why It Matters</h3>
              <p style={{ color: T.muted, lineHeight: 1.85, marginBottom: 0 }}>
                This project demonstrates full-stack development beyond a simple CRUD
                interface. It combines UI design, admin tooling, data import workflows,
                relational database thinking, and real academic use cases in one system
                built for both usability and maintainability.
              </p>
            </div>
          </div>
        </section>

        <section id="pathways-gallery" style={{ marginBottom: 56 }}>
          <SectionTitle
            eyebrow="Gallery"
            title="Project Gallery"
            text="A visual overview of the student interface, admin workflow, and database layer behind the platform."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 18,
              alignItems: "stretch",
            }}
            className="pathways-gallery-grid"
          >
            {PROJECT.gallery.map((item) => (
              <article
                key={item.name}
                style={{
                  border: `1px solid ${T.border}`,
                  background: T.panel,
                  borderRadius: 20,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                }}
              >
                <div
                  style={{
                    height: 200,
                    background: "#0A0A10",
                    borderBottom: `1px solid ${T.border}`,
                    padding: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      display: "block",
                      borderRadius: 12,
                    }}
                  />
                </div>

                <div
                  style={{
                    padding: 14,
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      alignSelf: "flex-start",
                      padding: "5px 9px",
                      borderRadius: 999,
                      border: `1px solid ${T.border}`,
                      background: "rgba(255,255,255,0.03)",
                      color: T.pink,
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.03em",
                    }}
                  >
                    {item.name}
                  </div>

                  <h3
                    style={{
                      margin: 0,
                      color: T.ink,
                      fontSize: "0.95rem",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      color: T.muted,
                      lineHeight: 1.6,
                      fontSize: "0.85rem",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 56 }}>
          <SectionTitle
            eyebrow="Technical Notes"
            title="Core Functionality"
            text="The project combines student search features, admin maintenance tools, and a database-backed architecture into one academic platform."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 18,
            }}
            className="pathways-tech-grid"
          >
            {[
              [
                "Student View",
                "Students can browse pathway information by selecting a program and academic cycle, then view courses organized by semester with hours and requisites.",
              ],
              [
                "Course Lookup",
                "The search workflow allows users to look up a course code and see where it appears across pathway versions.",
              ],
              [
                "Admin Dashboard",
                "Admin users can manage course records, edit pathway-related information, and maintain structured academic data through a dedicated interface.",
              ],
              [
                "Excel Import",
                "The app supports loading pathway data from Excel into the system, reducing reliance on manually browsing spreadsheets.",
              ],
              [
                "Database Layer",
                "PostgreSQL stores the academic data in a structured form, while Prisma helps manage schema changes and application queries.",
              ],
              [
                "Future Expansion",
                "The platform is designed to grow with features like course name search, report generation, credit-hour views, and broader cloud accessibility.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                style={{
                  border: `1px solid ${T.border}`,
                  background: T.panel,
                  borderRadius: 24,
                  padding: 22,
                }}
              >
                <h3
                  style={{
                    marginTop: 0,
                    color: T.ink,
                    fontSize: "1.04rem",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    marginBottom: 0,
                    color: T.muted,
                    lineHeight: 1.8,
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 56 }}>
          <SectionTitle
            eyebrow="Planned Improvements"
            title="Next Steps"
            text="This project is still growing, and there are several planned features to make it even more useful for both students and staff."
          />

          <div
            style={{
              border: `1px solid ${T.border}`,
              background: T.panel,
              borderRadius: 28,
              padding: 24,
            }}
          >
            <ul
              style={{
                margin: 0,
                paddingLeft: 20,
                color: T.muted,
                lineHeight: 2,
              }}
            >
              <li>Search by course name, program code, and program title</li>
              <li>Show credit hours and clearer semester totals</li>
              <li>Add print-ready reports and reporting workflows</li>
              <li>Support add and remove actions directly inside cycle editing</li>
              <li>Add popup validation and clearer admin-side error messaging</li>
              <li>Add academic year support and semester block grouping</li>
              <li>Research cloud hosting so the platform can be accessed more broadly</li>
            </ul>
          </div>
        </section>

        <section
          style={{
            border: `1px solid ${T.border}`,
            background: `
              radial-gradient(circle at top right, rgba(255,79,163,0.12), transparent 30%),
              rgba(255,255,255,0.03)
            `,
            borderRadius: 30,
            padding: "28px 22px",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              marginBottom: 14,
              fontSize: "clamp(1.6rem, 3vw, 2.3rem)",
            }}
          >
            Final Outcome
          </h2>
          <p
            style={{
              color: T.muted,
              lineHeight: 1.9,
              maxWidth: 950,
              marginTop: 0,
              marginBottom: 22,
            }}
          >
            Pathways Database showcases my ability to build a polished full-stack
            project that combines database design, student-focused search features,
            admin workflows, and structured academic data management. It reflects
            both technical problem-solving and my ability to present a real-world
            software project as a clean portfolio case study.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <Link
              to="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
                color: T.ink,
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${T.border}`,
                padding: "12px 18px",
                borderRadius: 999,
                fontWeight: 700,
              }}
            >
              <ArrowLeft size={17} />
              Back to Main Page
            </Link>
          </div>
        </section>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .pathways-gallery-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 980px) {
          .pathways-hero-grid,
          .pathways-highlights-grid,
          .pathways-overview-grid,
          .pathways-tech-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 700px) {
          .pathways-gallery-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}