import styled from "styled-components";

export const LogInStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 95vw;
  height: 95vh;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const LoginTitle = styled.span`
  display: block;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 900;
`;

export const LoginInput = styled.input`
  box-sizing: border-box;
  width: 500px;
  height: 50px;
  margin: 1rem 0;
  padding: 1rem;
  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const LoginButton = styled.button`
  width: 350px;
  background-color: #fff;
  padding: 0.5rem 0;
  @media (max-width: 500px) {
    width: 90%;
  }
`;
