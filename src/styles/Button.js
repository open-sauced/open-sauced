import styled from "styled-components";

const Button = styled.button`
  background: #00c7b7;  
  border: none;
  border-radius: var(--smallBorderRadius);
  box-shadow: none;
  color: white;
  cursor: pointer;
  font-size: var(--tiny);
  margin-bottom: var(--tiny);
  margin-right: var(--micro);
  outline: none;
  padding: var(--tiny);
  transition: background 0.2s ease;
`;

export default Button;
