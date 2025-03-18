// 1) Create a component that will represent your document

//Warning: Make sure this is a child component to VeltProvider
//and not within the same file where VeltProvider is placed.

// 2) Import the useSetDocument hook
import {
  useSetDocument,
  VeltCommentTool,
  VeltPresence,
  VeltSidebarButton,
} from "@veltdev/react";

export default function YourDocument() {
  // 3) Set a document ID
  useSetDocument("unique-document-id", { documentName: "Document Name" });

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "#ffffff",
        padding: "12px 24px",
        borderRadius: "50px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        zIndex: 1000,
      }}
    >
      <VeltCommentTool darkMode={true} />
      <VeltPresence />
      <VeltSidebarButton darkMode={true} />
    </div>
  );
}
