import styled from "styled-components";

export const FooterStyle = styled.div`
  box-sizing: border-box;
  background-color: #000;
  width: 100%;
  height: 8rem;
  bottom: 0;
`;

export const FooterBox = styled.div`
  display: block;
  box-sizing: border-box;
  margin: 0 auto;
  border: 1px solid white;
  width: 72rem;
  height: 8rem;
  @media (max-width: 72rem) {
    width: 54rem;
  }
`;

export const MobileFooterStyle = styled.div`
  position: fixed;
  box-sizing: border-box;
  bottom: 0;
  width: 100%;
  max-height: 61px;
  z-index: 100;
  .active {
    border: 10px inset #fff;
  }
`;

export const MobileFooterBox = styled.div`
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: #fff;
  border: 10px outset #808080;
  width: 25%;
  height: 61px;
`;
