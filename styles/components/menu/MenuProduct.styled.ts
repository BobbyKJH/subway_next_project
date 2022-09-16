import styled from "styled-components";

export const ProductImg = styled.img`
  width: 100%;
  box-sizing: border-box;
`;

export const ProductName = styled.div`
  display: block;
  text-align: center;
  line-height: 30px;
  .name {
    font-size: 1.1rem;
    font-weight: 900;
  }
  .eng {
    font-size: 0.8rem;
    color: #009000;
  }
`;

export const ProductSummary = styled.span`
  display: block;
  text-align: center;
  line-height: 28px;
  margin: 1rem 0;
  font-weight: 500;
`;

export const ProductKcal = styled.span`
  display: block;
  width: 100%;
  text-align: center;
`;
