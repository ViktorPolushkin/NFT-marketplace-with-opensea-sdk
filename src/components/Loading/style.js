import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const LoadingWrapper = styled.div`
  min-width: ${props => props.size || 44}px;
  height: ${props => props.size || 44}px;
  border: 2px solid #262b2f;
  border-radius: 50%;
  background-color: #262b2f;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  box-shadow: 0 0 8px 1px #262b2f;

  & svg {
    animation: ${rotate} 1s linear infinite;
  }
`
