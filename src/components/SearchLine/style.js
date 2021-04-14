import styled from 'styled-components'

export const SearchLineInput = styled.input`
  width: -webkit-fill-available;
  font-size: 14px;
  font-weight: 400;
  line-height: 3;
  color: white;
  background-color: #262b2f;
  border: 1px solid #262b2f;
  border-radius: 10px;
  margin-left: 12px;
  margin-right: 12px;
  padding-right: 12px;
  padding-left: 48px;
  outline: none;

  &:hover {
    box-shadow: 0 0 5px 1px #262b2f;
  }

  &:focus {
    box-shadow: 0 0 10px 1px #262b2f;
  }
`

export const SearchLineIcon = styled.label`
  position: relative;
  width: fit-content;
  cursor: pointer;

  & svg {
    position: absolute;
    left: 24px;
    bottom: -12px;
  }
`
