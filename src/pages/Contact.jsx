import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  .title {
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 35px;
    padding: 40px;
    color: #313638;
  }

  .text {
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #313638;
    margin: 5px;
  }
  .text1 {
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    color: #313638;
    padding: 20px;
  }

  .contact-icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  .fa {
    padding: 20px;
    margin: 10px;
    font-size: 30px;
    width: 60px;
    text-align: center;
    text-decoration: none;
    color: black;
    &:hover {
      color: #e4b363;
    }
  }
`

function Contact() {
  return (
    <Container>
      <span id="contact" />
      <div className="title">Contact</div>
      <div className="text1">In case you want:</div>
      <div className="text">1. to say "Hey, what is going on?",</div>
      <div className="text">2. to give me plants,</div>
      <div className="text">3. to make a project together,</div>
      <div className="text1">you are in the correct place!</div>
      <div className="contact-icons">
        <a
          href="mailto:ingriddorio@gmail.com?subject=Olá"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-envelope"></i>
        </a>
        <a
          href="https://twitter.com/a_do_rio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-twitter"></i>
        </a>
        <a
          href="https://linkedin.com/in/ingriddorioschulze/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/ingriddorioschulze"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github"></i>
        </a>
      </div>
    </Container>
  )
}

export default Contact
