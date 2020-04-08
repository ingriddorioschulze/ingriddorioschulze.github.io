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
    font-weight: 700;
    font-size: 10rem;
    padding: 10px;
    color: ${({ theme }) => theme.colors.desertStorm};
    text-align: center;
  }

  .description {
    width: 600px;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 18px;
    padding: 4px;
    color: ${({ theme }) => theme.colors.desertStorm};
    text-align: center;
    line-height: 30px;
  }
`

function Home() {
  return (
    <Container>
      <div className="name">Ing.rid</div>
      <div className="description">a feminin name, from Old Norse: Ingvi</div>
      <div className="description">
        1. Paulista based in Berlin; 2. Frontend Engineer and Graphic Designer;
        3. Mother of plants; 4. Popcorn lover; 5. Craftswoman.
      </div>
    </Container>
  )
}

export default Home
