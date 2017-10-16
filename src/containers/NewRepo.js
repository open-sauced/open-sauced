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

const currentUser = localStorage.getItem("currentOpenSaucedUser");
const queryOptions = {
  options: {
    variables: {
      id: currentUser ? JSON.parse(currentUser)["id"] : ""
    }
  }
};
const NewRepoWithData = graphql(allRepoQuery, queryOptions)(NewRepo);

export default NewRepoWithData;
