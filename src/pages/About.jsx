import React from 'react'
import styled from 'styled-components'

// #startregion
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 25px;

  .title {
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 35px;
    padding: 40px;
    color: ${({ theme }) => theme.colors.liquorice};
  }

  .text {
    width: 600px;
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    padding: 40px 200px 20px 200px;
    color: ${({ theme }) => theme.colors.liquorice};
  }

  .me {
    width: 200px;
    height: 200px;
    border-radius: 120px;
    border: 4px dotted #ececeb;
    object-fit: cover;
    object-position: center;
    padding: 10px;
    :hover {
      border: 4px dotted #323232;
    }
  }
`
//#endregion

function About() {
  return (
    <Container>
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
