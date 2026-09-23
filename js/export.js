import { slugify } from "./utils.js";

export function downloadSvg(svg, name) {
  const blob = new Blob([svg], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");

  a.href = url;
  a.download = `${slugify(name)}.svg`;
  document.body.append(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export async function copySvg(svg) {
  await navigator.clipboard.writeText(svg);
}

export async function copyDataUri(svg) {
  const encoded = encodeURIComponent(svg)
    .replace(/'/g, "%27")
    .replace(/"/g, "%22");
  const uri = `data:image/svg+xml,${encoded}`;
  await navigator.clipboard.writeText(uri);
}