import styled from "styled-components";

export const HeaderStyle = styled.div`
  display: block;
  background-color: #fff;
  box-shadow: 2px 2px 2px 0 #000;
  box-sizing: border-box;
  #header {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 1rem 0;
    width: 100%;
    max-width: 1200px;

    #title {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #000;
      padding: 0 1rem;
      font-weight: 900;
      font-size: 1.5rem;
    }

    .header {
      display: flex;
      hr {
        display: block;
        margin: auto 0;
        border: 2px solid #000;
        height: 30px;
      }
      .nav {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        font-size: 0.8em;
        padding: 0 1rem;
        width: 140px;
        color: #80808090;
        &:hover {
          color: #000;
        }
      }
    }
  }
`;
