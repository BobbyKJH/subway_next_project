import styled, { keyframes } from "styled-components";

const op = keyframes`
0%{
  width: 0;
}
100%{
  width: 50%;
}
`;

export const HeaderStyle = styled.div`
  background-color: #009000;
  position: sticky;
  top: 0;
  z-index: 100;
  .header {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  .active {
    color: #fff;
    border-bottom: 5px solid #fff;
    height: 60px;
    width: 150px;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: bottom;
  }
  @media (max-width: 1200px) {
    .header {
      width: 1000px;
    }
  }
`;

export const HeaderTitle = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 60px;
  font-size: 1.4rem;
  font-weight: 900;
  color: #ffce32;
`;

// Header Link
export const HeaderNav = styled.a`
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  color: #ffce32;
  font-weight: 900;
  width: 150px;
`;

// 모바일 Header
export const MobileHeaderStyle = styled.div`
  display: block;
  width: 100%;
  background-color: #009000;
`;

export const MobileHeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #808080;
  padding: 0.5rem 1rem;
`;

export const MobileTitle = styled.button`
  display: flex;
  height: 50px;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 900;
  border: none;
  background-color: inherit;
  color: #ffce23;
`;

export const MobileButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #ffce23;
  border: none;
  background-color: #009000;
  font-weight: 900;
  font-size: 2rem;
  transition: 0.5s;
`;

export const MobileNav = styled.div<{ width: boolean }>`
  position: fixed;
  transition: 1s;
  bottom: 0;
  right: 0;
  top: 0;
  display: block;
  box-sizing: border-box;
  border: 1px solid black;
  background-color: #fff;
  transition: width 0.5s;
  width: ${(props) => (props.width ? "50%" : 0)};
  animation: ${op} 0.5s;
  z-index: 100;
  button {
    display: block;
    border: none;
    margin: 0 auto;
    background-color: #fff;
    color: #ffc20d;
    width: 100%;
    padding: 1rem 0;
    transition: 0.5s;
    font-size: 0.8rem;
    font-weight: 900;

    &:hover {
      background-color: #ffc20d;
      color: #009000;
    }
  }
  .active {
    background-color: #ffc20d;
    color: #009000;
  }
`;
