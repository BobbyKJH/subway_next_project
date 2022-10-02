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
  padding: 3rem 0;
  margin: auto 0;
  p {
    padding: 2rem 0;
  }
`;

// 샌드위치 이미지
export const MyRecipeSandwich = styled.img`
  display: block;
  width: 100%;
`;
// 샌드위치 이름
export const MyRecipeSandwichName = styled.p`
  display: block;
  text-align: center;
  color: #000;
  line-height: 30px;
  font-size: 1.2rem;
  font-weight: 900;
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
  }
  img {
    width: 30%;
  }
  p {
    display: inline-block;
    text-align: center;
    width: 30%;
    font-size: 0.8rem;
    font-weight: 500;
  }
`;
// Kcal
export const MyRecipeKcal = styled.span`
  display: block;
  text-align: center;
  margin: 1rem 0 0 0;
`;
