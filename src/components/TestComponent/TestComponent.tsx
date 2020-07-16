import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

interface TestComponentProps {
  text: string;
}

const StyledDiv = styled.div`
  color: ${theme.color("primary", 9)};
  background: ${theme.color("success", 3)};
  border: 1px solid black;
  padding: ${theme.space(2)};
  width: 360px;
  text-align: center;
`;

const StyledHeading = styled.h1`
  font-size: ${theme.fontSize(0)};
`;

const StyledDescription = styled.h2``;

const TestComponent: React.FC<TestComponentProps> = ({ text }) => (
  <StyledDiv data-testid="test-component">
    <StyledHeading className="heading">I'm the test component</StyledHeading>
    <StyledDescription>{text}</StyledDescription>
  </StyledDiv>
);

export default TestComponent;
