import React, {useRef, useState} from "react";
import {InputButton} from "../styles/Button";
import Input from "../styles/Input";
import {CardPadding} from "../styles/Card";
import {Flex} from "../styles/Grid";
import api from "../lib/apiGraphQL";
import {isValidRepoUrl} from "../lib/util";
import {repoStatusCode} from "../lib/repoStatusCode";
import {ErrorMessage} from "../styles/Typography";

function AddRepoForm({goalsId, onGoalAdded}) {
  const urlRef = useRef(null);
  const [error, setError] = useState(null);

  const _handleGoalCreation = async(event) => {
    event.preventDefault();
    if (!urlRef.current.value) {
      urlRef.current.focus();
      console.warn("required");
      return;
    }

    const [isValid, repoUrl] = isValidRepoUrl(urlRef.current.value.replace(/\s+/g, ""));
    const statusCode = await repoStatusCode(repoUrl);

    if (!isValid) {
      urlRef.current.focus();
      setError("Invalid GitHub repository!");
      return;
    }

    if (statusCode === 404) {
      urlRef.current.focus();
      setError("Repository not found!");
      return;
    }

    if (statusCode === 301) {
      urlRef.current.focus();
      setError("Repository has been moved to another location!");
      return;
    }
    api
      .createGoal(goalsId, repoUrl, null)
      .then(response => {
        onGoalAdded(response.data.gitHub.createIssue.issue);
        urlRef.current.value = "";
        urlRef.current.focus();
        setError(null);
      })
      .catch(e => console.error(e));
  };

  return (
    <form onSubmit={_handleGoalCreation}>
      <CardPadding>
        <Flex>
          <Input aria-label="repo name with owner" type="text" ref={urlRef} placeholder="owner/repo" />
          <InputButton type="submit" primary>
            Add
          </InputButton>
        </Flex>
        <ErrorMessage>{error}</ErrorMessage>
      </CardPadding>
    </form>
  );
}

export default AddRepoForm;
