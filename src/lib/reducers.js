import {usePersistentState} from "./hooks";

export function usePersistentStateReducer(bucket, reducer) {
  const [state, setState] = usePersistentState(bucket);

  const dispatch = useCallback(
    action => {
      return setState(reducer(state, action));
    },
    [reducer, state],
  );

  return [state, dispatch];
}
