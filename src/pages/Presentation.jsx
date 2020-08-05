import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .name {
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 60px;
    padding: 10px;
    color: #1a1110;
    text-align: center;
  }

  .subtitle {
    padding: 20px;
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 15px;
    color: #1a1110;
    line-height: 30px;
    text-align: center;
  }

  .description {
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 15px;
    color: #1a1110;
    line-height: 30px;
    text-align: center;
  }
`

function Presentation() {
  return (
    <Container>
      <ContentContainer>
        <div className="name">Ing·rid</div>
        <div className="subtitle">a name, from Old Norse: Ingvi</div>
        <div className="description">
          1. Paulista based in Berlin; 2. Frontend Engineer;
        </div>
        <div className="description">
          3. Can be called a Graphic Designer; 4. Brings people together;
        </div>
        <div className="description">
          5. Photogenic; 6. Mother of plants; 7. Popcorn lover; 8. Craftswoman.
        </div>
      </ContentContainer>
    </Container>
  )
}

export default Presentation
