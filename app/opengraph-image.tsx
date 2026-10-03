import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Collectif Mistral — Photographes à Marseille";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f6f1e8", // Lumière du Sud
          position: "relative",
        }}
      >
        {/* Decorative accent circle */}
        <div
          style={{
            position: "absolute",
            top: "80px",
            right: "120px",
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            border: "2px solid #c9622b",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "106px",
            right: "206px",
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            backgroundColor: "#c9622b",
            display: "flex",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <h1
            style={{
              fontSize: "96px",
              fontWeight: 500,
              color: "#211c15",
              letterSpacing: "-0.02em",
              margin: 0,
              fontFamily: "serif",
            }}
          >
            Collectif Mistral
          </h1>
          <p
            style={{
              fontSize: "32px",
              color: "#5b5142",
              margin: 0,
              maxWidth: "800px",
              textAlign: "center",
              fontWeight: 300,
            }}
          >
            Un vent nouveau souffle sur la photographie marseillaise
          </p>
          <div
            style={{
              fontSize: "18px",
              color: "#c9622b",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              marginTop: "20px",
              display: "flex",
            }}
          >
            MARSEILLE
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
