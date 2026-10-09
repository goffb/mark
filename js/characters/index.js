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
import mushroom from "./mushroom.js";
import key from "./key.js";

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
  mushroom,
  key,
];

export function getCharacter(id) {
  return characters.find((c) => c.id === id) || characters[0];
}