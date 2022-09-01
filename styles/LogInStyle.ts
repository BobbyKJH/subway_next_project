import styled from "styled-components";

export const LogInStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  span {
    font-size: 2em;
    padding: 0 1rem;
    margin: 0 0 2rem 0;
    @media (max-width: 700px) {
      font-size: 1.3rem;
    }
  }
  input {
    width: 350px;
    height: 50px;
    box-sizing: border-box;
    padding: 1rem;
    font-weight: 900;
    margin: 2rem;
  }
  button {
    display: block;
    box-sizing: border-box;
    border: none;
    border-radius: 10px;
    background-color: #009223;
    color: #ffce32;
    font-weight: 900;
    margin: 2rem;
    width: 350px;
    height: 50px;
  }
`;
