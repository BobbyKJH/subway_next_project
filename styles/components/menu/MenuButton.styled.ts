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
    padding: 1rem;
    width: 20%;
  }
  .active {
    box-sizing: border-box;
    border: 10px inset #fff;
    background-color: #009000;
    color: #ffea00;
    font-weight: 900;
  }
`;
