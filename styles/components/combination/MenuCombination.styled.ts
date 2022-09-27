import styled from "styled-components";

// 조합 버튼 카드
export const CombinationButton = styled.button`
  display: inline-block;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #fff;
  margin: 1rem;
  width: 22rem;
  padding: 0;
  border: 5px solid #009000;
  border-radius: 10px;
  box-shadow: 0px 7px 0 0px #00000080;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;

  @media (max-width: 72rem) {
    width: 25rem;
  }
  @media (max-width: 54rem) {
    width: 90%;
    display: block;
    margin: 0 auto 2.5rem auto;
  }
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 0 0 #00000090;
  }
`;

// 조합 이미지
export const CombinationImg = styled.img`
  width: 100%;
  @media (max-width: 54rem) {
    margin: auto;
    width: 70%;
  }
`;

// 조합 Name Eng_Name Calorie
export const CombinationContent = styled.div`
  position: relative;
  box-sizing: border-box;
  line-height: 30px;
  margin: auto;
  .name {
    display: block;
    font-size: 1rem;
    font-weight: 900;
    color: #000;
  }
  .eng {
    display: block;
    font-size: 0.8rem;
    color: #ffa500;
  }
  .calorie {
    display: block;
    font-size: 0.8rem;
    line-height: 10px;
    padding: 0 0 1rem 0;
  }
  @media (max-width: 54rem) {
    .calorie {
      margin: 0.5rem 0 0 0;
    }
  }
  @media (max-width: 35rem) {
    margin: auto;
    .name {
      font-size: 14px;
    }
    .eng {
      font-size: 10px;
    }
    .calorie {
      font-size: 10px;
    }
  }
`;
