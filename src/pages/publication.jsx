import { useState } from "react";
import { styled } from "styled-components";

import { Header } from "../components/header";
import { Button } from "../components/button";
import { SublteFooter } from "../components/subtle_footer";

const Publication = () => {
  const [img, setImg] = useState("");

  const handle_file_input = (e) => {
    const file_reader = new FileReader();
    file_reader.addEventListener("load", () => setImg(file_reader.result));
    file_reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <Container>
      <Header title="Publicação" />
      <Main>
        <Fieldset>
          <Label htmlFor="img-btn">
            Publicar imagem
            <ImageContainer>
              <Image
                src={
                  img ??
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQIW2P4DwQACfsD/Z8fLAAAAAAASUVORK5CYII="
                }
              />
              <input
                type="file"
                id="file_input"
                style={{ display: "none" }}
                onChange={handle_file_input}
              />
              <AddImageButton id="img-btn" htmlFor="file_input">
                <svg
                  height="512px"
                  id="Layer_1"
                  // style="enable-background:new 0 0 512 512;display:block;"
                  version="1.1"
                  viewBox="0 0 512 512"
                  width="512px"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path d="M417.4,224H288V94.6c0-16.9-14.3-30.6-32-30.6c-17.7,0-32,13.7-32,30.6V224H94.6C77.7,224,64,238.3,64,256  c0,17.7,13.7,32,30.6,32H224v129.4c0,16.9,14.3,30.6,32,30.6c17.7,0,32-13.7,32-30.6V288h129.4c16.9,0,30.6-14.3,30.6-32  C448,238.3,434.3,224,417.4,224z" />
                </svg>
              </AddImageButton>
            </ImageContainer>
          </Label>
          <Label>
            Adicionar legenda
            <Subtitle />
          </Label>
        </Fieldset>
        <Button>Upload</Button>
      </Main>
      <SublteFooter />
    </Container>
  );
};
export default Publication;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
  flex: 1;
  height: 100%;
  padding: 2rem;
`;

const Fieldset = styled.fieldset`
  border: none;
  display: grid;
  gap: 3rem;
`;

const Label = styled.label`
  cursor: pointer;
  display: grid;
  gap: 0.4rem;

  color: ${({ theme }) => theme.text};
`;

const ImageContainer = styled.div`
  position: relative;

  width: 100%;
  height: 30vh;

  border-radius: 0.6rem;
  border: 1px solid ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.contrast};
`;

const Image = styled.img`
  border-radius: 0.6rem;
  height: 100%;
  width: 100%;
`;

const AddImageButton = styled.label`
  display: grid;
  place-items: center;

  position: absolute;
  right: 1rem;
  bottom: 1rem;

  padding: 0.2rem;
  border: 2px solid ${({ theme }) => theme.secondary};
  border-radius: 0.5rem;
  background-color: transparent;
  cursor: pointer;

  * {
    display: block;
    max-width: 1.5rem;
    max-height: 1.5rem;
    fill: ${({ theme }) => theme.secondary};
  }
`;

const Subtitle = styled.textarea`
  min-height: 10vh;
  padding: 0.8em;
  border-radius: 0.6rem;
  border: 1px solid ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.contrast};

  resize: none;
  box-shadow: none;

  transition: all 0.1s;
  &:focus {
    outline-offset: 1px;
    outline: 2px solid ${({ theme }) => theme.secondary};
  }
`;
