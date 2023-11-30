import { useContext, useState } from "react";
import { styled } from "styled-components";
import { Input } from "../components/input";
import { Title } from "../components/title";
import { TextButton } from "../components/text_button";
import { BackButton } from "../components/back_button";
import { Button } from "../components/button";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user_context";
import { Link } from "react-router-dom"
import { Container, Top } from "./shared_styles.jsx";
import { baseUrl } from "../services/api";
import axios from "axios";


const Login = () => {
  const navigate = useNavigate();
  // const [user, setUser] = useState(UserContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
//os objetos

  const handleSubmit = async (e) => {
    e.preventDefault();
  // parte do botão
    const body = {
      'email': email,
      'senha': senha
    };
  
    console.log(body);
  
    try {
      const response = await axios.post(`${baseUrl}/auth/login`, body);
      // ele pega a base url que é onde roda o servidor, o caminho pro back
        // ele pega esse caminho e envia as informações pro objeto
      console.log(response.data.data)
      if (response.data.success) {
       
        localStorage.setItem('id', response.data.data[0].id)
        //Armazena o token retornado na resposta no localStorage do navegador
        localStorage.setItem('token', response.data.token)
        // Armazena o ID do usuário retornado na resposta no localStorage
        

        alert('Usuário logado com sucesso');
        navigate('/')
      } else {
        alert('Não foi possível fazer login');
      }
    } catch (error) {
      console.error("Erro ao tentar fazer login", error);
      alert('Ocorreu um erro ao tentar fazer login');
    }
  }
  



  return (
    <Container>

      <Top>
        <BackButton />
        <Title>Login</Title>

     {/* <form onSubmit={handleSubmit}> */}

        <InputLogin
          title="E-mail de usuário"
          placeholder="E-mail"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}} 
          // pra quando houver uma alteração no input, vai fazer uma alteração no objeto
          />

        <InputLogin
          title="Senha"
          placeholder="Senha"
          value={senha}
          onChange={(e)=>{setSenha(e.target.value)}}
          // mesma coisa só que om senha
          />
{/* <button type="submit">enviar </button> */}
          {/* </form> */}


      </Top>
      <Bottom>
        <Button onClick={handleSubmit} >Pronto</Button>
        <RegisterButton
          onClick={() => navigate("/register")}
          content="Não tem cadastro? Clique aqui"
        />
      </Bottom>
   
    </Container>
  );
};
export default Login;

const Bottom = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 1rem;
 
`;

const RegisterButton = styled(TextButton)`
  width: fit-content;
  align-self: center;

  color: black;
  font-size: 0.8em;
  font-weight: 500;
`;

const InputLogin = styled.input`
   height: 5vh;
   width: 70vw;
   margin-left: 3vh;
   background-color: '#d3d3d3';
   border: 1px solid;
   padding: 0.8rem;
   border-radius: 0.6em;
`;
