import styled from "styled-components";

// 제품 페이지 배경 및 크기
export const ProductPage = styled.div`
  position: relative;
  display: block;
  box-sizing: border-box;
  width: 30rem;
  margin: 3rem auto 6rem auto;
  @media (max-width: 1000px) {
    width: 25rem;
  }
  @media (max-width: 700px) {
    margin: 1.5rem auto 66px auto;
    width: 100%;
  }
`;
