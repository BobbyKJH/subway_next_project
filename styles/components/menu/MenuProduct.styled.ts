import styled from "styled-components";

export const ProductImg = styled.img`
  display: block;
  width: 90%;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const ProductName = styled.div`
  display: block;
  text-align: center;
  line-height: 30px;
  .name {
    font-size: 1.3rem;
    font-weight: 900;
  }
  .eng {
    font-size: 0.9rem;
    font-weight: 900;
    color: #ffa300;
  }
  @media (max-width: 700px) {
    .name {
      font-size: 1rem;
      font-weight: 900;
    }
    .eng {
      font-size: 0.6rem;
      font-weight: 900;
      color: #ffa300;
    }
  }
`;

export const ProductSummary = styled.span`
  display: block;
  text-align: center;
  line-height: 28px;
  margin: 1rem 0;
  font-size: 1rem;
  font-weight: 500;
  @media (max-width: 700px) {
    font-size: 0.7rem;
  }
`;

export const ProductKcal = styled.span`
  display: block;
  text-align: center;
  font-size: 0.8rem;
`;

export const ProductLike = styled.button`
  display: block;
  margin: 1rem auto 4rem auto;
  border: 5px outset #009000;
  padding: 0.2rem 5rem;
  width: 100px;
  :active {
    border: 5px inset #009000;
  }
`;
