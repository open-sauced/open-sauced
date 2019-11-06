import React, {useRef} from "react";
import {InputButton} from "../styles/Button";
import Input from "../styles/Input";
import {CardPadding} from "../styles/Card";
import {Flex} from "../styles/Grid";
import api from "../lib/apiGraphQL";

function AddRepoForm({goalsId}) {
  const urlRef = useRef(null);

  const _handleGoalCreation = () => {
    const [owner, repo] = urlRef.current.value.split("/");

    if (!owner || !repo) {
      urlRef.current.focus();
      console.warn("Invalid GitHub repository!");
    }

    // catch full URLs
    const nameWithOwner = urlRef.current.value.replace("https://github.com/");

    api
      .createGoal(goalsId, nameWithOwner, null)
      .then(response => {
        console.log(response);
      })
      .catch(e => console.error(e));
  };

  return (
    <CardPadding>
      <Flex>
        <Input aria-label="repo name  with owner" type="text" ref={urlRef} placeholder="owner/repo" />
        <InputButton primary onClick={_handleGoalCreation}>
          add
        </InputButton>
      </Flex>
    </CardPadding>
  );
}

export default AddRepoForm;
