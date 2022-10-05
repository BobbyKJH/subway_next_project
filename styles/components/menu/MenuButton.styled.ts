import styled from "styled-components";

// 샌드위치 빵 치즈 채소 소스 카테고리 버튼
export const MenuButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 0 2rem 0;
  background-color: #fff;
  a {
    background-color: #ffea00;
    color: #009000;
    box-sizing: border-box;
    border: 10px outset #fff;
    padding: 0.8rem 0;
    width: 20%;
  }
  .active {
    box-sizing: border-box;
    border: 10px inset #fff;
    background-color: #009000;
    color: #ffea00;
    font-weight: 900;
  }

  @media (max-width: 500px) {
    a {
      padding: 0.5rem 0;
      width: 33%;
      font-size: 0.4rem;
    }
  }
`;

export const MenuBtn = styled.div`
  display: inline-block;
  box-sizing: border-box;
  background-color: #ffea00;
  color: #009000;
  width: 20%;
  border: 10px outset #fff;
  padding: 0.8rem 0;
  @media (max-width: 500px) {
    padding: 0.5rem 0;
    font-size: 0.5rem;
    width: 50%;
  }
`;
