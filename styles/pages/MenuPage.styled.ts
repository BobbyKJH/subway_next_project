import styled from "styled-components";

// 메뉴 페이지 배경 및 크기
export const MenuPage = styled.div`
  display: block;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 0 2rem 0;
  width: 72rem;
  @media (max-width: 72rem) {
    width: 54rem;
  }
  @media (max-width: 54rem) {
    width: 100%;
  }
`;
