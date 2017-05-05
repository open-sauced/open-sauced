import React from 'react'
import {Link} from 'react-router-dom'

const Instructions = ({allRepositories}) => {
  return allRepositories && allRepositories.length > 0 ?
    <p>Select a repo to see details.</p>
      : <Link to="/new" alt="Add A Repo">
          <button className="button-ui-primary"><span className="icon-plus"></span>Track you first Repository</button>
        </Link>
}

export default Instructions;
