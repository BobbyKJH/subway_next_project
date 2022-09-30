import styled from "styled-components";

export const ResultStyle = styled.div`
  box-sizing: border-box;
  background-color: #fff;
  margin: 0 auto;
  width: 40rem;
  height: 95vh;
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
    font-size: 0.8rem;
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
  span {
    display: block;
    font-size: 1.1rem;
    font-weight: 900;
  }
  .image {
    display: block;
    margin: 0 auto;
    width: 90%;
  }
  .name {
    display: block;
  }
  img {
    width: 30%;
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
      font-size: 8px;
    }
  }
`;

export const ResultCalorie = styled.p`
  text-align: center;
`;
