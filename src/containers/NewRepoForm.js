import React, {useState, useRef} from "react";
import api from "../lib/apiGraphQL";
import Button from "../styles/Button";
import {Link} from "react-router-dom";

function NewRepoForm() {
  const urlRef = useRef();
  const [name, setName] = useState("");

  const _handleFetchRepoData = () => {
    const [owner, repo] = urlRef.current.value.split("/");

    if (!owner || !repo) {
      console.warn("Invalid GitHub repository!");
    }

    api.fetchRepositoryData(owner, repo).then(response => {
      const data = response.data.gitHub.repositoryOwner.repository;
      const {nameWithOwner} = data;

      urlRef.current.value = nameWithOwner;
      setName(nameWithOwner);
    });
  };

  return (
    <div className="Form">
      <h1 className="title">Enter a GitHub URL</h1>
      <p>Add the full name for a GitHub repository</p>
      <div className="">
        <div name="">
          <input className="utility-input urlForm" type="text" ref={urlRef} placeholder="vuejs/vue" />
          {name && (
            <Link to={`/repos/${name}`}>
              <Button disabled={!urlRef}>explore issues</Button>
            </Link>
          )}
          {!name && (
            <Button disabled={!urlRef} onClick={_handleFetchRepoData}>
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
