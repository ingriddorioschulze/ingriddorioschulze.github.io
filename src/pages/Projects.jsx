import React from 'react'
import styled from 'styled-components'

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
    font-size: 20px;
    text-align: center;
    padding: 20px 45px 20px 45px;
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 180px;
    background: #ececeb;
    padding: 25px;
    margin: 25px;
    border: solid 4px #323232;
  }

  .img {
    height: 150px;
    width: 150px;
    margin: 15px;
    object-fit: contain;
    object-position: center;
    padding: 5px;
  }

  .name {
    font-size: 25px;
    font-weight: bold;
    margin: 10px;
    text-align: center;
  }
`

function Projects() {
  return (
    <Container>
      <div className="title">PROJECTS</div>
      <div className="card-container">
        <div className="card">
          <div className="name">survivor</div>
        </div>
        <div className="card">
          <div className="name">futurama</div>
        </div>
        <div className="card">
          <div className="name">popcornlovers</div>
        </div>
        <div className="card">
          <div className="name">retrato</div>
        </div>
      </div>
    </Container>
  )
}

export default Projects
