import styled from "styled-components";

export const ListButton = styled.button`
  display: block;
  margin: 0 auto;
  margin-bottom: ${(props) => (props.arrow ? "0" : "10rem")};
  width: 300px;
  padding: 20px;
  color: #000;
  background-color: #fff;
  border: none;
  p {
    display: inline-block;
    transition: 0.5s;
    transform: ${(props: { arrow: boolean }) =>
      props.arrow ? "rotate(180deg)" : "rotate(0deg)"};
  }
`;
