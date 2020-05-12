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
  justify-content: space-between;
  align-items: center;
  padding: 30px;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mb}) {
    display: flex;
    flex-direction: column;
  }
`
const Logo = styled.img`
  width: 20%;
`
const Links = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
`

const StyledLink = styled(NavLink)`
  font-family: 'Montserrat';
  font-size: 20px;
  font-weight: 600;
  color: black;
  text-decoration: none;
  padding: 10px;
  color: ${({ theme }) => theme.colors.liquorice};
  &:hover {
    color: ${({ theme }) => theme.colors.webOrange};
  }
`

function Header(theme) {
  return (
    <Container>
      <Router>
        <StyledHeader>
          <Logo alt="logo" src="logo.png" />
          <Links>
            <StyledLink activeStyle={{ color: '#ECECEB' }} to="/">
              home
            </StyledLink>
            <StyledLink activeStyle={{ color: '#FFA501' }} to="/about">
              about
            </StyledLink>
            <StyledLink activeStyle={{ color: '#FFA501' }} to="/projects">
              projects
            </StyledLink>
            <StyledLink activeStyle={{ color: '#FFA501' }} to="/contact">
              contact
            </StyledLink>
          </Links>
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
