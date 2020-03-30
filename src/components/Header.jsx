import React from 'react'
import styled from 'styled-components'

import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from 'react-router-dom'

import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Projects from '../pages/Projects'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  padding: 50px;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mb}) {
    display: flex;
    flex-direction: column;
  }
`

const StyledLink = styled(NavLink)`
  font-family: 'Paytone One';
  font-size: 25px;
  color: black;
  text-decoration: none;
  padding: 10px;
  color: ${({ theme }) => theme.colors.desertStorm};
  &:hover {
    background-color: ${({ theme }) => theme.colors.mineShaft};
    color: ${({ theme }) => theme.colors.webOrange};
  }
`

function Header() {
  return (
    <Container>
      <Router>
        <StyledHeader>
          <StyledLink to="/">home</StyledLink>
          <StyledLink to="/about">about</StyledLink>
          <StyledLink to="/projects">projects</StyledLink>
          <StyledLink to="/contact">contact</StyledLink>
        </StyledHeader>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/projects" component={Projects}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </Router>
    </Container>
  )
}

export default Header
