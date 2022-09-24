import styled from "styled-components";

export const MobileFooterStyle = styled.div`
  position: fixed;
  box-sizing: border-box;
  bottom: 0;
  width: 100%;
  max-height: 61px;
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
