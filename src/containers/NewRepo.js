import React from "react";
import Form from "./NewRepoForm";
import {graphql} from "react-apollo";
import {allRepoQuery} from "../queries";
import cookie from "react-cookies";

export const NewRepo = ({data}) => {
  const {allRepositories} = data;
  return (
    <div>
      <Form count={allRepositories ? allRepositories.length : 0} />
    </div>
  );
};

const queryOptions = {
  options: {
    variables: {
      id: cookie.load("openSaucedViewerId")
    }
  }
};
const NewRepoWithData = graphql(allRepoQuery, queryOptions)(NewRepo);

export default NewRepoWithData;
