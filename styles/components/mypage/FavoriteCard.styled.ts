import styled from "styled-components";

export const FavoriteMenuImg = styled.img`
  display: block;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const FavoriteCardTitle = styled.span`
  display: block;
  text-align: center;
  color: #000;
  line-height: 30px;
  margin: 0 0 10px 0;
  font-size: 1rem;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

export const FavoriteCardSummary = styled.p`
  text-align: center;
  color: #000;
  font-size: 0.7rem;
  line-height: 22px;
  font-weight: 500;
  min-height: 30px;
  @media (max-width: 500px) {
    font-size: 0.6rem;
  }
`;

export const FavoriteCardCalorie = styled.p`
  text-align: center;
  line-height: 22px;
  margin: 10px 0;
`;
