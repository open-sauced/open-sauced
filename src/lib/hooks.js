import {fetchGoalsQuery} from "../lib/apiGraphQL";
import {useApolloClient, useQuery} from "@apollo/react-hooks";

export function usePersistentState(bucket) {
  const client = useApolloClient();
  const query = queryMap[bucket];
  // useQuery is a hook supplied by Apollo Client.
  // Using this hook allows the component to watch for updates to the state
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
      // Add whatever custom error handling your application needs...
      console.error(error);
    }
  };

  return [state, setState];
}

const queryMap = {
  goalsState: fetchGoalsQuery,
  // more buckets can go here...
};
