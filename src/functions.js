function capitalise(word) {
  const wordArray = word.split("");
  const firstLetterCapitalised = wordArray.map((letter, index) => {
    if (index === 0) {
      return (letter = letter.toUpperCase());
    } else {
      return letter;
    }
  });
  return firstLetterCapitalised.join("");
}

function projectName(project) {
  const words = project.split("-");
  const capitalisedWords = words.map((word) => capitalise(word));
  return capitalisedWords.join(" ");
}

function imageName(project) {
  const words = project.split("-");
  const capitalisedWords = words.map((word) => capitalise(word));
  return `image${capitalisedWords.join("")}`;
}

export { projectName, imageName };
