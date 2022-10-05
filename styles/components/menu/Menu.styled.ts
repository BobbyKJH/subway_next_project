import styled from "styled-components";

// 카드 전체 크기 및 생김새 설정
export const MenuBox = styled.div`
  display: inline-block;
  box-sizing: border-box;
  overflow: hidden;
  margin: 0.8rem;
  width: 22rem;
  background-color: #fff;
  border: 5px solid #009000;
  border-radius: 10px;
  box-shadow: 0px 7px 0 0px #00000080;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;

  @media (max-width: 72rem) {
    width: 25rem;
  }
  @media (max-width: 54rem) {
    width: 95%;
    display: flex;
    margin: 0 auto 2.5rem auto;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 0 0 #00000090;
  }
`;
// 샌드위치 빵 치즈 채소 소스 이미지
export const MenuImg = styled.img`
  width: 100%;
  @media (max-width: 54rem) {
    margin: 1rem 0;
    width: 40%;
  }
`;
// 각각의 카드에 대한 이름
export const MenuName = styled.div`
  margin: 1rem auto;
  text-align: center;
  line-height: 30px;
  .name {
    font-size: 1rem;
    font-weight: 900;
    color: #000;
  }
  .eng {
    color: #ffa500;
    font-size: 0.8rem;
    font-weight: 500;
  }
  @media (max-width: 54rem) {
    margin: auto;
  }
  @media (max-width: 35rem) {
    margin: auto;
    width: 60%;

    .name {
      font-size: 0.5rem;
    }
    .eng {
      font-size: 0.4rem;
    }
  }
`;
