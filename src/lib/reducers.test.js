import {goalsReducer, usePersistentStateReducer} from "../lib/reducers";
import {data} from "../tests/mocks";

const state = {data};

describe("goalsReducer", () => {
  it("should successfully reduce the goals data with GET action type", () => {
    expect(goalsReducer(state, {type: "GET"})).toMatchObject({});
  });

  it("should successfully reduce the goals data with UPDATE action type", () => {
    expect(goalsReducer(state, {type: "UPDATE"})).toMatchObject(state);
  });

  it("should successfully not error on CREATE action type", () => {
    expect(goalsReducer(state, {type: "CREATE"})).not.toThrow();
  });

  it("should error on no action type", () => {
    try {
      goalsReducer(state, {});
    } catch (e) {
      expect(e).toEqual(new Error("No Action was provided."));
    }
  });
});
