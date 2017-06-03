import styled from "styled-components";

const Button = styled.button`
  background: ${ (props) => { return props.destructive ? "#fb6d77" : "#00c7b7"; }};
  border: none;
  border-radius: 4px;
  box-shadow: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 16px;
  margin-right: 8px;
  outline: none;
  padding: 16px;
  transition: background 0.2s ease;

  &:hover {
    background: ${ (props) => { return props.destructive ? "#fa3946" : "#03b1a3"; }};
  }
`;

export default Button;
