import { styled } from "styled-components";

export const TextButton = ({ content, ...props }) => (
  <Container {...props}>{content}</Container>
);

const Container = styled.button`
  font-size: 0.8em;
  font-weight: 500;

  border: none;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  cursor: pointer;

  outline: none;
  transition: all 0.3s;
  &:hover {
    border-bottom: 1px solid black;
  }
  &:focus {
    border-bottom: 1px solid green;
  }
  &:active {
    border-bottom: 1px solid teal;
  }
`;
