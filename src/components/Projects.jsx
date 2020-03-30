import React from 'react'
import styled from 'styled-components'

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

function Projects() {
  return (
    <Container>
      <div className="title">projects</div>
      <div className="text"></div>
    </Container>
  )
}

export default Projects
