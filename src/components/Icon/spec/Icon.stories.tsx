import React from "react";
import Icon from "../Icon";
import page from "./Icon.mdx";
import { withKnobs, text, select } from "@storybook/addon-knobs";

export default {
  title: "Components/Icon",
  decorators: [withKnobs],
  component: Icon,
  parameters: {
    docs: { page },
  },
};

// const name = text("Icon Name", "alert");
// const color = select(
//   "Color",
//   {
//     purple: "purple",
//     red: "red",
//     neutral: "neutral",
//   },
//   "purple"
// );

export const Standard = () => {
  return <Icon name="alert" color="purple" index={9} />;
};
