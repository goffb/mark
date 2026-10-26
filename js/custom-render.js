import { getCharacter } from "./characters/index.js";
import { getPalette } from "./palettes.js";
import { escapeXml, clamp, getSite } from "./utils.js";

const BADGE_SIZE = [88, 31];
const TITLE_LIMIT = 8;
const SITE_LIMIT = 9;

export function buildBadge(state) {
  const palette = getPalette(state.paletteId);
  const character = getCharacter(state.characterId);

  const title = clamp(state.title, TITLE_LIMIT) || "HOLA!";
  const site = clamp(getSite(state.site), SITE_LIMIT) || "VISITOR";
  const body = character.render(palette);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="88" height="31" viewBox="0 0 88 31" shape-rendering="crispEdges">
  <rect x="0" y="0" width="88" height="31" fill="${palette.bg}"/>
  <rect x="0" y="0" width="88" height="2" fill="${palette.frame}"/>
  <rect x="0" y="29" width="88" height="2" fill="${palette.frame}"/>
  <rect x="0" y="0" width="2" height="31" fill="${palette.frame}"/>
  <rect x="86" y="0" width="2" height="31" fill="${palette.frame}"/>
  ${body}
  <text x="32" y="14" fill="${palette.name}" font-family="Arial, Helvetica, sans-serif" font-size="9" font-weight="900" letter-spacing="-0.3">${escapeXml(title.toUpperCase())}</text>
  <text x="32" y="23" fill="${palette.site}" font-family="Arial, Helvetica, sans-serif" font-size="8" font-weight="900" letter-spacing="-0.15">${escapeXml(site)}</text>
</svg>`;

  return { svg, size: BADGE_SIZE };
}
