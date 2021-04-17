import styled from 'styled-components'

export const CustomButton = styled.button`
  border-radius: 10px;
  border: 0;
  outline: none;
  padding: 4px 16px;
  margin: 4px 8px;
  color: white;
  background-color: #66bbc6;
  box-shadow: 0 0 5px 1px #262b2f80;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    box-shadow: 0 0 15px 1px #262b2f;
  }

  &:active {
    box-shadow: 0 0 10px 1px #4e81c5;
  }
`
