import styled from 'styled-components'
import { Theme } from 'styles/Theme'

export const Container = styled.header`
  width: 100vw;
  min-height: 35rem;
  height: 20vh;
  position: relative;
  z-index: 9;
`

export const Wrapper = styled.div`
  height: 100%;
  padding: 1.5rem;
  z-index: 1;
  position: relative;

`
  
export const Header = styled.h1`
  color: ${Theme.red}
`