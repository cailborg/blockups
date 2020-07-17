import React from "react";
import Icon from "../Icon";
import page from "./Icon.mdx";

export default {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    docs: { page },
  },
};

export const Standard = () => {
  return <Icon name="alert" color="purple" index={9} />;
};
