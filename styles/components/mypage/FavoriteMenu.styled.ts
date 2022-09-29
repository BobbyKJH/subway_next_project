import styled from "styled-components";

export const FavoriteMenuStyle = styled.div`
  display: inline-block;
  width: 18rem;
  margin: 2rem 0;
  .menu {
    font-size: 1.5rem;
    font-weight: 900;
  }
  @media (max-width: 500px) {
    .menu {
      font-size: 1rem;
    }
  }
`;
