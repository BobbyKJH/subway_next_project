import styled from "styled-components";

export const MenuListBox = styled.div<{ height: number }>`
  box-sizing: border-box;
  margin: 0 auto;
  position: fixed;
  transition: height 0.5s ease-in;
  bottom: 0;
  width: 72rem;
  padding: 1rem 1rem 0 1rem;
  height: ${(props) => `${props.height}rem`};
  background-color: #fff;
  @media (max-width: 72rem) {
    width: 54rem;
  }
  @media (max-width: 54rem) {
    width: 36rem;
  }
`;

export const ComplecationBtn = styled.button`
  display: block;
  margin: 0 auto;
`;

// 샌드위치 이미지
export const SandwichImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 350px;
`;
// 샌드위치 이름
export const MenuListName = styled.span`
  display: block;
  text-align: center;
  line-height: 30px;
  span {
    font-size: 1.1rem;
    font-weight: 900;
  }
  p {
    font-size: 0.8rem;
    color: #ffc300;
  }
`;
// 빵 이름
export const MenuListBread = styled.p`
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  width: 50%;
  font-size: 0.9rem;
`;
export const MenuListCheese = styled(MenuListBread)``;

export const MenuListSauce = styled.span<{ width: number }>`
  display: block;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 1rem 0;
  min-height: 58px;
  font-size: 0.8rem;
  .sauce {
    display: inline-block;
    text-align: center;
    width: ${(props) => 100 / props.width}%;
  }
`;
