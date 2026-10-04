export const palettes = [
  {
    id: "teal",
    label: "teal",
    bg:      "#0f1a1f",
    frame:   "#4ecdc4",
    box:     "#1a2a30",
    main:    "#4ecdc4",
    shade:   "#2a9d8f",
    light:   "#d4fffa",
    name:    "#d4fffa",
    site:    "#6b8a8f",
    dark:    "#0f1a1f"
  },
  {
    id: "pink",
    label: "pink",
    bg:      "#0d0d0d",
    frame:   "#ff6f9f",
    box:     "#1f1a1f",
    main:    "#ff6f9f",
    shade:   "#c94f7a",
    light:   "#ffd4e4",
    name:    "#ffd4e4",
    site:    "#8b5a72",
    dark:    "#0d0d0d"
  },
  {
    id: "green",
    label: "green",
    bg:      "#f5f1e8",
    frame:   "#2f6f4e",
    box:     "#e8e0c8",
    main:    "#2f6f4e",
    shade:   "#1e4a34",
    light:   "#d4fffa",
    name:    "#2f6f4e",
    site:    "#6b7a6e",
    dark:    "#f5f1e8"
  },
  {
    id: "yellow",
    label: "yellow",
    bg:      "#fff8c4", 
    frame:   "#d4a000",  
    box:     "#f0e8a0", 
    main:    "#d4a000",  
    shade:   "#a37800",  
    light:   "#ffffff",  
    name:    "#1a1a0a",  
    site:    "#8a8a4a",  
    dark:    "#fff8c4"
  },
  {
    id: "orange",
    label: "orange",
    bg:      "#140f0a",
    frame:   "#ff7a1a",
    box:     "#241811",
    main:    "#ff7a1a",
    shade:   "#c4551a",
    light:   "#ffd4a8",
    name:    "#ffb066",
    site:    "#a07050",
    dark:    "#140f0a"
  }, 
  {
    id: "purple",
    label: "purple",
    bg:      "#faf7ff",
    frame:   "#6d5dfc",
    box:     "#ece5ff",
    main:    "#6d5dfc",
    shade:   "#4a3ec4",
    light:   "#e0d8ff",
    name:    "#3d2fa8",
    site:    "#7a72a8",
    dark:    "#faf7ff"
  },
  {
    id: "blue",
    label: "blue",
    bg:      "#2a4a9a",
    frame:   "#c4dcff",
    box:     "#1a3a8a",
    main:    "#c4dcff",
    shade:   "#7aaaff",
    light:   "#ffffff",
    name:    "#ffffff",
    site:    "#c4dcff",
    dark:    "#2a4a9a"
  },
  {
    id: "red",
    label: "red",
    bg:      "#ffffff",
    frame:   "#e63946",
    box:     "#f5e8e9",
    main:    "#e63946",
    shade:   "#a82632",
    light:   "#ffd4d8",
    name:    "#1a1a1a",
    site:    "#7a5a5e",
    dark:    "#ffffff"
  },
  {
    id: "slate",
    label: "slate",
    bg:      "#1c1d22",
    frame:   "#cbd5e1",
    box:     "#272932",
    main:    "#94a3b8",
    shade:   "#475569",
    light:   "#f1f5f9",
    name:    "#ffffff",
    site:    "#64748b",
    dark:    "#1c1d22"
  },
  {
    id: "gray",
    label: "gray",
    bg:      "#c0c0c0",
    frame:   "#d1d1d1",
    box:     "#d0d0d0",
    main:    "#505050",
    shade:   "#909090",
    light:   "#f0f0f0",
    name:    "#202020",
    site:    "#505050",
    dark:    "#c0c0c0"
  }
];

export function getPalette(id) {
  return palettes.find((p) => p.id === id) || palettes[0];
}