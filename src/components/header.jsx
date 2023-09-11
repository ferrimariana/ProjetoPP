import { styled } from "styled-components";
import { BackButton } from "./back_button";

export const Header = ({ title }) => (
  <Container>
    <BackButton />
    <Title>{title}</Title>
  </Container>
);

const Container = styled.header`
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  place-items: center;
  justify-content: flex-start;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.15);
`;

const Title = styled.h1`
  color: black;
  font-size: 1.1em;
  font-weight: 700;
  margin: 0 auto;
`;
