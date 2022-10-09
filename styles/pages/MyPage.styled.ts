import styled from "styled-components";

export const MyPageBox = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  transition: height 0.5s;
  height: ${(props: { open: boolean }) => (props.open ? "initial" : "0")};
  background-color: #fff;
  margin-bottom: ${(props) => (props.open ? "0" : "10rem")};
`;

export const OpenButton = styled.button<{ fc: boolean }>`
  display: block;
  margin: 30px auto 0 auto;
  font-size: 2rem;
  font-weight: 900;
  background-color: initial;
  border: none;
  color: ${(props) => (props.fc ? "#009000" : "#ffa500")};
  p {
    display: inline-block;
    font-weight: 900;
  }
  @media (max-width: 500px) {
    font-size: 1.4rem;
  }
`;
