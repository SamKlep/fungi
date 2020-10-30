import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/ui/Header'

import Footer from './components/ui/Footer'
import Home from './components/pages/Home'
import Learn from './components/pages/Info'
import Breathe from './components/pages/Breathe'
import NotFound from './components/pages/NotFound'
import FungusScreen from './components/pages/FungusScreen'
import Links from './components/pages/Links'
import History from './components/pages/History'
import Edible from './components/pages/Edible'
import Medicinal from './components/pages/Medicinal'
import Identify from './components/pages/Identify'
import Poisonous from './components/pages/Poisonous'
import AllFungi from './components/pages/AllFungi'

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/info' component={Learn} />
        <Route path='/history' component={History} />
        <Route path='/links' component={Links} />
        <Route path='/edible' component={Edible} />
        <Route path='/medicinal' component={Medicinal} />
        <Route path='/poisonous' component={Poisonous} />
        <Route path='/identify' component={Identify} />
        <Route path='/explore' component={AllFungi} />
        <Route path='/breathe' component={Breathe} />
        <Route path='/fungus/:id' component={FungusScreen} />
        <Route path='*' component={NotFound} />
        <Route component={NotFound} />
      </Switch>
      <br />

      <Footer />
    </Router>
  )
}

export default App
