import { useContext, useState } from "react";
import { styled } from "styled-components";

import { Input } from "../components/input";
import { Title } from "../components/title";
import { TextButton } from "../components/text_button";
import { BackButton } from "../components/back_button";
import { Button } from "../components/button";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user_context";
import {Link} from "react-router-dom"
import { Container, Fieldset, Top } from "./shared_styles.ts";

const Login = () => {
  const navigate = useNavigate();
  const [_, set_user] = useContext(UserContext);

  const [username, setUsername] = useState();
  const [passoword, setPassoword] = useState();

  const handle_submit = (e) => {
    e.preventDefault();
    set_user(true);
    navigate("/");
  };

  return (
    <Container>
      <Top>
        <BackButton />
        <Title>Login</Title>
        <Fieldset>
          <Input title="Nome de usuário" set_state={setUsername} />
          <Input title="Senha" set_state={setPassoword} />
          <Link to='/new_password'>
          <TextButton content="Esqueceu sua senha?" />
          </Link>
        </Fieldset>
      </Top>

      <Bottom>
        <Button onClick={handle_submit}>Pronto</Button>
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
