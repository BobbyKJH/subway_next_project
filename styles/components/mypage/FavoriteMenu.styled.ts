import styled from "styled-components";

export const FavoriteMenuStyle = styled.div`
  position: relative;
  display: inline-block;
  width: 18rem;
  margin: 2rem 0;
  .menu {
    font-size: 1.5rem;
    font-weight: 900;
  }
  .empty-box {
    padding: 3rem 0;
    text-align: center;
  }
  @media (max-width: 500px) {
    width: 50%;
    .menu {
      font-size: 1rem;
    }
  }
`;
