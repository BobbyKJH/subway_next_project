import styled from "styled-components";

export const MenuBox = styled.div`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  border: 1px solid black;
  margin: 0 1rem 2rem 1rem;
  width: 20rem;
  @media (max-width: 67rem) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem auto;
    width: 38rem;
  }
`;

export const MenuImg = styled.img`
  display: block;
  box-sizing: border-box;
  padding: 0 1rem;
  width: 100%;

  @media (max-width: 67rem) {
    width: 19rem;
  }
`;

export const MenuName = styled.div`
  display: block;
  line-height: 30px;
  .name {
    font-size: 1rem;
  }
  .eng {
    font-size: 0.7rem;
    color: #ffa550;
  }

  @media (max-width: 67rem) {
    width: 18rem;
    align-items: center;
    .name {
      font-size: 0.9rem;
    }
    .eng {
      font-size: 0.6rem;
      color: #ffa550;
    }
  }
`;
