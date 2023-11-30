import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export const BackButton = (props) => {
  const nav = useNavigate();

  return (
    <Container {...props} onClick={() => nav(-1)}>
      <img src="/chevron-left.svg" alt="chevron left svg" />
    </Container>
  );
};

const Container = styled.button`
  background-color: transparent;
  width: min-content;
  height: min-content;
  padding: 0;
  border: none;
  cursor: pointer;
`;
