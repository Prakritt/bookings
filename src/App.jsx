import React from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import H1 from "./ui/Heading";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">Hello World</Heading>
            <div>
              <Heading as="h2">Check In and Out</Heading>
              <Button onClick={() => alert("Check In")}>Check In</Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert("Check Out")}
              >
                Check Out
              </Button>
            </div>
          </Row>
          <Row>
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="number" placeholder="Number of Guests" />
              <Input type="number" placeholder="Number of Guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;