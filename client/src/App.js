import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'

import Footer from './components/Footer'
import Home from './components/pages/Home'
import Learn from './components/pages/Learn'
import Explore from './components/pages/Explore'
import Breathe from './components/pages/Breathe'
import NotFound from './components/pages/NotFound'
import FungusScreen from './components/pages/FungusScreen'


function App() {
  return (
    <Router>
      <Header />
      <Route path='/' component={Home} exact />
      <Switch>
        <Route path='/learn' component={Learn} />
        <Route path='/explore' component={Explore} />
        <Route path='/breathe' component={Breathe} />
        <Route path='/fungus/:id' component={FungusScreen} />
        <Route path='/notfound' component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
