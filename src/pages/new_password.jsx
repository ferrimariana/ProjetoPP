import { useContext, useState } from "react";

import { Input } from "../components/input";
import { Title } from "../components/title";
import { TextButton } from "../components/text_button";
import { BackButton } from "../components/back_button";
import { Button } from "../components/button";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user_context";

import { Container, Fieldset, Top } from "./shared_styles.ts";

const NewPassword = () => {
  const navigate = useNavigate();
  const [_, set_user] = useContext(UserContext);

  const [passoword, setPassoword] = useState();
  const [isValid, setIsValid] = useState(false);

  const handle_submit = (e) => {
    e.preventDefault();
    set_user(true);
    navigate("/");
  };

  return (
    <Container>
      <Top>
        <BackButton />
        <Title>Redefinir senha</Title>
        <Fieldset>
          <Input title="Senha" set_state={setPassoword} />
          <Input
            title="Confirmar senha"
            set_state={(passwd) => setIsValid(passoword === passwd)}
          />
        </Fieldset>
      </Top>

      <Button onClick={handle_submit}>Pronto</Button>
    </Container>
  );
};
export default NewPassword;
