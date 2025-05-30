import React, { useState, useEffect } from "react";
import "./MainContainer.css";

// PUBLIC_INTERFACE
function MainContainer() {
  /**
   * Main UI container for NoteEase with glassy blurred style, theme toggle,
   * and floating action button for adding notes.
   */
  const [theme, setTheme] = useState(
    () => window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((th) => (th === "dark" ? "light" : "dark"));
  };

  return (
    <div className="noteease-main-container">
      <header className="noteease-navbar glassy">
        <span className="noteease-logo">
          <span style={{ color: "#4A90E2", marginRight: 6 }}>📝</span>
          NoteEase
        </span>
        <button
          className="theme-toggle-btn"
          aria-label={
            theme === "dark"
              ? "Switch to light theme"
              : "Switch to dark theme"
          }
          onClick={handleThemeToggle}
          title="Toggle theme"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </header>
      <main className="noteease-main glassy">
        <div className="noteease-hero">
          <h1>Welcome to NoteEase</h1>
          <p className="noteease-desc">
            Your clutter-free notes app. Easily create, organize, and find your notes. Use the
            <span style={{ color: "#F5A623" }}> + </span>
            button to start!
          </p>
        </div>
        {/* NOTE: Notes UI will be integrated here */}
      </main>
      <button
        className="add-note-fab"
        aria-label="Add new note"
        title="Add a new note"
        tabIndex={0}
        style={{
          background: "linear-gradient(135deg, #4A90E2 65%, #F5A623 100%)",
          border: "none",
          color: "#fff"
        }}
      >
        +
      </button>
    </div>
  );
}

export default MainContainer;
