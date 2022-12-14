import styled from "styled-components";

export const MainBoxStyle = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  width: 72rem;
  @media (max-width: 72rem) {
    width: 54rem;
  }
  @media (max-width: 54rem) {
    width: 36rem;
  }
  @media (max-width: 48rem) {
    width: 100%;
  }
`;

export const MainBoxContent = styled.div`
  position: relative;
  display: block;
  box-sizing: border-box;
  margin: 0 auto;
  width: 50%;
  @media (max-width: 54rem) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const NavBoxContent = styled(MainBoxContent)`
  aspect-ratio: 1.5/1;
`;

export const MainLogo = styled.img`
  display: block;
  width: 100%;
`;
