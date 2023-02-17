const VALID_BLACK_KEYS = ["s", "d", "g", "h", "j"];
const VALID_WHITE_KEYS = ["z", "x", "c", "v", "b", "n", "m"];
const VALID_KEYS = [...VALID_BLACK_KEYS, ...VALID_WHITE_KEYS];
// const NOTES = ["c", "df", "d", "ef", "e", "f", "gf", "g", "af", "a", "bf", "b"];

const NOTES = [
  { name: "c", attribute: "natural" },
  { name: "df", attribute: "flat" },
  { name: "d", attribute: "natural" },
  { name: "ef", attribute: "natural" },
  { name: "e", attribute: "natural" },
  { name: "f", attribute: "natural" },
  { name: "gf", attribute: "natural" },
  { name: "g", attribute: "natural" },
  { name: "af", attribute: "natural" },
  { name: "a", attribute: "natural" },
  { name: "bf", attribute: "natural" },
  { name: "b", attribute: "natural" },
];

const NOTE_TO_KEY = {
  c: "z",
  df: "s",
  d: "x",
  ef: "d",
  e: "c",
  f: "v",
  gf: "g",
  g: "b",
  af: "h",
  a: "n",
  bf: "j",
  b: "m",
};
const KEY_TO_NOTE = {
  z: "c",
  s: "df",
  x: "d",
  d: "ef",
  c: "e",
  v: "f",
  g: "gf",
  b: "g",
  h: "af",
  n: "a",
  j: "bf",
  m: "b",
};
export { NOTES, VALID_KEYS, NOTE_TO_KEY, KEY_TO_NOTE };
