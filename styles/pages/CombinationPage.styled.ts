import styled from "styled-components";

// 조합 페이지의 배경 및 크기
export const CombinationPage = styled.div`
  display: block;
  margin: 0 auto;
  width: 72rem;
  padding: 0 0 7rem 0;
  @media (max-width: 72rem) {
    width: 54rem;
  }
  @media (max-width: 54rem) {
    width: 100%;
  }
`;

// 각각의 조합 페이지의 맞는 이름

export const CombinationTitle = styled.strong`
  display: block;
  text-align: center;
  color: #000;
  padding: 2rem 0 1rem 0;
  margin: 0 0 1rem 0;

  span {
    font-size: 1.8rem;
    font-weight: 900;
  }
  .tip {
    font-size: 1rem;
    font-weight: 700;
    margin: 1rem 0;
    color: #000;
  }
`;

export const CombinationTip = styled.p`
  display: block;
  text-align: center;
`;
