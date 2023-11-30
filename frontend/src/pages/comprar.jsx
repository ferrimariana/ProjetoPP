import { useContext, useState } from "react";
import { styled } from "styled-components";

import { Input } from "../components/input";
import { Title } from "../components/title";
import { Button } from "../components/button";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/user_context";
import axios from "axios"
import { baseUrl } from "../services/api";

import { Container, Fieldset, Top } from "./shared_styles.jsx";

function Comprar() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [pontos, setPontos] = useState("");


  return (

    <>

      <form>
        <Container>
          <Top>
            <Link to='/'>
              {/* <Container2> */}
              <img src="/chevron-left.svg" alt="chevron left svg" />
              {/* </Container2> */}
            </Link>
            <Title>Finalizar Compra</Title>
            {/* <Fieldset> */}
              <InputLogin
                placeholder="Nome"
                name="nome"
                type='text'
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
              <InputLogin placeholder="Endereço de entrega" name="endereco" type='text'
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                required />

              <InputLogin placeholder="Usar pontos" name="pontos" type='text'
                value={pontos}
                onChange={(e) => setPontos(e.target.value)}
                required />

            {/* </Fieldset> */}
          </Top>
          <Button type="submit">Comprar</Button>
        </Container>
      </form>
    </>
  );
};

export default Comprar;


const InputLogin = styled.input`
   height: 5vh;
   width: 75vw;
   margin-left: 2vh;
   background-color: '#d3d3d3';
   border: 1px solid;
   padding: 0.8rem;
   border-radius: 0.6em;
`;
