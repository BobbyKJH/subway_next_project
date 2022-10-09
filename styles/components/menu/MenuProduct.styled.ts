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
  margin: 0 0 20px 0;
`;

export const ProductLike = styled.input`
  position: absolute;
  top: 10px;
  left: 10px;
  display: block;
  padding: 0;
  background-color: red;
  margin: 0;
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;
