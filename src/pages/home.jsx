import { useContext, useEffect } from "react";
import { UserContext } from "../context/user_context";
import { useNavigate, useNavigation } from "react-router-dom";
import { styled } from "styled-components";

import theme from "../theme";

import { SearchBar } from "../components/search_bar";
import { Button } from "../components/button";
import { Footer } from "../components/footer";

const Home = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();

  const [user, _] = useContext(UserContext);

  useEffect(() => {
    while (navigation === "loading") {}
    !user && navigate("/login");
  }, []);

  return (
    <>
      <Main>
        <SearchBar color={theme.primary} />
        <Post
          pfp="https://source.unsplash.com/featured/300x300"
          image_url="https://source.unsplash.com/featured/500x300"
          price={50}
          vendor_name="Laura"
        />
        <Post
          pfp="https://source.unsplash.com/featured/300x300"
          image_url="https://source.unsplash.com/featured/500x300"
          price={50}
          vendor_name="Laura"
        />
        <Post
          pfp="https://source.unsplash.com/featured/300x300"
          image_url="https://source.unsplash.com/featured/500x300"
          price={50}
          vendor_name="Laura"
        />
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

const Post = ({ pfp, vendor_name, price, image_url }) => (
  <PostContainer>
    <PostHeader>
      <img src={pfp} alt={`profile picture of ${vendor_name} at Mafer`} />
      <div>
        <h3>{vendor_name}</h3>
        <span>{`Custa ${price} pontos.`}</span>
      </div>
    </PostHeader>
    <PostImg src={image_url} />
    <PostBuyBtn>Comprar</PostBuyBtn>
  </PostContainer>
);
