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
`;
// 소스 이미지
export const RecipeSauceImage = styled.div`
  display: inline-block;
  img {
    width: 30%;
  }
  @media (max-width: 500px) {
    img {
      &:first-child {
        display: block;
        margin: 0 auto;
      }
    }
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
      width: 50%;
      &:first-child {
        display: block;
        margin: 0 auto;
      }
    }
  }
`;
