import { readState } from "./state.js";
import { buildBadge, paint } from "./render.js";
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

const inputs = [titleInput, siteInput];

let currentSvg = "";

const suggestions = [
  "human",
  "handmade",
  "webhead",
  "raw html",
  "webring",
  "old web",
  "netizen",
  "internet",
  "bitmap",
  "404",
  "private",
  "free",
  "css <3",
  "browser",
  "ban",
  "linux",
  "sudo",
  "×meoow×",
  "xoxo",  
  ">:3",
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
  const { svg, size } = buildBadge(state);

  currentSvg = svg;
  paint(stage, svg, size, 3);
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

  for (const text of suggestions) {
    const btn = document.createElement("button");

    btn.type = "button";
    btn.className = "suggestion";
    btn.textContent = text;

    btn.addEventListener("click", () => {
      titleInput.value = text;
      titleInput.dispatchEvent(new Event("input"));

      btn.classList.add("is-selected");
    });

    suggestionsContainer.append(btn);
  }
}

renderPicker(palettePicker, palettes, "palette", "blue");
renderPicker(characterPicker, characters, "character", "torii");

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

renderSuggestions();
update();
