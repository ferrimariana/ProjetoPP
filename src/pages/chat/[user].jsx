import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";

import { Header } from "../../components/header";
import { format_date } from "../../utils";

const _messages = [
  {
    outsider: false,
    content: "AAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    img: false,
    timestamp: new Date("8/28/2023"),
  },
  {
    outsider: false,
    content: "https://source.unsplash.com/featured/300x300",
    img: true,
    timestamp: new Date("8/29/2023"),
  },
  {
    outsider: false,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, rem sequi. Quidem, aliquid officia sequi, hic necessitatibus voluptates ut",
    img: false,
    timestamp: new Date(),
  },
  {
    outsider: true,
    content:
      "quaerat repellat natus et ipsa. Voluptatibus aspernatur consequatur pariatur culpa. Eos.",
    img: false,
    timestamp: new Date(),
  },
  {
    outsider: true,
    content: "https://source.unsplash.com/featured/300x300",
    img: true,
    timestamp: new Date(),
  },
  {
    outsider: true,
    content: "quaerat repellat natus et ipsa.",
    img: false,
    timestamp: new Date(),
  },
];

const ChitChat = () => {
  const nav = useNavigate();
  const { user } = useParams();

  const [messages, setMessages] = useState(_messages);
  const [message, setMessage] = useState("");

  const now = new Date();
  const now_str = new Date().toLocaleDateString().split("T")[0];
  const yesterday_str = new Date(now.getTime() - 86400000)
    .toLocaleDateString()
    .split("T")[0];

  const messages_map = new Map();
  for (const message of messages) {
    const date_str = message.timestamp.toLocaleDateString().split("T")[0];
    const entry = messages_map.get(date_str);

    if (entry) {
      entry.push(message);
      messages_map.set(date_str, entry);
    } else messages_map.set(date_str, [message]);
  }

  const handle_click = () => {
    if (message !== "") {
      setMessages([
        ...messages,
        {
          content: message,
          outsider: false,
          img: false,
          timestamp: new Date(),
        },
      ]);
      setMessage("");
    }
  };

  return (
    <Container>
      <Header title={user} />
      <Main>
        {[...messages_map].map(([key, value]) => (
          <MessagesContainer key={key}>
            <MessageTimestamp>
              {key === now_str ? "hoje" : key === yesterday_str ? "ontem" : key}
            </MessageTimestamp>
            {value.map(({ content, img, outsider, timestamp }, idx) =>
              img ? (
                <ImageMessage
                  $outsider={outsider}
                  $timestamp={timestamp}
                  $src={content}
                  key={key + idx}
                />
              ) : (
                <TextMessage
                  $outsider={outsider}
                  $timestamp={timestamp}
                  key={key + idx}
                >
                  {content}
                </TextMessage>
              )
            )}
          </MessagesContainer>
        ))}
      </Main>
      <Footer>
        <img src="/home_filled.svg" onClick={() => nav("/")} />
        <input
          type="text"
          placeholder="Escreva"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <img src="/send.svg" onClick={handle_click} />
      </Footer>
    </Container>
  );
};
export default ChitChat;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.main`
  height: 100%;
  overflow-y: scroll;
`;

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.4rem;
  padding: 1rem 0.5rem;
`;

const MessageTimestamp = styled.span`
  display: block;
  text-align: center;
  font-size: 0.7em;
  margin-bottom: 1rem;
`;

const TextMessage = styled.p`
  display: block;
  width: fit-content;
  max-width: 80%;
  padding: 0.5rem;
  overflow-wrap: break-word;
  margin-left: ${({ $outsider }) => ($outsider ? "0" : "auto")};
  border-radius: ${({ $outsider }) =>
    $outsider ? "0 1rem 1rem" : "1rem 1rem 0"};

  background-color: ${({ $outsider, theme }) =>
    $outsider ? theme.primary : "white"};
  box-shadow: 0 0 0.8rem 0 rgba(0, 0, 0, 0.2);

  font-size: 0.8em;
  font-weight: 500;
  color: ${({ $outsider }) => ($outsider ? "white" : "black")};

  &::after {
    content: "${({ $timestamp }) => format_date($timestamp)}";
    display: block;
    opacity: 50%;
    text-align: end;
    font-size: 0.7em;
  }
`;

const ImageMessage = styled.div`
  position: relative;
  margin-left: ${({ $outsider }) => ($outsider ? "0" : "auto")};
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.5);
  border-radius: 1rem;

  background-image: url(${({ $src }) => $src});
  background-size: cover;
  background-repeat: no-repeat;
  width: 80%;
  min-height: 16rem;

  &::after {
    content: "${({ $timestamp }) => format_date($timestamp)}";

    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;

    font-size: 0.7em;
    font-weight: 700;
    color: ${({ theme }) => theme.primary};
    mix-blend-mode: difference;
  }
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 0.4rem;
  box-shadow: 0px -1px 1px 0px rgba(0, 0, 0, 0.25);
  border-radius: 0.8rem;

  input {
    width: 100%;
    font-size: 1em;
    padding: 0 1rem;
    border: none;
    outline: none;

    &::placeholder {
      font-weight: 700;
      color: ${({ theme }) => theme.navy_green};
    }
  }

  :first-child {
    width: 1.6rem;
    height: 1.6rem;
  }

  img {
    cursor: pointer;
    width: 2rem;
    height: 2rem;
  }
`;
