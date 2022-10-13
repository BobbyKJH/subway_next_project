import styled from "styled-components";

export const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #fff;
`;

export const LogInStyle = styled.form`
  display: block;
  background-color: #ffce50;
  border: 5px solid #009000;
  border-radius: 10px;
  padding: 0 2rem;
  @media (max-width: 500px) {
    padding: 0 10px;
  }
`;

export const LoginTitle = styled.span`
  display: block;
  margin: 2rem;
  text-align: center;
  color: #009000;
  font-size: 1.5rem;
  font-weight: 900;
  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export const LoginInput = styled.input`
  display: block;
  box-sizing: border-box;
  width: 450px;
  height: 50px;
  margin: 1rem auto;
  padding: 1rem;
  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const LoginButton = styled.button`
  display: block;
  box-sizing: border-box;
  width: 450px;
  background-color: #009000;
  color: #ffce50;
  font-weight: 900;
  font-size: 0.8rem;
  padding: 0.5rem 0;
  margin: 1rem auto;
  border: 3px solid #009000;
  border-radius: 10px;
  @media (max-width: 500px) {
    width: 90%;
  }
`;
