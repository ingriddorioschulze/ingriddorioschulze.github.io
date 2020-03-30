import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .name {
    font-family: 'Sunflower';
    font-size: 28px;
    padding: 10px;
  }
  .description {
    font-family: 'Montserrat';
    font-size: 20px;
    padding: 10px;
  }
`

function Home() {
  return (
    <Container>
      <div className="name">INGRID DO RIO SCHULZE</div>
      <div className="description">
        Paulista based in Berlin. Frontend Engineer and Designer. Mother of
        plants. Popcorn lover.
      </div>
    </Container>
  )
}

export default Home
