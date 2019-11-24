import {useApolloClient} from "@apollo/react-hooks";
import useSWR from "swr";
import api from "./apiGraphQL";

export function usePersistedState(bucket) {
  const client = useApolloClient();
  const query = queryMap[bucket];
  const {data} = useSWR({}, query);

  // TODO: implement reducer when another query is added.
  const state = data && data.data.gitHub.viewer;

  const setState = value => {
    try {
      const data = {
        [bucket]: {
          __typename: bucket,
          ...value,
        },
      };
      client.writeQuery({query, data});
      console.log(client);
    } catch (error) {
      console.error(error);
    }
  };

  return [state, setState];
}

const queryMap = {
  goalsState: api.fetchGoalsQuery,
  // more buckets can go here...
};
