import React from "react";
// import styled from "styled-components";
import data from "./iconsConfig.json";
// import { theme } from "../../theme";

interface IconProps {
  name: keyof typeof data;
  color?: string;
}

const getIconConfig = (name: keyof typeof data) => {
  if (data.hasOwnProperty(name)) {
    return data[name];
  }
};

const Icon: React.FC<IconProps> = ({ name, color }) => {
  const values = getIconConfig(name) as { drawn: string; title: string };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      role="img"
    >
      <title>{values.title}</title>
      <path d={values.drawn} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
};

export default Icon;
