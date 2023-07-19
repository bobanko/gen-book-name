const months = {
  january: "land",
  february: "song",
  march: "empire",
  april: "king",
  may: "house",
  june: "book",
  july: "court",
  august: "queen",
  september: "throne",
  october: "daughter",
  november: "kingdom",
  december: "city",
};

const letters = {
  a: "nightmares",
  b: "blood",
  c: "night",
  d: "wind",
  e: "crows",
  f: "glass",
  g: "sun",
  h: "snow",
  i: "ash",
  j: "fire",
  k: "bones",
  l: "roses",
  m: "smoke",
  n: "blood",
  o: "ice",
  p: "shadow",
  q: "fox",
  r: "wolves",
  s: "dreams",
  t: "stars",
  u: "river",
  v: "fog",
  w: "moon",
  x: "sand",
  y: "ember",
  z: "ivory",

  undefined: "-",
};

function genBookName() {
  const name = inputName.value;
  const month = selectMonth.value;

  const [letter1, letter2] = name;

  bookName.textContent = `the ${months[month]} of ${letters[letter1]} and ${letters[letter2]}`;
}

inputName.addEventListener("change", genBookName);
inputName.addEventListener("input", genBookName);
selectMonth.addEventListener("change", genBookName);
