import React, { useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  min-height: 12vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background-color: white;
  transition: all 0.7s ease-in;
  position: fixed;
  box-shadow: 0 4px 2px -2px gray;

  /* .header {
    width: 100%;
    min-height: 6vh;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #eee;
    transition: all 0.7s ease-in;
  } */

  img {
    width: 150px;
    padding: 10px;
  }

  .scrolled {
    position: fixed;
    top: 0;
    left: 0;
  }
`

function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)

  const handleScroll = () => {
    const offset = window.scrollY
    console.log(offset)
    if (offset > 0) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  let navbarClasses = ['navbar']
  if (scrolled) {
    navbarClasses.push('scrolled')
  }

  console.log(scrolled)

  return (
    <Container>
      <header className={navbarClasses.join(' ')}>
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>
        {/* <nav className="navigation">
          <ul>
            <li>
              <a href="#post1">Home</a>
            </li>
            <li>
              <a href="#post2">Projects</a>
            </li>
            <li>
              <a href="#post3">Contact</a>
            </li>
          </ul>
        </nav> */}
      </header>
    </Container>
  )
}

export default Navbar
