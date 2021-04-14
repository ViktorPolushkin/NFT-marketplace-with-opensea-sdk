import styled from 'styled-components'

export const NavbarWrapper = styled.div`
  height: 100%;
  display: flex;

  & a {
    height: 100%;
    padding: 0 16px;
    display: flex;
    align-items: center;
    font-size: 15px;
    text-decoration: none;
    color: white;

    &:hover {
      text-decoration: none;
      box-shadow: 0 3px 0 0 #eda80a;
      border-radius: 0 0 0 30px;
    }
  }
`
