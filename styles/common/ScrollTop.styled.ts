import styled from "styled-components";

export const ScorllTopButton = styled.button`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  bottom: 70px;
  right: 10px;
  width: 3rem;
  height: 3rem;
  transition: 0.5s;
  font-size: 1rem;
  font-weight: 900;
  color: #000;
  background-color: #fff;
  border-radius: 10px;
  border: 3px solid #000;
  &:hover {
    background-color: #000;
    color: #fff;
  }
  @media (max-width: 500px) {
    width: 40px;
    height: 40px;
    font-size: 0.7rem;
  }
`;
