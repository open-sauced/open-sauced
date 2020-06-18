import {useCallback} from "react";
import {usePersistedState} from "./hooks";

export const actions = {
  GET: "GET",
  UPDATE: "UPDATE",
  CREATE: "CREATE"
};

export function goalsReducer(state, action) {
  switch (action.type) {
    case actions.GET:
      return state.repository ? state : state.data.gitHub.viewer;
    case actions.UPDATE:
      return state;
    case actions.CREATE:
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
