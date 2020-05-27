import React, {useRef} from "react";
import {InputButton} from "../styles/Button";
import Input from "../styles/Input";
import {CardPadding} from "../styles/Card";
import {Flex} from "../styles/Grid";
import api from "../lib/apiGraphQL";
import {isValidRepoUrl} from "../lib/util";

function AddRepoForm({goalsId, onGoalAdded}) {
  const urlRef = useRef(null);

  const _handleGoalCreation = (event) => {
    event.preventDefault();
    if (!urlRef.current.value) {
      urlRef.current.focus();
      console.warn("required");
      return;
    }

    const [isValid, repoUrl] = isValidRepoUrl(urlRef.current.value);
    if (!isValid) {
      urlRef.current.focus();
      console.warn("Invalid GitHub repository!");
      return;
    }
    api
      .createGoal(goalsId, repoUrl, null)
      .then(response => {
        onGoalAdded(response.data.gitHub.createIssue.issue);
        urlRef.current.value = "";
        urlRef.current.focus();
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
      </CardPadding>
    </form>
  );
}

export default AddRepoForm;
