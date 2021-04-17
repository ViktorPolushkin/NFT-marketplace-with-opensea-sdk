import styled from 'styled-components'

export const CollectionBrowserWrapper = styled.div`
  width: 100%;
  margin: 20px 0;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-contents: center;
`

export const CollectionListWrapper = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: 16% 16% 16% 16% 16% 16%;

  @media (max-width: 1800px) {
    grid-template-columns: 20% 20% 20% 20% 20%;
  }

  @media (max-width: 1660px) {
    grid-template-columns: 25% 25% 25% 25%;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 33% 33% 33%;
  }

  @media (max-width: 960px) {
    grid-template-columns: 50% 50%;
  }

  @media (max-width: 720px) {
    grid-template-columns: 80%;

    & > div {
      min-width: 240px;
      max-width: 280px;
    }
  }
`
