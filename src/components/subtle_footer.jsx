import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export const SublteFooter = () => {
  const nav = useNavigate();
  return (
    <Container>
      <Button onClick={() => nav("/")}>
        <img src="home.svg" alt="home" />
      </Button>
    </Container>
  );
};

const Container = styled.footer`
  position: sticky;
  bottom: 0;

  background-color: white;
  width: 100%;
  padding: 1rem;
`;

const Button = styled.button`
  display: block;
  border: none;
  cursor: pointer;
  background-color: transparent;

  img {
    display: block;
  }
`;
