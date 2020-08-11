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
`
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 20vw;
  height: 550px;
  max-width: 380px;
  padding: 30px;
  background: #e4b363;
  padding: 25px;
  margin: 25px;
  border-radius: 4px;
  border: 1px #928a97;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  img {
    width: 100%;
    max-width: 500px;
    object-fit: cover;
    object-position: center;
    cursor: pointer;
    max-height: 460px;
    padding: 20px;
  }

  .name {
    font-size: 18px;
    font-weight: bold;
    padding: 20px;
    text-align: center;
  }

  .description {
    font-size: 16px;
    padding: 10px;
    text-align: center;
  }
`
const Link = styled.div`
  font-family: 'Montserrat';
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  font-size: 15px;
  color: #313638;
  cursor: pointer;
`

function Projects() {
  return (
    <Container>
      <div className="title">Projects</div>
      <CardContainer>
        <Link
          className="project-link"
          href="https://github.com/ingriddorioschulze/survivor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card>
            <img alt="survivor project" src="/survivor.png" />
            <div className="name">Survivor</div>
            <div className="description">
              An application built in React and Express that allows users to
              register their plants and set reminders to water them. The website
              has a search field for users to get information about other
              plants.
            </div>
            <div className="description">
              Technologies: Javascript, React, AWS, Node.js, Express.js,
              PostgreSQL
            </div>
          </Card>
        </Link>

        <Link
          className="project-link"
          href="https://github.com/ingriddorioschulze/retrato"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card>
            <img alt="retrato project" src="/retrato.png" />
            <div className="name">Retrato</div>
            <div className="description">
              Single-page website inspired by Instagram with the theme of
              culture and big cities. The application permits any user to post a
              picture with a title and description, and comment on images.{' '}
            </div>
            <div className="description">
              Technologies: Javascript, Handlebars, Node.js, Express.js,
              PostgreSQL, Vue.js, AWS S3
            </div>
          </Card>
        </Link>

        <Link
          className="project-link"
          href="https://github.com/ingriddorioschulze/popforpopcornlovers"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card>
            <img
              alt="pop for popcorn lovers project"
              src="/popforpopcornlovers.png"
            />
            <div className="name">POP for Popcorn Lovers</div>
            <div className="description">
              Social network made in React for people who love popcorn. The
              single-page website enable users to add a profile, picture, see
              online friends, chat, make posts and manage friend requests.
            </div>
            <div className="description">
              Technologies: Javascript, React, Redux, Express.js, AWS, Node.js,
              PostgreSQL, Socket.IO
            </div>
          </Card>
        </Link>

        <Link
          className="project-link"
          href="https://github.com/ingriddorioschulze/futurama-quotes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card>
            <img alt="futurama project" src="/futurama.png" />
            <div className="name">Futurama Quotes</div>
            <div className="description">
              Single-page application created in React for the Futurama fans.
              The application allow users to search for a favorite character and
              see their famous quotes.
            </div>
            <div className="description">
              Technologies: Javascript, React, Redux
            </div>
          </Card>
        </Link>
      </CardContainer>
    </Container>
  )
}

export default Projects
