import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;

  .name {
    width: 600px;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 60px;
    padding: 10px;
    color: ${({ theme }) => theme.colors.liquorice};
    text-align: center;
  }

  .subtitle {
    width: 600px;
    padding: 20px;
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.liquorice};
    line-height: 30px;
    text-align: center;
  }

  .description {
    width: 600px;
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.liquorice};
    line-height: 30px;
    text-align: center;
  }
`

function Home() {
  return (
    <Container>
      <div className="name">Ing.rid</div>
      <div className="subtitle">a feminin name, from Old Norse: Ingvi</div>
      <div className="description">
        1. Paulista based in Berlin; 2. Frontend Engineer;
      </div>
      <div className="description">
        3. Can be called a Graphic Designer; 4. Brings people together;
      </div>
      <div className="description">
        5. Photogenic; 6. Mother of plants; 7. Popcorn lover; 8. Craftswoman.
      </div>
    </Container>
  )
}

export default Home
