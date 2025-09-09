// Get elements
const body = document.getElementById("body");
const current = document.getElementById("currentSettings");

// Theme buttons
document.getElementById("defaultBtn").onclick = () => changeSettings("default", null, null);
document.getElementById("darkBtn").onclick = () => changeSettings("dark", null, null);
document.getElementById("lightBtn").onclick = () => changeSettings("light", null, null);

// Font buttons
document.getElementById("smallBtn").onclick = () => changeSettings(null, "small", null);
document.getElementById("mediumBtn").onclick = () => changeSettings(null, "medium", null);
document.getElementById("largeBtn").onclick = () => changeSettings(null, "large", null);

// Accent buttons
document.getElementById("warmBtn").onclick = () => changeSettings(null, null, "warm");
document.getElementById("coolBtn").onclick = () => changeSettings(null, null, "cool");
document.getElementById("neutralBtn").onclick = () => changeSettings(null, null, "neutral");

// Track settings
let theme = "default";
let font = "medium";
let accent = "neutral";

function changeSettings(newTheme, newFont, newAccent) {
  if (newTheme) theme = newTheme;
  if (newFont) font = newFont;
  if (newAccent) accent = newAccent;

  // Reset body classes
  body.className = theme + " " + font + " " + accent;

  // Update text
  current.textContent = `Current: ${theme} The
