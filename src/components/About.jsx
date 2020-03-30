import React from 'react'
import styled from 'styled-components'

// #startregion
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-family: 'Sunflower';
    font-size: 28px;
    padding: 10px;
  }

  .text {
    font-family: 'Montserrat';
    font-size: 20px;
    text-align: center;
    padding: 20px 45px 20px 45px;
  }
`
//#endregion

function About() {
  return (
    <Container>
      <div className="title">about</div>
      <div className="text">
        While working in Content Management in Brazil and Germany, I develop a
        keen interest in technology. My curiosity lead me to dedicate myself to
        learn how to code. As a developer, I strive to create and implement
        functional programs with clean and efficient design and code.
      </div>
      <div className="pic"></div>
    </Container>
  )
}

export default About
