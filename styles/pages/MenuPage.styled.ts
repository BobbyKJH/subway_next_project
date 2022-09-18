import styled from "styled-components";

// 메뉴 페이지 배경 및 크기 (반응형)
export const MenuPage = styled.div`
  display: block;
  margin: 0 auto;
  padding: 0 0 1rem 0;
  width: 72rem;
  background-color: #ffea00;
  @media (max-width: 72rem) {
    width: 54rem;
  }
  @media (max-width: 54rem) {
    width: 36rem;
  }
`;
