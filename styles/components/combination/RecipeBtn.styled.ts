import styled from "styled-components";

export const RecipeButton = styled.button`
  display: block;
  box-sizing: border-box;
  margin: 0 auto;
  border: 8px outset #ffc300;
  padding: 0.5rem 5rem;
  bottom: 0;
  font-weight: 900;
  background-color: #fff;
  &:active {
    border: 8px inset #ffc300;
  }
`;
