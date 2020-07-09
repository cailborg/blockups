import React from "react";
import TestComponent from "./TestComponent";

export default {
  title: "TestComponent",
};

export const Primary = () => (
  <TestComponent theme="primary" text="im some cool text" />
);

export const Secondary = () => (
  <TestComponent theme="secondary" text="im some even cooler text" />
);
