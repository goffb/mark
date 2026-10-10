import { getCharacter } from "./characters/index.js";
import { getPalette } from "./palettes.js";
import { escapeXml, clamp, getSite } from "./utils.js";

const BADGE_SIZE = [88, 31];
const TITLE_LIMIT = 8;
const SITE_LIMIT = 18;

export function buildBadge(state) {
  const palette = getPalette(state.paletteId);
  const character = getCharacter(state.characterId);

  const title = clamp(state.title, TITLE_LIMIT) || "HOLA!";
  const site = clamp(getSite(state.site), SITE_LIMIT) || "domain, name, <3";
  const body = character.render(palette);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${BADGE_SIZE[0]}" height="${BADGE_SIZE[1]}" viewBox="0 0 ${BADGE_SIZE[0]} ${BADGE_SIZE[1]}" shape-rendering="crispEdges">
  <rect x="0" y="0" width="88" height="31" fill="${palette.bg}"/>
  <rect x="0" y="0" width="88" height="2" fill="${palette.frame}"/>
  <rect x="0" y="29" width="88" height="2" fill="${palette.frame}"/>
  <rect x="0" y="0" width="2" height="31" fill="${palette.frame}"/>
  <rect x="86" y="0" width="2" height="31" fill="${palette.frame}"/>
  ${body}
  <text x="32" y="16" fill="${palette.name}" font-family="monospace" font-size="9" font-weight="900" letter-spacing="-0.3" style="text-transform: none;">${escapeXml(title.toUpperCase())}</text>
  <text x="32" y="25" fill="${palette.site}" font-family="monospace" font-size="5" letter-spacing="-0.15" style="text-transform: none;">${escapeXml(site)}</text>
</svg>`;

  return { svg, size: BADGE_SIZE };
}

export function paint(target, svg, size, zoom = 3) {
  target.innerHTML = svg;

  const el = target.querySelector("svg");
  if (!el) return;

  const [w, h] = size;

  el.setAttribute("width", w * zoom);
  el.setAttribute("height", h * zoom);
  el.style.width = `${w * zoom}px`;
  el.style.height = `${h * zoom}px`;
}
