import fs from "fs";
import fetch from "node-fetch";

//////////////////////////////////////////////

const nonFigmaDefinedStyleProperties = {
  borderStyles: {
    None: { value: "none" },
    Dotted: { value: "dotted" },
    Solid: { value: "solid" },
  },
  durations: {
    Instant: { value: "0s" },
    Immediate: { value: "0.15s" },
    Quick: { value: "0.25s" },
    Moderate: { value: "0.5s" },
    Slow: { value: "1s" },
  },
};

const extractStyleProperties = (layer) => {
  switch (layer.name) {
    case "colors":
      return {
        colors: Object.fromEntries(
          layer.children.map((colors) => [
            [colors.name],
            Array.from(
              colors.children.map(
                (color) =>
                  `rgba(${Math.round(
                    color.fills[0].color.r * 255
                  )}, ${Math.round(color.fills[0].color.g * 255)}, ${Math.round(
                    color.fills[0].color.b * 255
                  )}, ${Math.round(color.fills[0].color.a)})`
              )
            ),
          ])
        ),
      };

    case "space":
      return {
        space: Array.from(layer.children.map((space) => space.size.x)),
      };

    case "typography":
      return {
        fontSize: Array.from(
          [
            ...new Set(
              Array.from(layer.children.map((type) => type.style.fontSize))
            ),
          ].sort((a, b) => a - b)
        ),
        fonts: Object.fromEntries(
          layer.children.map((type) => [
            [type.name],
            `${type.style.fontFamily.replace(/\s+/g, "")}, san-serif`,
          ])
        ),
        fontWeight: Object.fromEntries(
          layer.children.map((type) => [[type.name], type.style.fontWeight])
        ),
        lineHeight: Object.fromEntries(
          layer.children.map((type) => [[type.name], type.style.lineHeightPx])
        ),
        letterSpacing: Object.fromEntries(
          layer.children.map((type) => [[type.name], type.style.letterSpacing])
        ),
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
      }),
      nonFigmaDefinedStyleProperties
    );

    console.log(theme);

    fs.writeFileSync("src/theme/figma.json", JSON.stringify(theme));

    process.exit();
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
})();
