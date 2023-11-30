import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user_context";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { styled } from "styled-components";

import theme from "../theme";

import { SearchBar } from "../components/search_bar";
import { Button } from "../components/button";
import { Footer } from "../components/footer";
import axios from "axios";

// Definição do componente 'Home'
const Home = () => {

  const navigation = useNavigation();
  const [posts, setPosts] = useState([]) //objetos


  const images = 'http://localhost:3008/uploads/'  // chamei minha imagem que ta nos uploud 

  const fetchData = async () => { //eu vou estar indo na api, pegar todos os posts e trazer
                                  // com ajuda do axios
    try {
      const response = await axios.get('http://localhost:3008/api/post/posts');
      setPosts(response.data.data); 
      console.log(response.data.data)
    } catch(error) {
      console.error('Error ao buscar dados:', error);
    }
  };

  useEffect(() => {
    fetchData();
}, []);
// useEffect ele faz que quando o componente for exibibido pela primeira vez
// execute o que estiver dentro do bloco {que é o fetchData}
// o [] se não houver nada no array, ele só ocorre uma vez.


const imagens = 'http://localhost:3008/uploads/';

const postList = posts.map((post)=>{ // é pra selecionar um post específico 
  return(
    <Post
    image_url={post.img_post ? `${images}${post.img_post}` : 'default-image-url'}
    texto_legenda={post.legenda_post}
    vendor_name={post.nome}
  />
  // isso é pra chamar a imagem e a legenda

  )
    })


  return (
    <>
    
      <Main>
        <SearchBar color={theme.primary} />
        {postList}
      </Main>
      <Footer />
    </>
  );
};
export default Home;

const Main = styled.main`
  display: grid;
  gap: 1rem;
  padding: 1rem;
`;

const PostContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  background-color: #fff;

  padding: 1rem;
  // border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 0.8rem;
  gap: 1rem;

  --gradient-angle: 0;
  @property --gradient-angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    inset: -1px;
    background: conic-gradient(
      from var(--gradient-angle),
      #c6a0f6,
      #eed49f,
      #8bd5ca,
      #eed49f,
      #c6a0f6
    );
    border-radius: inherit;
    animation: rotation 3s linear infinite;
  }
  &::after {
    filter: blur(1rem);
  }

  @keyframes rotation {
    0% {
      --gradient-angle: 0deg;
    }
    100% {
      --gradient-angle: 360deg;
    }
  }
`;

const PostHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
  div {
    display: grid;
  }
  div span {
    font-size: small;
  }
`;

const PostImg = styled.img`
  width: 100%;
  border-radius: 0.4rem;
  box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.35);
`;

const PostBuyBtn = styled(Button)`
  width: 100%;
`;


const Post = ({texto_legenda,vendor_name, image_url }) => (
  <PostContainer>
    <PostHeader>
      
      <div>
        <h3>{vendor_name}</h3>
        <p>{texto_legenda}</p>
      </div>

    </PostHeader>
    <PostImg src={image_url} />
    <Link to='/comprar'>
    <PostBuyBtn>Comprar</PostBuyBtn>
    </Link>
  </PostContainer>
);
