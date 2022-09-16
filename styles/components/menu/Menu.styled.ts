import styled from "styled-components";

export const MenuBox = styled.div`
  display: inline-block;
  box-sizing: border-box;
  overflow: hidden;
  margin: 1rem;
  width: 22rem;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 3px #80808085;
  @media (max-width: 72rem) {
    width: 25rem;
  }
  @media (max-width: 54rem) {
    width: 34rem;
    display: inline-flex;
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
  margin: auto;
  text-align: center;
  line-height: 22px;
  .name {
    font-size: 0.8rem;
    font-weight: 900;
  }
  .eng {
    font-size: 0.5rem;
    color: #ffa500;
  }
`;
