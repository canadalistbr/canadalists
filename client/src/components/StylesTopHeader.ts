import styled from 'styled-components'
import { Theme } from 'styles/Theme'

export const Wrapper = styled.div`
  box-shadow: 0px 0px 8px 2px ${Theme.lightGray};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  padding: 1.5rem;
  position: sticky;
`
  
export const Header = styled.h1`
  color: ${Theme.red}
`