import React, {useRef, useState} from "react";
import {InputButton} from "../styles/Button";
import Input from "../styles/Input";
import {CardPadding} from "../styles/Card";
import {Flex} from "../styles/Grid";
import api from "../lib/apiGraphQL";
import {isValidRepoUrl} from "../lib/util";
import {repoStatusCode} from "../lib/repoStatusCode";
import {ErrorMessage} from "../styles/Typography";

function AddRepoForm({goalsId, onGoalAdded, goals}) {
  const urlRef = useRef(null);
  const submitBtnRef = useRef(null);
  const [error, setError] = useState(null);

  const _handleGoalCreation = async(event) => {
    event.preventDefault();
    if (!urlRef.current.value) {
      urlRef.current.focus();
      console.warn("required");
      return;
    }

    const [isValid, repoUrl] = isValidRepoUrl(urlRef.current.value.replace(/\s+/g, ""));
    const [statusCode, newFullName] = await repoStatusCode(repoUrl);
    const goalExists = goals.nodes.find(goal => goal.full_name.toLowerCase() === repoUrl);

    if (!isValid) {
      urlRef.current.focus();
      setError("Invalid GitHub repository!");
      return;
    }

    if (goalExists) {
      urlRef.current.focus();
      setError("Already exists!");
      return;
    }

    if (statusCode === 404) {
      urlRef.current.focus();
      setError("Repository not found!");
      return;
    }

    if (statusCode === 301) {
      urlRef.current.value = newFullName;
      urlRef.current.focus();
      setError(`Repository has been renamed to ${newFullName} and we have changed the input below.`);
      return;
    }
    submitBtnRef.current.disabled = true;
    api
      .createGoal(goalsId, repoUrl, null)
      .then(response => {
        onGoalAdded(response.data.gitHub.createIssue.issue);
        urlRef.current.value = "";
        urlRef.current.focus();
        setError(null);
      })
      .catch(e => console.error(e))
      .finally(() => {
        submitBtnRef.current.disabled = false;
      });
  };

  return (
    <form onSubmit={_handleGoalCreation}>
      <CardPadding style={{paddingBottom: 0}}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Flex>
          <Input aria-label="repo name with owner" type="text" ref={urlRef} placeholder="owner/repo" />
          <InputButton type="submit" ref={submitBtnRef} primary>
            Add
          </InputButton>
        </Flex>
      </CardPadding>
    </form>
  );
}

export default AddRepoForm;
