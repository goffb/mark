import cat from "./cat.js";
import fox from "./fox.js";
import ghost from "./ghost.js";
import eye from "./eye.js";
import star from "./star.js";
import skull from "./skull.js";
import heart from "./heart.js";
import mail from "./mail.js";
import onigiri from "./onigiri.js";
import torii from "./torii.js";

export const characters = [
  cat,
  fox,
  ghost,
  eye,
  star,
  skull,
  heart,
  mail,
  onigiri,
  torii,
];

export function getCharacter(id) {
  return characters.find((c) => c.id === id) || characters[0];
}