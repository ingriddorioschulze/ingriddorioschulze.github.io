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
`

function Presentation() {
  return (
    <Container>
      <ContentContainer>
        <div className="name">Ing·rid</div>
        <div className="subtitle">[ˈɪŋɡrit]</div>
        <div className="subtitle">a name, from Old Norse: Ingvi</div>
        <div className="description">
          1. Paulista based in Berlin; 2. Frontend Engineer; 3. Can be called a
          Graphic Designer; 4. Brings people together; 5. Photogenic; 6. Mother
          of plants; 7. Popcorn lover; 8. Craftswoman.
        </div>
      </ContentContainer>
    </Container>
  )
}

export default Presentation
