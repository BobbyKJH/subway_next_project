import styled from "styled-components";
// 전체 이미지
export const RecipeSauceStyle = styled.div`
  display: block;
  text-align: center;
  span {
    display: block;
    line-height: 30px;
    font-weight: 900;
  }
  @media (max-width: 500px) {
    display: flex;
  }
`;
// 소스 이미지
export const RecipeSauceImage = styled.div`
  display: inline-block;
  img {
    display: block;
    width: 30%;
  }
  @media (max-width: 500px) {
    display: block;
  }
`;

export const RecipeSauceName = styled.div`
  font-size: 0.7rem;
  p {
    display: inline-block;
    line-height: 30px;
    width: 30%;
  }
  @media (max-width: 500px) {
    p {
      display: block;
      width: 50%;
    }
  }
`;
