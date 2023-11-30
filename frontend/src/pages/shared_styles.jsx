import { styled } from "styled-components";

export const Input = styled.input`



` 

export const Container = styled.main`
  background-color: #fff;
  min-height: 100vh;

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 2rem;
`;

export const Fieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
`;

export const Top = styled.header`
  display: grid;
  gap: 2rem;
`;
