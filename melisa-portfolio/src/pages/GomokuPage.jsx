import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Github,
  Brain,
  Gamepad2,
  Code2,
  ShieldAlert,
} from "lucide-react";
import HeroTitle from "../components/HeroTitle";


const T = {
  bg: "#FAF7F2",
  panel: "rgba(20,15,10,0.04)",
  panelSoft: "rgba(20,15,10,0.03)",
  ink: "#1A1613",
  muted: "rgba(26,22,19,0.72)",
  border: "rgba(20,15,10,0.10)",
  pink: "#9C7A2E",
  pinkSoft: "rgba(184,134,11,0.16)",
  glow: "0 0 40px rgba(184,134,11,0.18)",
};

const PROJECT = {
  title: "Gomoku Game with AI",
  subtitle:
    "A Java console-based strategy game featuring single-player and multiplayer modes, complete win validation, and an AI opponent powered by Minimax with Alpha-Beta pruning.",
  github: "https://github.com/melissapaksoy/gomoku",
  stack: [
    "Java",
    "Object-Oriented Programming",
    "Minimax Algorithm",
    "Alpha-Beta Pruning",
    "Console Application",
    "Game Logic Design",
  ],
  highlights: [
    {
      icon: Brain,
      title: "AI Opponent",
      text: "Implemented a computer opponent using Minimax with Alpha-Beta pruning to evaluate board states and choose stronger moves efficiently.",
    },
    {
      icon: Gamepad2,
      title: "Game Mechanics",
      text: "Built complete Gomoku gameplay including move validation, player turns, board rendering, win detection, and draw checking.",
    },
    {
      icon: Code2,
      title: "OOP Design",
      text: "Structured the application using separate classes for the board, game flow, players, rule checking, and AI behavior.",
    },
    {
      icon: ShieldAlert,
      title: "Error Handling",
      text: "Added input validation for invalid symbols, non-numeric coordinates, out-of-range values, and illegal move attempts.",
    },
  ],
  gallery: [
    {
      name: "Gomoku Start Screen",
      title: "Game Start",
      image: `${import.meta.env.BASE_URL}projects/gomoku/gomoku_start_screen.png`,
      alt: "Gomoku start screen showing player setup and initial board",
      desc: "The game begins with mode selection, player name input, symbol selection, and the initial 9×9 board layout.",
    },
    {
      name: "Gomoku Gameplay Turn",
      title: "Gameplay Turn",
      image: `${import.meta.env.BASE_URL}projects/gomoku/gomoku_gameplay_turn.png`,
      alt: "Gomoku gameplay screenshot showing player turn and AI response",
      desc: "A live turn sequence showing board updates, player interaction, and AI move evaluation during gameplay.",
    },
    {
      name: "Gomoku Win Screen",
      title: "Winning State",
      image: `${import.meta.env.BASE_URL}projects/gomoku/gomoku_win_screen.png`,
      alt: "Gomoku winning state screenshot",
      desc: "A completed board state showing a successful five-in-a-row sequence and the final winner announcement.",
    },
    {
      name: "Gomoku Error Handling",
      title: "Error Handling",
      image: `${import.meta.env.BASE_URL}projects/gomoku/gomoku_error_handling.png`,
      alt: "Gomoku input validation and error handling screenshot",
      desc: "Examples of validation for invalid symbol choices, non-numeric input, out-of-range values, and invalid moves.",
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

export default function GomokuProjectPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: `
          radial-gradient(circle at top, rgba(184,134,11,0.12), transparent 32%),
          linear-gradient(180deg, #F3EEE4 0%, #FAF7F2 100%)
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
              background: "rgba(20,15,10,0.03)",
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
              linear-gradient(135deg, rgba(20,15,10,0.05), rgba(20,15,10,0.02)),
              rgba(20,15,10,0.02)
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
                "radial-gradient(circle, rgba(184,134,11,0.18), transparent 65%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.15fr 0.85fr",
              gap: 24,
            }}
            className="gomoku-hero-grid"
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
                Java • AI • Strategy Game
              </div>

              <HeroTitle>{PROJECT.title}</HeroTitle>


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
                  href={PROJECT.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    textDecoration: "none",
                    color: "#1A1613",
                    background: T.pink,
                    border: `1px solid ${T.pink}`,
                    padding: "12px 18px",
                    borderRadius: 999,
                    fontWeight: 700,
                    boxShadow: "0 10px 30px rgba(184,134,11,0.28)",
                  }}
                >
                  <Github size={17} />
                  View Repository
                </a>

                <a
                  href="#gomoku-gallery"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    textDecoration: "none",
                    color: T.ink,
                    background: "rgba(20,15,10,0.03)",
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
                  "linear-gradient(180deg, rgba(20,15,10,0.05), rgba(20,15,10,0.02))",
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
                ["Type", "Console-based Java game"],
                ["Game Mode", "Single-player and two-player"],
                ["AI Technique", "Minimax with Alpha-Beta pruning"],
                ["Board Size", "9×9"],
                ["Focus", "Game logic, algorithms, and OOP design"],
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
                    background: "rgba(20,15,10,0.025)",
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
          className="gomoku-highlights-grid"
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
            text="This project was built as a Java implementation of Gomoku, a strategy board game where players aim to place five symbols in a row. I focused on creating a well-structured object-oriented design while implementing core gameplay systems such as board rendering, move validation, winner detection, and AI decision-making."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 18,
            }}
            className="gomoku-overview-grid"
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
                I developed a console-based game that supports both player-vs-player
                and player-vs-AI interaction. The system handles turn switching,
                move validation, winner detection in all directions, and board-full
                draw logic. I also designed a dedicated AI class to evaluate game
                states and choose strategic moves.
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
                This project demonstrates algorithmic thinking, object-oriented
                programming, and user input handling in Java. It also reflects my
                ability to build complete logical systems, organize functionality
                into clean classes, and implement AI concepts in a practical
                application.
              </p>
            </div>
          </div>
        </section>

        <section id="gomoku-gallery" style={{ marginBottom: 56 }}>
          <SectionTitle
            eyebrow="Gallery"
            title="Project Gallery"
            text="A curated visual overview of the game's interface, flow, and validation handling."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 22,
              alignItems: "stretch",
            }}
            className="gomoku-gallery-grid"
          >
            {PROJECT.gallery.map((item) => (
              <article
                key={item.name}
                style={{
                  border: `1px solid ${T.border}`,
                  background: T.panel,
                  borderRadius: 26,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: 560,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
                }}
              >
                <div
                  style={{
                    height: 360,
                    background: "#0A0A10",
                    borderBottom: `1px solid ${T.border}`,
                    padding: 16,
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
                      borderRadius: 16,
                    }}
                  />
                </div>

                <div
                  style={{
                    padding: 20,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    flexGrow: 1,
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      alignSelf: "flex-start",
                      padding: "6px 10px",
                      borderRadius: 999,
                      border: `1px solid ${T.border}`,
                      background: "rgba(20,15,10,0.03)",
                      color: T.pink,
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {item.name}
                  </div>

                  <h3
                    style={{
                      margin: 0,
                      color: T.ink,
                      fontSize: "1.08rem",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      color: T.muted,
                      lineHeight: 1.8,
                      fontSize: "0.96rem",
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
            text="The application was organized into separate Java classes so each part of the game had a clear responsibility."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 18,
            }}
            className="gomoku-tech-grid"
          >
            {[
              [
                "Board Management",
                "The board is initialized as a 9×9 structure and displayed in a readable console format with row and column coordinates.",
              ],
              [
                "Game Logic",
                "The game checks for five consecutive matching symbols across horizontal, vertical, and diagonal directions after each move.",
              ],
              [
                "Player Handling",
                "The player system manages name input, symbol selection, turn flow, and move entry.",
              ],
              [
                "AI Strategy",
                "The AI evaluates potential future states using Minimax and improves search efficiency using Alpha-Beta pruning.",
              ],
              [
                "Validation",
                "Input checks prevent invalid symbols, non-numeric values, out-of-range coordinates, and illegal placements.",
              ],
              [
                "Application Flow",
                "A central game controller manages setup, turn progression, board updates, AI turns, and end-of-game results.",
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
            eyebrow="Reflection"
            title="What I Learned"
            text="This project helped strengthen both my technical and design thinking as a developer."
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
              <li>How to structure a Java project using object-oriented principles</li>
              <li>How to translate game rules into reusable logic and validation methods</li>
              <li>
                How AI decision-making can be applied using Minimax and Alpha-Beta
                pruning
              </li>
              <li>How error handling improves reliability and user experience</li>
              <li>
                How to present a technical project as a polished visual case study
              </li>
            </ul>
          </div>
        </section>

        <section
          style={{
            border: `1px solid ${T.border}`,
            background: `
              radial-gradient(circle at top right, rgba(184,134,11,0.12), transparent 30%),
              rgba(20,15,10,0.03)
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
            Gomoku with AI showcases my ability to build a complete Java
            application that combines game mechanics, algorithmic problem-solving,
            clean class design, and user-focused validation. It reflects both my
            technical growth and my ability to turn logic-heavy work into a project
            that can be clearly communicated and presented in a portfolio.
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
                background: "rgba(20,15,10,0.03)",
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
        @media (max-width: 980px) {
          .gomoku-hero-grid,
          .gomoku-highlights-grid,
          .gomoku-overview-grid,
          .gomoku-gallery-grid,
          .gomoku-tech-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 640px) {
          .gomoku-gallery-grid article {
            min-height: unset !important;
          }
        }
      `}</style>
    </main>
  );
}