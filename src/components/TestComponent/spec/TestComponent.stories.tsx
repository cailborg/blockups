import React from "react";
import TestComponent from "../TestComponent";
import page from "./TestComponent.mdx";

export default {
  title: "Components/TestComponent",
  component: TestComponent,
  parameters: {
    docs: { page },
  },
};

export const Primary = () => <TestComponent text="im some cool text" />;
