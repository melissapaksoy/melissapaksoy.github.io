import { Link } from "react-router-dom";

const demoVideo = `${import.meta.env.BASE_URL}PortfolioDemo.mp4`;

const T = {
    bg: "#FAF7F2",
    ink: "#1A1613",
    muted: "rgba(26,22,19,0.72)",
    border: "rgba(20,15,10,0.10)",
    pink: "#9C7A2E",
};

export default function DemoPage() {
    return (
        <div
            className="min-h-screen px-6 py-16"
            style={{ background: T.bg, color: T.ink }}
        >
            <div className="max-w-5xl mx-auto space-y-8 text-center">

                {/* Title */}
                <h1
                    className="text-3xl md:text-4xl font-semibold"
                    style={{ color: T.pink }}
                >
                    Portfolio Demo
                </h1>

                <p className="text-sm md:text-base" style={{ color: T.muted }}>
                    A walkthrough of my projects, design approach, and development work.
                </p>

                {/* 🎥 VIDEO */}
                <div
                    className="rounded-3xl border p-4"
                    style={{
                        borderColor: T.border,
                        background:
                            "linear-gradient(135deg, rgba(184,134,11,0.08), rgba(20,15,10,0.03))",
                    }}
                >
                    <video
                        src={demoVideo}
                        controls
                        autoPlay
                        muted
                        className="w-full rounded-2xl"
                    />
                </div>

                {/* Back button */}
                <div className="pt-6">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center px-5 py-3 rounded-2xl text-sm font-medium border transition hover:-translate-y-[1px] hover:bg-black/5"
                        style={{ borderColor: T.border, color: T.ink }}
                    >
                        ← Back to Home
                    </Link>
                </div>

            </div>
        </div>
    );
}