// import React from "react";

// interface SnackEmbedProps {
//   snackId: string;
//   title?: string;
//   height?: number;
// }

// export default function SnackEmbed({
//   snackId,
//   title,
//   height = 600,
// }: SnackEmbedProps) {
//   return (
//     <div style={{ marginBottom: "20px" }}>
//       {title && <h4>📱 {title}</h4>}
//       <iframe
//         src={`https://snack.expo.dev/embedded/@dimsmaul/${snackId}?theme=dark`}
//         style={{
//           width: "100%",
//           height: `${height}px`,
//           border: "1px solid #e5e7eb",
//           borderRadius: "8px",
//         }}
//         allowFullScreen
//       />
//     </div>
//   );
// }


import React from "react";

interface ExpoSnackProps {
  snackId: string;
  platform?: "android" | "ios" | "web";
  theme?: "light" | "dark";
  preview?: boolean;
  height?: number;
}

export default function ExpoSnack({
  snackId,
  platform = "android",
  theme = "dark",
  preview = true,
  height = 505,
}: ExpoSnackProps) {
  return (
    <>
      <div
        data-snack-id={snackId}
        data-snack-platform={platform}
        data-snack-preview={preview ? "true" : "false"}
        data-snack-theme={theme}
        style={{
          overflow: "hidden",
          background: theme === "dark" ? "#0C0D0E" : "#fff",
          border: "1px solid var(--color-border)",
          borderRadius: "4px",
          height: `${height}px`,
          width: "100%",
          marginBottom: "20px",
        }}
      />
      <script async src="https://snack.expo.dev/embed.js" />
    </>
  );
}
