import { getCharacter } from "./characters/index.js";
import { getPalette } from "./palettes.js";

export function readState(root) {
  const characterId =
    root.querySelector('input[name="character"]:checked')?.value ||
    getCharacter().id;

  const paletteId =
    root.querySelector('input[name="palette"]:checked')?.value ||
    getPalette().id;

  const style =
    root.querySelector('input[name="style"]:checked')?.value ||
    "classic";

  let customPalette = null;
  if (paletteId === "custom") {
    const fallback = getPalette("custom");
    customPalette = {
      id: "custom",
      label: "+ make your",
      bg:    root.querySelector("#cp-bg")?.value    || fallback.bg,
      frame: root.querySelector("#cp-frame")?.value || fallback.frame,
      box:   root.querySelector("#cp-box")?.value   || fallback.box,
      main:  root.querySelector("#cp-main")?.value  || fallback.main,
      shade: root.querySelector("#cp-shade")?.value || fallback.shade,
      light: root.querySelector("#cp-light")?.value || fallback.light,
      name:  root.querySelector("#cp-name")?.value  || fallback.name,
      site:  root.querySelector("#cp-site")?.value  || fallback.site,
      dark:  root.querySelector("#cp-dark")?.value  || fallback.dark,
    };
  }

  return {
    title: String(root.querySelector("#title")?.value || "").trim(),
    site: String(root.querySelector("#site")?.value || "").trim(),
    characterId,
    paletteId,
    customPalette,
    style
  };
}