import { useContext, useState } from "react";
import { styled } from "styled-components";

import { Input } from "../components/input";
import { Title } from "../components/title";
import { TextButton } from "../components/text_button";
import { BackButton } from "../components/back_button";
import { Button } from "../components/button";

import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user_context";
import axios from "axios"
import { baseUrl } from "../services/api";

import { Container, Fieldset, Top } from "./shared_styles.jsx";

function Register() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
 // esses são os meus objetos
  const handleSubmit = async (e) => {
    e.preventDefault();
  // o handlesubmit ele é pro botão, quando tu apertar ele vai enviar
    const body ={
      'nome': nome,
      'email': email,
      'senha': senha
    }
     // esses são os meus objetos
      console.log(body)

      const response = await axios.post(`${baseUrl}/user/create`, body);
        // ele pega a base url que é onde roda o servidor, o caminho pro back
        // ele pega esse caminho e envia as informações pro objeto
      if (response.data.success) {
        alert('Usuario cadastrado')
        navigate('/login') // vai me levar para o login
      } else {
        alert('Não foi possivel cadastrar');
      } // são apenas informações 

    }
  // }


  return (

    <form onSubmit={handleSubmit}>
      <div>
        <Top>
        
        <Title>Cadastro</Title>
      
          {/* <Fieldset> */}
            <InputRegister

            
              onChange={(e)=>{setNome(e.target.value)}}
             // onchange no input ele faz com que os valores eles sejam substituidos nos objetos
             // conforme a pessoa vai preenchendo os inputs vai substituindo os valores
              value={nome}
              placeholder={"nome"}
              required
              />

            <InputRegister
            
            value={email}
            placeholder={"E-mail"}
            onChange={(e)=>{setEmail(e.target.value)}}
            required 
            />

            <InputRegister
            placeholder={"Senha"}
      
            type='password'
              value={senha}
              onChange={(e)=>{setSenha(e.target.value)}}
              required
               />
       
          {/* </Fieldset> */}
        </Top>

      </div>

      <Bottom>
        <Button type="submit">Pronto</Button>

        <LoginButton
          onClick={() => navigate("/login")}
          content="Já tem cadastro? Clique aqui"
        />
      </Bottom>

    </form>
  );
};
export default Register;


const InputRegister = styled.input`
   height: 5vh;
   width: 75vw;
   margin-left: 6vh;
   background-color: '#d3d3d3';
   border: 1px solid;
   padding: 0.8rem;
   border-radius: 0.6em;
`;

const Bottom = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top:50vh;
  gap: 1rem;
  width: 80%;
  margin-left: 10%;
 
`;

const LoginButton = styled(TextButton)`
  width: fit-content;
  align-self: center;

  color: black;
  font-size: 0.8em;
  font-weight: 500;
`;