import { Link } from "react-router-dom";

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

export default function GlamUpPage() {
  return (
    <div className="min-h-screen px-6 py-16" style={{ background: T.bg, color: T.ink }}>
      <div className="max-w-5xl mx-auto space-y-10">
        <Link to="/" style={{ color: T.pink }} className="text-sm">
          ← Back to Home
        </Link>

        <Card>
          <h1 className="text-4xl font-semibold" style={{ color: T.pink }}>
            GlamUp!
          </h1>

          <p className="mt-4 text-lg leading-8" style={{ color: T.muted }}>
            GlamUp! is a cross-platform beauty services application designed to
            connect clients with beauty professionals through a modern booking experience.
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <h2 className="text-xl font-semibold">Project Overview</h2>
              <p className="mt-2" style={{ color: T.muted }}>
                This application supports user registration, authentication,
                role-based access, appointment booking, and beauty professional workflows.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Technologies Used</h2>
              <p className="mt-2" style={{ color: T.muted }}>
                React Native, Expo, Firebase Authentication, Firestore
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Key Features</h2>
              <ul className="mt-2 list-disc list-inside space-y-2" style={{ color: T.muted }}>
                <li>Role-based login and account flows</li>
                <li>Appointment booking interface</li>
                <li>Beauty professional verification workflow</li>
                <li>Firebase authentication and database integration</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold">My Role</h2>
              <p className="mt-2" style={{ color: T.muted }}>
                I contributed to the app design, authentication flow, Firebase integration,
                user role logic, and interface development.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">What I Learned</h2>
              <p className="mt-2" style={{ color: T.muted }}>
                This project strengthened my skills in mobile UI development,
                authentication handling, and designing scalable app flows for multiple user types.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}