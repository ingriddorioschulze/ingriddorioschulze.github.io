import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-height: 8vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.fireOpal};
  transition: all 0.7s ease-in;
  position: fixed;
  box-shadow: 0 4px 2px -2px ${({ theme }) => theme.colors.alabaster};

  img {
    width: 120px;
  }
`

function Navbar() {
  return (
    <Container>
      <img src="/logo.png" alt="logo" />
    </Container>
  )
}

export default Navbar
