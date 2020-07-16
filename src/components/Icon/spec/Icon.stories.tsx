import React from "react";
import Icon from "../Icon";
import page from "./Icon.mdx";
// import { text } from "@storybook/addon-knobs";
import { theme, useTheme } from "../../../theme";

export default {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    docs: { page },
  },
};

export const Standard = () => {
  // const name = text("Icon Name", "Alert");
  // const color = text("Color");
  const theme = useTheme();
  return <Icon name="alert" color={theme.color("purple", 9)} />;
};
