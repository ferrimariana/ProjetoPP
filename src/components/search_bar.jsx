import { styled } from "styled-components";

export const SearchBar = ({ color }) => (
  <Container $color={color}>
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.87777 9.30326L8.15908 7.62291L8.1188 7.56165C8.04389 7.48708 7.94148 7.44508 7.83458 7.44508C7.72769 7.44508 7.62527 7.48708 7.55037 7.56165C6.08974 8.90167 3.83907 8.97451 2.291 7.73186C0.742931 6.48921 0.377834 4.31668 1.43784 2.65508C2.49785 0.993486 4.65404 0.358423 6.47642 1.17107C8.29881 1.98371 9.2219 3.9919 8.63351 5.8638C8.59113 5.99903 8.62577 6.14609 8.72437 6.24958C8.82297 6.35308 8.97055 6.39728 9.11152 6.36554C9.2525 6.33381 9.36544 6.23095 9.40782 6.09572C10.1112 3.87432 9.04887 1.48378 6.90806 0.470529C4.76725 -0.542719 2.19042 0.125412 0.844527 2.04271C-0.501365 3.96 -0.21241 6.55107 1.52447 8.13975C3.26134 9.72843 5.92489 9.83794 7.79206 8.39745L9.31383 9.88526C9.47099 10.0382 9.72508 10.0382 9.88225 9.88526C10.0393 9.7301 10.0393 9.4803 9.88225 9.32514L9.87777 9.30326Z"
        fill={color}
      />
    </svg>
    <input type="text" placeholder="Pesquisar" />
  </Container>
);

const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  border: 1px solid ${({ $color }) => $color};
  padding: 0.6rem 1rem;
  border-radius: 0.8rem;
  background-color: #fff;

  input {
    border: none;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
    width: 100%;

    &:focus {
      outline: none;
    }
  }
`;
