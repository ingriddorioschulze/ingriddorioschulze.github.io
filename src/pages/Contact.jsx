import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 25px;

  .text {
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    color: ${({ theme }) => theme.colors.licorice};
  }
`

function Contact() {
  return (
    <Container>
      <div className="text">In case you want:</div>
      <div className="text">
        1. to say "Hey, what is going on?", 2. to give me plants, 3. to make a
        project together,
      </div>
      <div className="text">you are in the correct place!</div>
      <div>icones</div>
    </Container>
  )
}

export default Contact
