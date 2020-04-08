import React from 'react'
import styled from 'styled-components'

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
    color: ${({ theme }) => theme.colors.desertStorm};
  }

  .text {
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    padding: 40px 200px 20px 200px;
    color: ${({ theme }) => theme.colors.desertStorm};
  }
`

function Contact() {
  return (
    <Container>
      <div className="title">CONTACT</div>
      <div className="text"></div>
    </Container>
  )
}

export default Contact
