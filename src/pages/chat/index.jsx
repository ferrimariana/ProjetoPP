import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import theme from "../../theme";
import { Header } from "../../components/header";
import { SearchBar } from "../../components/search_bar";
import { SublteFooter } from "../../components/subtle_footer";
import { format_date } from "../../utils";

const Chat = () => {
  return (
    <Container>
      <Header title="Chat" />
      <Main>
        <SearchBar color={theme.secondary} />
        <SubTitle>Chat frequentes</SubTitle>
        <FrequentContactContainer>
          <FrequentContact
            $src="https://source.unsplash.com/featured/300x300"
            $online
          />
          <FrequentContact
            $src="https://source.unsplash.com/featured/300x300"
            $online
          />
          <FrequentContact
            $src="https://source.unsplash.com/featured/300x300"
            $online
          />
          <FrequentContact
            $src="https://source.unsplash.com/featured/300x300"
            $online
          />
          <FrequentContact $src="https://source.unsplash.com/featured/300x300" />
        </FrequentContactContainer>
        <SubTitle>Todas as mensagens</SubTitle>
        <Contact
          name="Vitória"
          last_message="Estou interessada nessa saia"
          last_message_timestamp={new Date()}
          message_count={0}
        />
        <Contact
          name="Cintia"
          last_message="Estou interessada nessa saia"
          last_message_timestamp={new Date()}
          message_count={3}
        />
        <Contact
          name="Roberta"
          last_message="Estou interessada nessa saia"
          last_message_timestamp={new Date()}
          message_count={3}
        />
        <Contact
          name="Carlos"
          last_message="Estou interessada nessa saia"
          last_message_timestamp={new Date()}
          message_count={3}
        />
        <Contact
          name="João Alberto"
          last_message="Estou interessada nessa saia"
          last_message_timestamp={new Date()}
          message_count={3}
        />
        <Contact
          name="Adolfo"
          last_message="Estou interessada nessa saia"
          last_message_timestamp={new Date()}
          message_count={3}
        />
        <Contact
          name="Ricarda"
          last_message="Estou interessada nessa saia"
          last_message_timestamp={new Date()}
          message_count={3}
        />
        <Contact
          name="Amanda"
          last_message="Estou interessada nessa saia"
          last_message_timestamp={new Date()}
          message_count={3}
        />
        <SublteFooter />
      </Main>
    </Container>
  );
};
export default Chat;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;

  gap: 1rem;
  padding: 1rem;
  height: 100%;
`;

const SubTitle = styled.h3`
  font-size: 0.8rem;
  font-weight: 500;
`;

const FrequentContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FrequentContact = styled.span`
  position: relative;
  width: 3rem;
  height: 3rem;
  border-radius: 0.3rem;

  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${({ $src }) => $src});

  &::before {
    z-index: 10;
    content: "";
    padding: 0.4rem;
    border-radius: 50%;
    background-color: ${({ $online }) => ($online ? "green" : "red")};

    position: absolute;
    right: -0.2rem;
    bottom: -0.2rem;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.5rem;
`;

const ContactPfp = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.primary};
`;

const ContactMiddle = styled.div`
  flex: 1;
  display: grid;

  h4 {
    font-size: 0.9em;
    font-weight: 700;
  }

  p {
    font-size: 0.75em;
    color: ${({ theme, $message_count }) =>
      $message_count === 0 ? "black" : theme.secondary};
  }
`;

const ContactEnd = styled.div`
  display: grid;
  place-items: center;

  :first-child {
    font-size: 0.8em;
    color: ${({ theme }) => theme.text};
  }

  :nth-child(2) {
    display: grid;
    place-items: center;
    overflow-x: hidden;

    border-radius: 50%;
    width: 1.2rem;
    height: 1.2rem;
    background-color: ${({ theme, $message_count }) =>
      $message_count === 0 ? "transparent" : theme.primary};

    color: white;
    font-size: 0.65em;
  }
`;

const Contact = ({
  name,
  last_message,
  last_message_timestamp,
  message_count,
}) => {
  const nav = useNavigate();

  return (
    <ContactContainer onClick={() => nav(`/chat/${name}`)}>
      <ContactPfp src="https://source.unsplash.com/featured/300x300" />
      <ContactMiddle $message_count={message_count}>
        <h4>{name}</h4>
        <p>{last_message}</p>
      </ContactMiddle>
      <ContactEnd $message_count={message_count}>
        <span>{format_date(last_message_timestamp)}</span>
        <span>
          {message_count === 0 ? (
            <svg
              width="8"
              height="6"
              viewBox="0 0 8 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.74629 0.204765C7.89079 0.341374 7.97513 0.529779 7.98076 0.728554C7.98638 0.927329 7.91284 1.1202 7.77629 1.26476L3.52629 5.76477C3.45741 5.83757 3.37464 5.89582 3.28286 5.9361C3.19109 5.97637 3.09217 5.99784 2.99196 5.99923C2.89175 6.00063 2.79227 5.98193 2.69941 5.94424C2.60654 5.90654 2.52218 5.85062 2.45129 5.77976L0.201292 3.52977C0.0688118 3.38759 -0.00331137 3.19954 0.000116847 3.00524C0.00354506 2.81094 0.0822571 2.62556 0.21967 2.48814C0.357083 2.35073 0.542468 2.27202 0.736769 2.26859C0.93107 2.26516 1.11912 2.33728 1.26129 2.46976L2.96629 4.17376L6.68629 0.234765C6.8229 0.0902619 7.01131 0.00592625 7.21008 0.000300543C7.40885 -0.00532516 7.60173 0.0682197 7.74629 0.204765Z"
                fill="black"
              />
            </svg>
          ) : (
            message_count
          )}
        </span>
      </ContactEnd>
    </ContactContainer>
  );
};
