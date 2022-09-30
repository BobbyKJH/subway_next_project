import styled from "styled-components";

export const ResultStyle = styled.div`
  box-sizing: border-box;
  background-color: #fff;
  margin: 0 auto;
  width: 40rem;
  border-radius: 15px;
  @media (max-width: 54rem) {
    width: 70%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

// 샌드위치 이미지
export const ResultImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 25rem;
  @media (max-width: 500px) {
    width: 90%;
  }
`;

// 샌드위치 이름
export const ResultSandwich = styled.span`
  display: block;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 900;
  margin: 0 0 20px 0;
  @media (max-width: 54rem) {
    font-size: 1.2rem;
  }
  @media (max-width: 500px) {
    font-size: 1.1rem;
  }
`;

// 빵, 치즈 이름 및 이미지
export const ResultList = styled.div`
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  width: 50%;
  div {
    display: block;
  }
  span {
    display: block;
    margin: 0 auto;
    border-radius: 10px;
    font-size: 1.1rem;
    font-weight: 900;
  }
  p {
    font-size: 1rem;
    font-weight: 500;
  }
  img {
    width: 10rem;
  }
  @media (max-width: 500px) {
    span {
      font-size: 0.8rem;
      width: 80%;
    }
    p {
      font-size: 0.7rem;
    }
    img {
      width: 50%;
      margin: 0 auto 10px auto;
    }
  }
`;

// 소스 이미지 및 이름
export const ResultSauce = styled.div`
  display: block;
  box-sizing: border-box;
  text-align: center;
  margin: 20px 0 0 0;
  span {
    display: block;
    font-size: 1.1rem;
    font-weight: 900;
  }
  div {
    display: ${(props: { display: number }) =>
      props.display === 3 ? "flex" : "block"};
    justify-content: space-between;
    margin: 0 auto;
    width: 99%;
    align-items: center;
  }

  img {
    width: 33%;
    margin: 10px 0;
  }
  p {
    display: inline-block;
    width: 33%;
    font-size: 0.5rem;
  }
  @media (max-width: 500px) {
    span {
      font-size: 0.8rem;
    }
    p {
      font-size: 13px;
    }
  }
`;

// Result Kcal
export const ResultCalorie = styled.p`
  text-align: center;
  margin: 30px 0 5rem 0;
`;
