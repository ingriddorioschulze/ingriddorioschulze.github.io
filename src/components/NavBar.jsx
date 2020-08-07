import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  min-height: 10vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ef6461;
  transition: all 0.7s ease-in;
  position: fixed;
  box-shadow: 0 4px 2px -2px transparent;

  img {
    width: 120px;
  }
`

function Navbar() {
  return (
    <Container>
      <img src="/logo1.png" alt="logo" />
    </Container>
  )
}

export default Navbar
