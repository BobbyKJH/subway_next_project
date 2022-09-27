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

  height: ${(props) => `${props.height}%`};
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
  width: 15rem;
  @media (max-width: 500px) {
    width: 75%;
  }
`;
// 샌드위치 이름
export const MenuListName = styled.span`
  display: block;
  text-align: center;
  line-height: 30px;
  span {
    font-size: 1rem;
    font-weight: 900;
  }
  p {
    font-size: 0.8rem;
    color: #ffc300;
  }
`;
// 빵 이름
export const MenuListMaterial = styled.div`
  display: inline-block;
  margin: 20px auto 0 auto;
  box-sizing: border-box;
  font-size: 0.8rem;
  width: 50%;
  span {
    display: block;
    font-size: 1rem;
    font-weight: 900;
  }
  div {
    text-align: right;
  }
  p {
    margin: 0 0 5px 0;
  }
  @media (max-width: 500px) {
    width: 100%;
    span {
      font-size: 0.8rem;
    }
  }
`;
