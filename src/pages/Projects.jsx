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
    color: ${({ theme }) => theme.colors.mineShaft};
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
  }

  .project-link {
    font-family: 'Montserrat';
    font-weight: 400;
    text-align: center;
    text-decoration: none;
    font-size: 15px;
    color: #323232;
    cursor: pointer;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 160px;
    background: #ffa501;
    padding: 25px;
    margin: 25px;
    border: solid 4px #323232;
    :hover {
      border: solid 5px #323232;
    }
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
    font-size: 18px;
    font-weight: bold;
    margin: 10px;
    text-align: center;
  }

  .description {
    font-size: 16px;
    margin: 10px;
    text-align: center;
  }
`

function Projects() {
  return (
    <Container>
      <div className="card-container">
        <a
          class="project-link"
          href="https://github.com/ingriddorioschulze/survivor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card">
            <div className="name">Survivor</div>
            <div className="description">
              App to remember users to water their plants
            </div>
          </div>
        </a>

        <a
          class="project-link"
          href="https://github.com/ingriddorioschulze/retrato"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card">
            <div className="name">Retrato</div>
            <div className="description">
              App bla bla bla bla bla bla bla bla
            </div>
          </div>
        </a>

        <a
          class="project-link"
          href="https://github.com/ingriddorioschulze/futurama-quotes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card">
            <div className="name">Futurama Quotes</div>
            <div className="description">
              App bla bla bla bla bla bla bla bla
            </div>
          </div>
        </a>

        <a
          class="project-link"
          href="https://github.com/ingriddorioschulze/popforpopcornlovers"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card">
            <div className="name">POP for Popcorn Lovers</div>
            <div className="description">
              App bla bla bla bla bla bla bla bla
            </div>
          </div>
        </a>
      </div>
    </Container>
  )
}

export default Projects
