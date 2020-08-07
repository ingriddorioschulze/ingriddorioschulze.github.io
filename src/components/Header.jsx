import React from 'react'
import styled from 'styled-components'

import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from 'react-router-dom'

import Contact from '../pages/Contact'
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
`
const Logo = styled.img`
  width: 100px;
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
  color: #1a1110;
  &:hover {
    color: #ffa501;
  }
`

function Header() {
  return (
    <Container>
      <Router>
        <StyledHeader>
          <StyledLink to="/">
            <Logo alt="logo" src="logo.png" />
          </StyledLink>
          <Links>
            <StyledLink activeStyle={{ color: '#ECECEB' }} to="#home">
              home
            </StyledLink>
            <StyledLink activeStyle={{ color: '#FFA501' }} to="#projects">
              projects
            </StyledLink>
            <StyledLink activeStyle={{ color: '#FFA501' }} to="#contact">
              contact
            </StyledLink>
          </Links>
        </StyledHeader>
        <Switch>
          <Route path="/projects" component={Projects}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </Router>
    </Container>
  )
}

export default Header
