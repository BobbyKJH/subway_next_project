import styled from "styled-components";

export const MobileFooterStyle = styled.div`
  position: fixed;
  box-sizing: border-box;
  bottom: 0;
  width: 100%;
  .active {
    border: 5px inset #808080;
  }
`;

export const MobileFooterBox = styled.div`
  cursor: pointer;
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  background-color: #fff;
  border: 5px outset #808080;
  padding: 1rem 0;
  width: 25%;
`;
