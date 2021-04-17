import styled from 'styled-components'

export const NavbarWrapper = styled.div`
  height: 100%;
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`

export const NavbarItem = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  & a {
    height: 100%;
    padding: 0 16px 0;
    display: flex;
    align-items: center;
    font-size: 15px;
    text-decoration: none;
    color: white;

    &:hover {
      color: white;
    }
    &:active {
      color: white;
    }
  }

  &:hover {
    & div {
      bottom: -12px;
    }
  }

  &:active {
    & div {
      bottom: -11px;
    }
  }
`

export const NavbarDecorator = styled.div`
  position: absolute;
  width: 100%;
  height: 15px;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 0 5px 1px #cddc39;
  bottom: ${props => (props.path === props.selected ? -12 : -25)}px;

  background-color: #cddc39;
`
