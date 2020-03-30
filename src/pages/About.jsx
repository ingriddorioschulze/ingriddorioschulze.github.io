import React from 'react'
import styled from 'styled-components'

// #startregion
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-family: 'Paytone One';
    font-size: 40px;
    padding: 40px;
    color: ${({ theme }) => theme.colors.webOrange};
  }

  .text {
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    padding: 40px 200px 20px 200px;
    color: ${({ theme }) => theme.colors.webOrange};
  }

  .me {
    width: 200px;
    height: 200px;
    border-radius: 120px;
    border: 4px dotted #323232;
    object-fit: cover;
    object-position: center;
    padding: 10px;
  }
`
//#endregion

function About() {
  return (
    <Container>
      <div className="title">ABOUT</div>
      <img className="me" alt="Ingrid" src="me.jpg" />
      <div className="text">
        While working in Content Management in Brazil and Germany, I develop a
        keen interest in technology. My curiosity lead me to dedicate myself to
        learn how to code. As a developer, I strive to create and implement
        functional programs with clean and efficient design and code.
      </div>
    </Container>
  )
}

export default About
