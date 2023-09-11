import { useContext, useState } from "react";
import { styled } from "styled-components";

import { Input } from "../components/input";
import { Title } from "../components/title";
import { TextButton } from "../components/text_button";
import { BackButton } from "../components/back_button";
import { Button } from "../components/button";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user_context";

import { Container, Fieldset, Top } from "./shared_styles.ts";

const Register = () => {
  const navigate = useNavigate();
  const [_, set_user] = useContext(UserContext);

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
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
        <Title>Cadastro</Title>
        <Fieldset>
          <Input title="Nome" set_state={setUsername} />
          <Input title="Email" set_state={setEmail} />
          <Input title="Senha" set_state={setPassoword} />
        </Fieldset>
      </Top>

      <Button onClick={handle_submit}>Pronto</Button>
    </Container>
  );
};
export default Register;
