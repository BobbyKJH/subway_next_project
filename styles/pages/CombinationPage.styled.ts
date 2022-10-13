import styled from "styled-components";

// 조합 페이지의 배경 및 크기
export const CombinationPage = styled.div`
  display: block;
  margin: 0 auto 0 auto;
  width: 72rem;
  button {
    &:last-of-type {
      margin-bottom: 8rem;
    }
  }
  @media (max-width: 72rem) {
    width: 54rem;
  }
  @media (max-width: 54rem) {
    width: 34rem;
  }
  @media (max-width: 34rem) {
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

export const CombinationResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 54rem;
  height: 70vh;
  span {
    font-size: 2rem;
    font-weight: 900;
    padding: 3rem 0;
  }
  p {
    border: 3px solid #000;
    margin: 2rem 0;
    cursor: pointer;
    padding: 1rem 2rem;
    &:hover {
      background-color: #000;
      color: #fff;
    }
  }
  @media (max-width: 54rem) {
    width: 34rem;
  }
`;
