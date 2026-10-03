import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f6f1e8",
        }}
      >
        {/* Simplified lens mark */}
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="14.5" stroke="#211c15" strokeWidth="1.5" />
          <circle cx="27" cy="14" r="2.5" fill="#c9622b" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
