const body = document.getElementById("body");
const current = document.getElementById("currentSettings");

let theme = "default";
let font = "medium";
let accent = "neutral";

function changeSettings(newTheme, newFont, newAccent) {
  if (newTheme) theme = newTheme;
  if (newFont) font = newFont;
  if (newAccent) accent = newAccent;

  body.className = theme + " " + font + " " + accent;
  current.textContent = "Current: " + cap(theme) + " Theme | " + cap(font) + " Font | " + cap(accent) + " Accent";
}

function cap(word) {
  return word[0].toUpperCase() + word.slice(1);
}

document.getElementById("defaultBtn").onclick = () => changeSettings("default", null, null);
document.getElementById("darkBtn").onclick = () => changeSettings("dark", null, null);
document.getElementById("lightBtn").onclick = () => changeSettings("light", null, null);

document.getElementById("smallBtn").onclick = () => changeSettings(null, "small", null);
document.getElementById("mediumBtn").onclick = () => changeSettings(null, "medium", null);
document.getElementById("largeBtn").onclick = () => changeSettings(null, "large", null);

document.getElementById("warmBtn").onclick = () => changeSettings(null, null, "warm");
document.getElementById("coolBtn").onclick = () => changeSettings(null, null, "cool");
document.getElementById("neutralBtn").onclick = () => changeSettings(null, null, "neutral");

// start with defaults
changeSettings(theme, font, accent);
