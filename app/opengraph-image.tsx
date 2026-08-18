import { ImageResponse } from "next/og";

export const alt = "Heber Alvarez · Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", background: "#e7e5e4", padding: 58, fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", width: "100%", height: "100%", borderRadius: 36, overflow: "hidden", boxShadow: "0 28px 80px rgba(42,35,25,.22)" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "50%", background: "#fcd34d", padding: 54, color: "#451a03" }}><div style={{ fontSize: 28, letterSpacing: 4, textTransform: "uppercase" }}>Frontend Engineer</div><div style={{ marginTop: 24, fontSize: 62, fontWeight: 700 }}>Heber Alvarez</div></div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "50%", background: "#fffdf7", padding: 54, color: "#0f172a" }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 34, lineHeight: 1.35 }}>
            <div>React & TypeScript</div>
            <div>Design Systems</div>
            <div>Scalable User Experiences</div>
          </div>
          <div style={{ marginTop: 34, fontSize: 22, color: "#475569" }}>Backend Experience · AWS Certified</div>
        </div>
      </div>
    </div>,
    size,
  );
}

