import React from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../src/theme";

addDecorator((story) => (
  <ThemeProvider theme={defaultTheme}>{story()}</ThemeProvider>
));
