import React, {useState} from "react";
import api from "../lib/apiGraphQL";
import {Redirect} from "react-router";
import Button from "../styles/Button";
import {Link} from "react-router-dom";

function NewRepoForm() {
  const [id, setId] = useState({});
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const _handleSetUrl = e => {
    setUrl(e.target.value);
  };

  const _handleFetchRepoData = () => {
    const [_1, _2, _3, owner, repo] = url.split("/");
    if (!owner || !repo) {
      console.warn("Invalid GitHub repository url!");
    }

    //remove when switching to repo searching
    console.log(_1, _2, _3);

    api.fetchRepositoryData(owner, repo).then(response => {
      const data = response.data.gitHub.repositoryOwner.repository;
      const {id, url} = data;

      setId(id);
      setName(name);
      setUrl(url);
      setSubmitted(true);
    });
  };

  if (submitted) {
    return <Redirect to="/" />;
  }

  return (
    <div className="Form">
      <h1 className="title">Enter a GitHub URL</h1>
      <p>Add a url or full name for a GitHub repository</p>
      <div className="">
        <div name="">
          <input
            className="utility-input urlForm"
            type="url"
            onChange={_handleSetUrl}
            value={url}
            placeholder="https://github.com/babel/actions"
          />
          {name && (
            <Link to={`/repos/${name}/${id}`}>
              <Button disabled={!url}>explore {name} issues</Button>
            </Link>
          )}
          {!name && (
            <Button disabled={!url} onClick={_handleFetchRepoData}>
              Fetch repository data
            </Button>
          )}
        </div>
        <div className="shadow" />
      </div>
    </div>
  );
}

export default NewRepoForm;
