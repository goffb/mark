import { readState } from "./state.js";
import { buildBadge, paint } from "./render.js";
import { buildBadge as buildCustomBadge } from "./custom-render.js";
import { palettes } from "./palettes.js";
import { characters } from "./characters/index.js";
import { downloadSvg, copySvg, copyDataUri } from "./export.js";

const stage = document.querySelector("#stage");

const palettePicker = document.querySelector("#palette-picker");
const characterPicker = document.querySelector("#character-picker");

const titleInput = document.querySelector("#title");
const siteInput = document.querySelector("#site");
const suggestionsContainer = document.querySelector("#suggestions");

const downloadBtn = document.querySelector("#download");
const copyBtn = document.querySelector("#copy");
const copyUriBtn = document.querySelector("#copy-uri");

const zoomToggle = document.querySelector("#zoom-toggle");

const inputs = [titleInput, siteInput];

let currentSvg = "";

const suggestions = [
  { title: "human", site: "100%" },
  { title: "handmade", site: "ᯓ★" },
  { title: "vim", site: ":wq!" },
  { title: "raw html", site: "no css" },
  { title: "webring", site: "prev|next" },
  { title: "classic", site: "1999" },
  { title: "netizen", site: "\u2800" },
  { title: "internet", site: "www" },
  { title: "http", site: "200 OK" },
  { title: "svg", site: "\u2800" },
  { title: "404", site: "not found" },
  { title: "local", site: "127.0.0.1" },
  { title: "private", site: "(×_×)" },
  { title: "free", site: "for all." },
  { title: "css <3", site: "\u2800" },
  { title: "browser", site: "netscape" },
  { title: "ban", site: "forever" },
  { title: "linux", site: "gnu" },
  { title: "sudo", site: "rm -rf" },
  { title: "×meoow×", site: "\u2800" },
  { title: "xoxo", site: "gossip" },
  { title: ">:3", site: "\u2800" },
];

function renderPicker(container, items, name, defaultId) {
  for (const item of items) {
    const label = document.createElement("label");

    label.innerHTML = `
      <input
        type="radio"
        name="${name}"
        value="${item.id}"
        ${item.id === defaultId ? "checked" : ""}
      >
      <span>${item.label}</span>
    `;

    container.append(label);
  }
}

function clearSuggestionSelection() {
  document
    .querySelectorAll(".suggestion")
    .forEach((item) => item.classList.remove("is-selected"));
}

function update() {
  const state = readState(document);

  const build =
    state.style === "custom"
      ? buildCustomBadge
      : buildBadge;

  const { svg, size } = build(state);

  currentSvg = svg;
  
  const zoom = zoomToggle?.checked ? 3 : 1;
  paint(stage, svg, size, zoom);
}

function flash(btn, text) {
  const original = btn.textContent;

  btn.textContent = text;
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = original;
    btn.disabled = false;
  }, 1200);
}

function renderSuggestions() {
  if (!suggestionsContainer) return;

  for (const item of suggestions) {
    const btn = document.createElement("button");

    btn.type = "button";
    btn.className = "suggestion";
    btn.textContent = item.title;

    btn.addEventListener("click", () => {
      titleInput.value = item.title;
      titleInput.dispatchEvent(new Event("input"));

      siteInput.value = item.site;
      siteInput.dispatchEvent(new Event("input"));

      btn.classList.add("is-selected");
    });

    suggestionsContainer.append(btn);
  }
}

renderPicker(palettePicker, palettes, "palette", "brick");
renderPicker(characterPicker, characters, "character", "eye");

for (const input of inputs) {
  input.addEventListener("input", update);
}

titleInput.addEventListener("input", clearSuggestionSelection);

document.addEventListener("change", update);

downloadBtn.addEventListener("click", () => {
  const state = readState(document);
  const name = state.title || "hola!";

  downloadSvg(currentSvg, name);
  flash(downloadBtn, "saved");
});

copyBtn.addEventListener("click", async () => {
  try {
    await copySvg(currentSvg);
    flash(copyBtn, "copied");
  } catch (err) {
    flash(copyBtn, "failed");
  }
});

copyUriBtn.addEventListener("click", async () => {
  try {
    await copyDataUri(currentSvg);
    flash(copyUriBtn, "copied");
  } catch (err) {
    flash(copyUriBtn, "failed");
  }
});

const form = document.querySelector("#mark-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}

document.querySelector(".copy-space")?.addEventListener("click", async (e) => {
  try {
    await navigator.clipboard.writeText("\u2800");
    flash(e.target, "copied");
  } catch (err) {
    flash(e.target, "failed");
  }
});

zoomToggle?.addEventListener("change", update);
renderSuggestions();
update();
