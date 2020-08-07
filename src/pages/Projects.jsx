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
  justify-content: center;
  width: 350px;
  height: 420px;
  background: #e4b363;
  padding: 25px;
  margin: 25px;
  border-radius: 4px;

  .img {
    width: 100%;
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
            <div className="name">Survivor</div>
            <div className="description">
              An application built in React and Express that allows users to
              register their plants and set reminders to water them. The website
              has a search field for users to get information about other
              plants.
            </div>
            <div className="technologies">
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
            <div className="name">Retrato</div>
            <div className="description">
              Single-page website inspired by Instagram with the theme of
              culture and big cities. The application permits any user to post a
              picture with a title and description, and comment on images.{' '}
            </div>
            <div className="technologies">
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
            <div className="name">POP for Popcorn Lovers</div>
            <div className="description">
              Social network made in React for people who love popcorn. The
              single-page website enable users to add a profile, picture, see
              online friends, chat, make posts and manage friend requests.
            </div>
            <div className="technologies">
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
            <div className="name">Futurama Quotes</div>
            <div className="description">
              Single-page application created in React for the Futurama fans.
              The application allow users to search for a favorite character and
              see their famous quotes.
            </div>
            <div className="technologies">
              Technologies: Javascript, React, Redux
            </div>
          </Card>
        </Link>
      </CardContainer>
    </Container>
  )
}

export default Projects
