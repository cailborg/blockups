import fs from "fs";
import fetch from "node-fetch";

//////////////////////////////////////////////

const extractStyleProperties = (layer) => {
  switch (layer.name) {
    case "colors":
      return {
        colors: Object.fromEntries(
          layer.children.map((colors) => [
            [colors.name],
            `rgba(${Math.round(colors.fills[0].color.r * 255)}, ${Math.round(
              colors.fills[0].color.g * 255
            )}, ${Math.round(colors.fills[0].color.b * 255)}, ${Math.round(
              colors.fills[0].color.a
            )})`,
          ])
        ),
      };

    case "space":
      return {
        space: Array.from(layer.children.map((space) => space.size.x)),
      };

    default:
      return {};
  }
};

(async () => {
  try {
    const response = await fetch(
      `https://api.figma.com/v1/files/alc7Ukil6ncg1lCB2K45Ll?geometry=paths`,

      {
        headers: {
          "X-Figma-Token": "53641-50575ca2-4765-4b37-b68a-d321f48db7b3",
        },
      }
    );

    const file = await response.json();

    const theme = file.document.children[1].children.reduce(
      (accumulator, layer) => ({
        ...accumulator,
        ...extractStyleProperties(layer),
      })
    );

    console.log(theme);

    fs.writeFileSync("src/theme/figma.json", JSON.stringify(theme));

    process.exit();
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
})();
