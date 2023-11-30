import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export const Footer = () => {
  const nav = useNavigate();
  const location = useLocation();

  return (
    <Container>
      {location.pathname === "/" ? (
        <img src="home_filled.svg" />
      ) : (
        <svg
          onClick={() => nav("/")}
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.289 16.6137C15.7573 16.6137 16.9524 17.7448 16.9524 19.1352V22.711C16.9524 23.0098 17.2037 23.2493 17.5256 23.2562H19.85C21.6817 23.2562 23.1707 21.8543 23.1707 20.1314V9.98971C23.1622 9.39683 22.8659 8.83883 22.3573 8.46799L14.3171 2.35553C13.2378 1.54061 11.728 1.54061 10.6451 2.35785L2.65976 8.46567C2.13171 8.84813 1.83537 9.40613 1.82927 10.0095V20.1314C1.82927 21.8543 3.31829 23.2562 5.15 23.2562H7.49634C7.82683 23.2562 8.09512 23.0063 8.09512 22.6994C8.09512 22.632 8.10366 22.5646 8.11829 22.5006V19.1352C8.11829 17.7529 9.3061 16.623 10.7634 16.6137H14.289ZM19.85 25H17.5037C16.1598 24.9698 15.1232 23.9642 15.1232 22.711V19.1352C15.1232 18.7062 14.7488 18.3574 14.289 18.3574H10.7695C10.3195 18.3598 9.94756 18.7097 9.94756 19.1352V22.6994C9.94756 22.7866 9.93537 22.8703 9.90976 22.9493C9.77805 24.1002 8.74634 25 7.49634 25H5.15C2.30976 25 0 22.8157 0 20.1314V10.0013C0.0121951 8.84581 0.570732 7.78792 1.53537 7.09158L9.50488 0.994234C11.2598 -0.331024 13.7049 -0.331024 15.4561 0.991909L23.4829 7.09507C24.4256 7.77979 24.9841 8.83534 25 9.97692V20.1314C25 22.8157 22.6902 25 19.85 25Z"
            fill="#706BAD"
          />
        </svg>
      )}

      <img src="plus_outlined.svg" onClick={() => nav("/publication")} />
      <img src="chat.svg" onClick={() => nav("/chat")} />

      {location.pathname !== "/profile" && (
        <img src="profile.svg" onClick={() => nav("/profile")} />
      )}
    </Container>
  );
};

const Container = styled.footer`
  position: sticky;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2rem;
  padding: 1rem;
  background-color: white;

  * {
    cursor: pointer;
    fill: black;
  }
`;
