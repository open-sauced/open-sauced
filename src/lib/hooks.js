import {useApolloClient, useQuery} from "@apollo/react-hooks";
import {gql} from "apollo-boost";

const fetchGoalsQuery = gql`
  query FetchGoals($name: String!) {
    gitHub {
      viewer {
        repository(name: $name) {
          id
          issues(first: 10, states: OPEN, orderBy: {direction: DESC, field: CREATED_AT}) {
            totalCount
            nodes {
              id
              title
              body
              number
              labels(first: 3) {
                nodes {
                  color
                  name
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`;

export function usePersistedState(bucket) {
  const client = useApolloClient();
  const query = queryMap[bucket];
  // query works
  console.log("query", useQuery(query, {name: "open-sauced-goals"}));
  const {data, error} = useQuery(query, {name: "open-sauced-goals"});

  // data and error are undefined
  console.log("error", error);
  console.log("data", data);
  const state = data && data[bucket];

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
