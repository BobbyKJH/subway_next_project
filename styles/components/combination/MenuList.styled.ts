import styled from "styled-components";

// 전체 박스
export const MenuListBox = styled.div<{ height: number; bottom: boolean }>`
  box-sizing: border-box;
  overflow: auto;
  margin: 0 auto;
  position: fixed;
  transition: height 0.5s ease-in;
  bottom: ${(props) => (props.bottom ? 0 : "61px")};
  width: 72rem;
  padding: 1rem 0.5rem 0 0.5rem;
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
    width: 60%;
  }
`;
// 샌드위치 이름
export const MenuListName = styled.span`
  display: block;
  text-align: center;
  line-height: 30px;
  font-weight: 900;
  font-size: 1.2rem;
  .eng {
    font-size: 0.8rem;
    color: #ffa500;
  }
  @media (max-width: 500px) {
    font-size: 1rem;
    .eng {
      font-size: 0.6rem;
    }
  }
`;

// 빵 치즈
export const MenuListIngredient = styled.div`
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  width: 50%;
  span {
    font-size: 1.2rem;
    font-weight: 900;
    line-height: 30px;
  }
  p {
    font-size: 1rem;
    font-weight: 500;
    line-height: 30px;
  }
  img {
    display: block;
    margin: 0 auto;
    width: 8rem;
  }
  @media (max-width: 500px) {
    span {
      font-size: 1rem;
    }
    p {
      font-size: 0.7rem;
    }
    img {
      width: 50%;
    }
  }
`;

export const MenuListSauce = styled.div`
  display: block;
  color: #000;
  margin: 0 auto 0 auto;
  span {
    display: block;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 900;
    width: 50%;
    margin: 0 auto 10px auto;
  }
  div {
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
  .sauce {
    text-align: center;
    box-sizing: border-box;
    line-height: 30px;
    width: 20%;
    font-size: 0.8rem;
    font-weight: 500;
  }
  @media (max-width: 500px) {
    display: flex;
    span {
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 1rem;
      margin: 0;
      width: 50%;
    }
    div {
      display: block;
      width: 50%;
    }
    .sauce {
      display: block;
      text-align: left;
      width: 100%;
      font-size: 0.7rem;
      line-height: 13px;
    }
  }
`;
