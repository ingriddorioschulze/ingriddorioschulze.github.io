import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from 'react-router-dom'

import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Projects from './components/Projects'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  .header {
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    padding: 50px;
  }
`
const StyledLink = styled(NavLink)`
  font-family: 'Sunflower';
  font-size: 25px;
  color: black;
  text-decoration: none;
`

function App() {
  return (
    <Container>
      <Router>
        <div className="header">
          <StyledLink to="/">home</StyledLink>
          <StyledLink to="/about">about</StyledLink>
          <StyledLink to="/projects">projects</StyledLink>
          <StyledLink to="/contact">contact</StyledLink>
        </div>
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
export default App
