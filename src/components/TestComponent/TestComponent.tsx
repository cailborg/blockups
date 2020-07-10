import React from "react";
import styled from "styled-components";
import { color } from "styled-system";

interface StyleProps {
  bg?: string;
}

interface TestComponentProps {
  text: string;
}

const StyledDiv = styled.div<StyleProps>`
  ${color}
  border: 1px solid black;
  padding: 16px;
  width: 360px;
  text-align: center;
`;

const StyledHeading = styled.h1`
  font-size: 32px;
`;

const StyledDescription = styled.h2``;

const TestComponent: React.FC<TestComponentProps> = ({ text }) => (
  <StyledDiv data-testid="test-component" color="black" bg="blue">
    <StyledHeading className="heading">I'm the test component</StyledHeading>
    <StyledDescription>{text}</StyledDescription>
  </StyledDiv>
);

export default TestComponent;
