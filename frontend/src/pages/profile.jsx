import { styled } from "styled-components";
import { Button } from "../components/button";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Link } from "react-router-dom";

const Profile = ({ name = "Lívia" }) => (

  
  <Container>
    <div>
      <Header title="Perfil" />
      <Top>
        <Pfp src="https://source.unsplash.com/featured/300x300" />
        <ProfileRightSide>
          <h2>{name}</h2>
          <StatContainer>
            <Stat>
            <Link to='/edit'>
            <PostBuyBtn>Editar Perfil</PostBuyBtn>
            </Link>
            </Stat>
          </StatContainer>
        </ProfileRightSide>
      </Top>
      <PostsHeading>Disponíveis</PostsHeading>
      <Main>
        <Post src="https://source.unsplash.com/featured/300x300" price={12} />
        <Post src="https://source.unsplash.com/featured/300x300" price={12} />
        <Post src="https://source.unsplash.com/featured/300x300" price={12} />
        <Post src="https://source.unsplash.com/featured/300x300" price={12} />
        <Post src="https://source.unsplash.com/featured/300x300" price={12} />
        <Post src="https://source.unsplash.com/featured/300x300" price={12} />
      </Main>
    </div>
    <Footer />
  </Container>
);
export default Profile;

const Container = styled.div`
  position: relative;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 1rem;

  padding: 1rem;
`;

const Top = styled.header`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.15);

  h2 {
    font-size: 1.15em;
  }
`;

const Pfp = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;

const ProfileRightSide = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const StatContainer = styled.div`
  display: flex;
`;

const Stat = styled.div`
  display: block;
  text-align: center;
  padding: 0 0.5rem;

  span {
    font-size: 0.7em;
    font-weight: 500;
  }

  h3 {
    font-size: 0.8em;
    font-weight: 700;
  }
`;

const Sep = styled.span`
  width: 1px;
  background-color: black;
`;

const PostsHeading = styled.h2`
  padding: 1rem 1rem 0 1rem;
  font-size: 1em;
`;

const PostContainer = styled.div`
  text-align: center;

  img {
    width: 6rem;
    height: 6rem;
    border-radius: 1rem;
  }

  span {
    color: ${({ theme }) => theme.text};
    font-size: 0.8em;

    display: block;
  }
`;

const PostBuyBtn = styled(Button)`
  width: 100%;
  height: 90%;
`;

const Post = ({ src, price }) => (
  <PostContainer>
    <img src={src} />
    <span>{price} pontos</span>
  </PostContainer>
);
