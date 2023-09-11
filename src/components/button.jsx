import { styled } from "styled-components";

export const Button = (props) => <Container {...props} />;

const Container = styled.button`
  color: ${({ theme }) => theme.foreground};
  background-color: ${({ theme }) => theme.primary};
  cursor: pointer;

  padding: 0.8rem;
  border-radius: 0.6rem;
  border: none;

  font-size: 1.1em;
  font-weight: 700;

  transition: all 0.1s;

  &:focus,
  &:hover {
    outline-offset: 1px;
    outline: 2px solid ${({ theme }) => theme.primary};
  }
`;
