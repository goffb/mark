import { getCharacter } from "./characters/index.js";
import { getPalette } from "./palettes.js";

export function readState(root) {
  const characterId =
    root.querySelector('input[name="character"]:checked')?.value ||
    getCharacter().id;

  const paletteId =
    root.querySelector('input[name="palette"]:checked')?.value ||
    getPalette().id;

  return {
    title:  String(root.querySelector("#title")?.value || "").trim(),
    site:   String(root.querySelector("#site")?.value || "").trim(),
    characterId,
    paletteId
  };
}