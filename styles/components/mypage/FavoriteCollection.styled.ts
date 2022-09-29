import styled from "styled-components";

export const FavoriteCollectionStyle = styled.div`
  display: flex;
  margin: 0 auto 5rem auto;
  width: 36rem;
  span {
    display: block;
    text-align: center;
  }
  @media (max-width: 500px) {
    width: 18rem;
  }
`;
