// Importações necessárias para o funcionamento do componente
import { useState } from "react";
import { styled } from "styled-components";
import { Header } from "../components/header";
import { Button } from "../components/button";
import { SublteFooter } from "../components/subtle_footer";
import { baseUrl } from "../services/api";
import axios from "axios";
 

// Componente funcional 'Publication'
const Publication = (props) => {
  const [legenda, setTitulo] = useState (""); // Estado para armazenar a legenda
  const [selectedFile, setSelectedFile] = useState(""); // Estado para armazenar o arquivo selecionado
  const [image, setImg] = useState(""); // Estado para armazenar a imagem
  const [file, setFile] = useState(""); // Estado para armazenar o arquivo em formato base64

  // Função para converter arquivo em base64 que é um método de 
  // codificação usado para converter dados binários (como imagens)
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file); 
      fileReader.onload = () => {
        resolve(fileReader.result);  // Quando terminar, guarda o resultado
      };
      fileReader.onerror = (error) => {
        reject(error);  // Se der erro, mostra o erro
      };
    });
  };
 // Quando o usuário seleciona um arquivo para subir
  const handleFileUpload = async(event) => {
    const content = event.target.files[0]; // Pega o arquivo que o usuário escolheu
    setImg(content); // Guarda a imagem no estado
    const base64 = await convertToBase64(content); // Transforma a imagem para o formato base64
    setSelectedFile(content); // Guarda o arquivo escolhido no estado
    setFile(base64); // Guarda o arquivo convertido no estado
    console.log(content); // Mostra o arquivo no console 
  }
 // Quando o usuário clica para enviar a publicação
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que a página recarregue
   
    let formData = new FormData(); // Cria um formulário
    formData.append('user_id', localStorage.getItem('id')) // Adiciona o ID do usuário ao formulário
    formData.append('img_post', image) // Adiciona a imagem ao formulário
    formData.append('legenda_post', legenda) // Adiciona a legenda ao formulário

   
     // Envia o formulário para o servidor
    const response = await axios.post(`${baseUrl}/post/post/create`, formData);
     // ele pega a base url que é onde roda o servidor, o caminho pro back
        // ele pega esse caminho e envia as informações pro objeto
   
    // Verifica a resposta do servidor
    if (response.data.success) {
      alert('Deu certo');
    } else {
      alert('Não deu');
    }
  }
 
  return (
    <Container>
      <Header title="Publicação" />
      <Main>
        <Fieldset>
          <Label htmlFor="img-btn">
            Publicar imagem
            <ImageContainer>
              
              <input
                type="file"
                id="file_input"
                display="none"
                onChange={handleFileUpload} // quando o input for alterado, ele vai modificar 
                                            // no meu objeto FIMMM....
              />                            
              
             




              <AddImageButton id="img-btn" htmlFor="file_input">
                <svg
                  height="512px"
                  id="Layer_1"
            
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
            <Subtitle
            type="text"
            onChange={(e)=>{setTitulo(e.target.value)}}
            />
          </Label>
        </Fieldset>
        <Button onClick={handleSubmit}>Upload</Button>
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
 