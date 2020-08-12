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
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${({ theme }) => theme.font.size.xl};
    padding: 40px;
    color: ${({ theme }) => theme.colors.onyx};
  }

  .text {
    font-family: 'Montserrat';
    font-weight: ${({ theme }) => theme.font.weight.normal};
    font-size: ${({ theme }) => theme.font.size.xs};
    text-align: center;
    color: ${({ theme }) => theme.colors.onyx};
    margin: 5px;
  }
  .text1 {
    font-family: 'Montserrat';
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    font-size: ${({ theme }) => theme.font.size.xs};
    text-align: center;
    color: ${({ theme }) => theme.colors.onyx};
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
    color: #313638;
    &:hover {
      color: #e4b363;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mb}) {
      width: 30px;
      padding: 15px;
    }
  }
`

function Contact() {
  return (
    <Container>
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
          href="https://twitter.com/dorioschulze"
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
