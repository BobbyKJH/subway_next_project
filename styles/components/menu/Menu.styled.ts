import styled from "styled-components";

export const MenuBox = styled.div`
  display: inline-block;
  box-sizing: border-box;
  overflow: hidden;
  margin: 1rem;
  width: 22rem;
  border: 5px solid #009000;
  border-radius: 10px;
  box-shadow: 0px 7px 0 0px #00000080;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;

  @media (max-width: 72rem) {
    width: 25rem;
  }
  @media (max-width: 54rem) {
    width: 32rem;
    display: flex;
    margin: 0 auto 2.5rem auto;
  }
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 0 0 #00000090;
  }
`;

export const MenuImg = styled.img`
  box-sizing: border-box;
  width: 100%;
  @media (max-width: 54rem) {
    width: 50%;
  }
`;

export const MenuName = styled.div`
  margin: 1rem auto;
  text-align: center;
  line-height: 30px;
  .name {
    font-size: 1rem;
    font-weight: 900;
  }
  .eng {
    color: #ffa500;
    font-size: 0.8rem;
    font-weight: 500;
  }
  @media (max-width: 54rem) {
    margin: auto;
  }
`;
