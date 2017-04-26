import React from 'react'
import NewRepo from './NewRepo'
import Repositories from './Repositories'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <header>
        <Link to="/" className="home" alt="home"><span className="icon-home"></span></Link>
        <Link to="/new" className="nav-link" alt="Add A Repo"><span className="icon-plus"></span></Link>
      </header>
      <section>
        <Route path="/new" component={NewRepo}/>
        <Route exact path="/" component={Repositories}/>
      </section>
    </div>
  </Router>
)

export default App
