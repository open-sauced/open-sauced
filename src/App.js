import React from 'react'
import Dashboard from './Dashboard'
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
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/new">Add A Repo</Link></li>
        <li><Link to="/repos">GitHub Repositories</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Dashboard}/>
      <Route path="/new" component={NewRepo}/>
      <Route path="/repos" component={Repositories}/>
    </div>
  </Router>
)

export default App
