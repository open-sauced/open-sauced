import useSWR, {mutate} from "swr";
import api from "./apiGraphQL";

export function usePersistedState(bucket) {
  const query = queryMap[bucket];
  const {data, error} = useSWR(bucket, query, {suspense: true});

  const state = {...data, error};

  const setState = value => {
    try {
      mutate(bucket, value);
    } catch (error) {
      console.error(error);
    }
  };

  return [state, setState];
}

const queryMap = {
  goalsState: api.fetchGoalsQuery,
  // TODO: more buckets can go here...
};
