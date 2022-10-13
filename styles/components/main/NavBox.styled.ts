import styled from "styled-components";

export const NavBoxStyle = styled.div<{ bgc: string }>`
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  color: #fff;
  width: 50%;
  height: 50%;
  background-color: ${(props) => props.bgc};
  span {
    font-weight: 900;
    font-size: 2rem;
  }
  @media (max-width: 72rem) {
    span {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 500px) {
    span {
      font-size: 1rem;
    }
  }
`;
