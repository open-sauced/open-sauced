import {fetchGoalsQuery} from "../lib/apiGraphQL";
import {useApolloClient, useQuery} from "@apollo/react-hooks";

export function usePersistedState(bucket) {
  const client = useApolloClient();
  const query = queryMap[bucket];
  console.log(query);
  const queryResult = useQuery(query).data;
  const state = queryResult && queryResult[bucket];

  const setState = value => {
    try {
      const data = {
        [bucket]: {
          __typename: bucket,
          ...value,
        },
      };
      client.writeQuery({query, data});
    } catch (error) {
      console.error(error);
    }
  };

  return [state, setState];
}

const queryMap = {
  goalsState: fetchGoalsQuery,
  // more buckets can go here...
};
