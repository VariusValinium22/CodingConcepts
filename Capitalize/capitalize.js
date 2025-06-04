//== Capitalize the first letters ==========================
function capitalize(str) {
  return str
    .split(" ")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");
}

console.log(capitalize("can this be capitalized?"));

//== Capitalize ALL Letters =============================
function capitalizeAll(str) {
  return str
    .split(" ")
    .map((item) => item.toUpperCase())
    .join(" ");
}

console.log(capitalizeAll("can this be capitalized?"));
