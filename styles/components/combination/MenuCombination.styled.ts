import styled from "styled-components";

// 조합 버튼 카드
export const CombinationButton = styled.button`
  display: inline-block;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #fff;
  margin: 1rem;
  width: 22rem;
  border: 5px solid #009000;
  border-radius: 10px;
  box-shadow: 0px 7px 0 0px #00000080;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;

  @media (max-width: 72rem) {
    width: 25rem;
  }
  @media (max-width: 54rem) {
    width: 32rem;
    display: flex;
    margin: 0 auto 2.5rem auto;
  }
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 0 0 #00000090;
  }
`;

// 조합 이미지
export const CombinationImg = styled.img`
  box-sizing: border-box;
  width: 100%;
  @media (max-width: 54rem) {
    width: 50%;
  }
`;

// 조합 Name Eng_Name Calorie
export const CombinationContent = styled.div`
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  line-height: 30px;
  margin: auto;
  .name {
    display: block;
    font-size: 1rem;
  }
  .eng {
    font-size: 0.6rem;
    color: #ffa500;
    margin: 0 0 0 0;
  }
  .calorie {
    display: block;
    margin: 0 0 0.5rem 0;
    @media (max-width: 54rem) {
      margin: 1rem 0 0 0;
    }
  }
`;
