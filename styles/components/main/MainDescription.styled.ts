import styled from "styled-components";

export const MainDescriptionStyle = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  top: 15%;
  left: 15%;
  background-color: #00000090;
  color: #fff;
  width: 70%;
  height: 70%;
  span {
    position: absolute;
    top: 15px;
    font-size: 2rem;
    font-weight: 900;
  }
  p {
    position: absolute;
    line-height: 30px;
    color: #fff;
  }
  button {
    position: absolute;
    bottom: 15px;
  }
  @media (max-width: 500px) {
    span {
      font-size: 1rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;
