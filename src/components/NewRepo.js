import React from "react";
import Form from "./NewRepoForm";
import {graphql} from "react-apollo";
import {allRepoQuery} from "../queries";

export const NewRepo = ({data}) => {
  const {allRepositories} = data;
  return (
    <div>
      <Form count={allRepositories ? allRepositories.length : 0} />
    </div>
  );
};

const NewRepoWithData = graphql(allRepoQuery)(NewRepo);

export default NewRepoWithData;
