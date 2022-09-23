import styled from "styled-components";

export const ResultStyle = styled.div`
  box-sizing: border-box;
  background-color: #fff;
  margin: 1.5rem auto 7rem auto;
  width: 30rem;
  border-radius: 15px;
  @media (max-width: 54rem) {
    width: 90%;
  }
`;

export const ResultImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 30rem;
  @media (max-width: 54rem) {
    width: 25rem;
  }
`;

export const ResultSandwich = styled.span`
  display: block;
  text-align: center;
  font-size: 1.7rem;
  font-weight: 900;
  @media (max-width: 54rem) {
    font-size: 1.2rem;
  }
`;

export const ResultBread = styled.div`
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  margin: 1rem auto 0 auto;
  width: 50%;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1.7rem;
  }
  span {
    font-weight: 900;
    font-size: 1.2rem;
  }
  p {
    font-size: 1rem;
  }
  .arrow {
    ::after {
      content: "➡️";
    }
  }
  @media (max-width: 54rem) {
    span {
      font-size: 1rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

export const ResultCheese = styled(ResultBread)``;

export const ResultSauce = styled.div<{ width: number }>`
  display: block;
  box-sizing: border-box;
  span {
    display: block;
    text-align: center;
    padding: 10px 0;
    font-size: 1.2rem;
    font-weight: 900;
  }
  p {
    font-size: 1rem;
    padding: 1rem 0;
    display: inline-block;
    box-sizing: border-box;
    text-align: center;
    width: ${(props) => 100 / props.width}%;
  }
  @media (max-width: 54rem) {
    span {
      font-size: 1rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

export const ResultCalorie = styled.p`
  margin: 1rem 0 0 0;
  text-align: center;
`;
