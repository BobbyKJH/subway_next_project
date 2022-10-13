import styled from "styled-components";

export const MyRecipeStyle = styled.div`
  display: block;
  margin: 0 auto;
  width: 25rem;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const MakeStyle = styled.div`
  text-align: center;
  margin: auto 0;
  padding: 3rem 0;
  p {
    font-size: 1.5em;
    padding: 30px 0;
  }
  span {
    color: #000;
    cursor: pointer;
    line-height: 30px;
    &:hover {
      color: #fff;
    }
  }
`;

// 샌드위치 이미지
export const MyRecipeSandwich = styled.img`
  display: block;
  width: 100%;
`;
// 샌드위치 이름
export const MyRecipeSandwichName = styled.span`
  display: block;
  text-align: center;
  color: #000;
  line-height: 30px;
  font-size: 1.2rem;
  font-weight: 900;
  .eng {
    color: #ffa500;
    font-size: 1rem;
    font-weight: 700;
  }
  @media (max-width: 500px) {
    font-size: 1rem;
    .eng {
      font-size: 0.7rem;
    }
  }
`;

// 빵 이름
export const MyRecipeName = styled.span`
  display: block;
  text-align: center;
`;
// 소스 이름 및 이미지
export const MyRecipeSauce = styled.div`
  display: block;
  text-align: center;
  span {
    display: block;
    text-align: center;
    font-weight: 900;
    line-height: 30px;
    width: 100%;
  }
  div {
    display: block;
  }
  img {
    width: 33%;
  }
  p {
    display: inline-block;
    width: 33%;
    line-height: 40px;
    font-size: 0.8rem;
    font-weight: 500;
  }
  @media (max-width: 500px) {
    display: flex;
    div {
      width: 50%;
    }
    img {
      display: block;
      margin: 0 auto;
      width: 57px;
      height: 40px;
    }
    p {
      display: block;
      font-size: 0.7rem;
      width: 100%;
    }
  }
`;
// Kcal
export const MyRecipeKcal = styled.span`
  display: block;
  text-align: center;
  margin: 1rem 0 0 0;
`;
