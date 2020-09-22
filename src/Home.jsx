import React from 'react'
import styled from 'styled-components'

//#region styles
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;

  .name {
    font-family: 'Montserrat';
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: 60px;
    padding: 10px;
    color: ${({ theme }) => theme.colors.onyx};
    text-align: center;
  }

  .subtitle {
    padding: 10px;
    font-family: 'Montserrat';
    font-weight: ${({ theme }) => theme.font.weight.normal};
    font-size: ${({ theme }) => theme.font.size.xs};
    color: ${({ theme }) => theme.colors.onyx};
    line-height: 30px;
    text-align: center;
  }

  .description {
    font-family: 'Montserrat';
    font-weight: ${({ theme }) => theme.font.weight.normal};
    font-size: ${({ theme }) => theme.font.size.xxs};
    color: ${({ theme }) => theme.colors.onyx};
    line-height: 30px;
    text-align: center;
    width: 340px;
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
//#endregion

function Home() {
  return (
    <HomeContainer>
      <div className="name">Ing·rid</div>
      <div className="subtitle">[ˈɪŋɡrit]</div>
      <div className="subtitle">a name, from Old Norse: Ingvi</div>
      <div className="description">
        <div>1. Paulista based in Berlin; 2. Frontend Engineer;</div>
        <div>3. Can do some Design things;</div>
        <div>4. Brings people together; 5. Photogenic;</div>
        <div>6. Mother of plants; 7. Popcorn lover; </div>
        <div>8. Craftswoman.</div>
      </div>
      <div className="contact-icons">
        <a
          href="mailto:ingriddorio@gmail.com?subject=Olá! Hello! Hallo!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-envelope"></i>
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
    </HomeContainer>
  )
}

export default Home
