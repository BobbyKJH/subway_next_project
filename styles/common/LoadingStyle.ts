import styled, { keyframes } from "styled-components";

export const spin = keyframes`
0% {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
}
100% {
  -webkit-transform: rotate(1turn);
  transform: rotate(1turn);
}
`;

export const Spinner = styled.div`
  margin: 10rem auto;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 8px solid #eee;
  -webkit-animation: spinner 0.8s linear infinite;
  border-top-color: #666;
  animation: ${spin} 0.8s linear infinite;
`;
