import styled from "styled-components";

// 전체 박스
export const MenuListBox = styled.div<{ height: number; bottom: boolean }>`
  box-sizing: border-box;
  margin: 0 auto;
  position: fixed;
  transition: height 0.5s ease-in;
  bottom: ${(props) => (props.bottom ? 0 : "56px")};
  width: 72rem;
  padding: 1rem 1rem 0 1rem;
  border: 3px solid #000;
  border-bottom: none;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  height: ${(props) => `${props.height}rem`};
  background-color: #fff;
  @media (max-width: 72rem) {
    width: 54rem;
  }
  @media (max-width: 54rem) {
    width: 100%;
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
export const MenuListBread = styled.div`
  display: inline-flex;
  box-sizing: border-box;
  justify-content: space-between;
  padding: 2rem 2rem 0 2rem;
  text-align: center;
  width: 50%;
  font-size: 0.9rem;
  span {
    display: inline-block;
  }
  .arrow {
    ::after {
      content: "➡️";
    }
  }
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
