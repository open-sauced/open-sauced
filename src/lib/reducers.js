import {useCallback} from "react";
import {usePersistedState} from "./hooks";

export function goalsReducer(state, action) {
  switch (action.type) {
    case "GET":
      return state.repository ? state : state.data.gitHub.viewer;
    case "UPDATE":
      return state;
    case "CREATE":
      return state.data.createRepository;
    default:
      throw new Error("No Action was provided.");
  }
}

export function usePersistentStateReducer(bucket, reducer) {
  const [state, setState] = usePersistedState(bucket);

  const dispatch = useCallback(
    action => {
      return setState(reducer(state, action));
    },
    [reducer, state],
  );

  return [state, dispatch];
}
