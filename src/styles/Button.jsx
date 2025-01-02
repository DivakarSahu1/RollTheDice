import styled from "styled-components";
export const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background: rgb(213, 206, 206);
    border: 1px solid #000000;
    color: #000000;
    transition: 0.3s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background: black;
    border: 1px solid transparent;
    color: white;
    transition: 0.3s background ease-in;
  }
`;
