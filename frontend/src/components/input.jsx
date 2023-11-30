import { styled } from "styled-components";


const Container = styled.label`
  display: grid;
  gap: 0.4rem;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

const TextInput = styled.input`
  background-color: ${({ theme }) => theme.contrast};
  border: 1px solid ${({ theme }) => theme.secondary};
  padding: 0.8rem;
  border-radius: 0.6em;

  transition: all 0.1s;
  &:focus {
    outline-offset: 1px;
    outline: 1px solid #006175;
  }
`;
