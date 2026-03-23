export default function HeroTitle({ children, maxWidth = "none" }) {
  return (
    <h1
      style={{
        margin: 0,
        maxWidth,
        fontSize: "clamp(42px, 7vw, 84px)",
        lineHeight: 0.94,
        letterSpacing: "-0.05em",
        fontWeight: 900,
        background: "linear-gradient(90deg, #F6F7FB 0%, #FF85C1 45%, #FF4FA3 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </h1>
  );
}