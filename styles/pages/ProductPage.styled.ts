import styled from "styled-components";

// 제품 페이지 배경 및 크기
export const ProductPage = styled.div`
  display: block;
  width: 30rem;
  margin: 3rem auto;
  @media (max-width: 1000px) {
    width: 25rem;
  }
  @media (max-width: 700px) {
    margin: 1.5rem auto;
    width: 100%;
  }
`;
