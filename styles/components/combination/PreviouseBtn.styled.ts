import styled from "styled-components";

export const PreviousButton = styled.button`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  background-color: #ffffff90;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  font-size: 2rem;
  left: 5%;
  top: 50%;
  z-index: 50;
  &:hover {
    background-color: #000;
    color: #fff;
  }
  @media (max-width: 500px) {
    left: 0;
  }
`;
