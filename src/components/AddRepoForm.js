import React, {useRef} from "react";
// import api from "../lib/apiGraphQL";
import {InputButton} from "../styles/Button";
import Input from "../styles/Input";
import {CardPadding} from "../styles/Card";
import {Flex} from "../styles/Grid";

function AddRepoForm() {
  const urlRef = useRef();
  // const [name, setName] = useState("");

  // const _handleFetchRepoData = () => {
  //   const [owner, repo] = urlRef.current.value.split("/");

  //   if (!owner || !repo) {
  //     console.warn("Invalid GitHub repository!");
  //   }

  //   api.fetchRepositoryData(owner, repo).then(response => {
  //     const data = response.data.gitHub.repositoryOwner.repository;
  //     const {nameWithOwner} = data;

  //     urlRef.current.value = nameWithOwner;
  //     setName(nameWithOwner);
  //   });
  // };

  return (
    <CardPadding>
      <Flex>
        <Input type="text" ref={urlRef} placeholder="vuejs/vue" />
        <InputButton className="input" primary onClick={() => console.log("clicked")}>
          add repo
        </InputButton>
      </Flex>
    </CardPadding>
  );
}

export default AddRepoForm;

