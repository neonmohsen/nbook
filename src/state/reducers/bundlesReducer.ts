import produce from "immer";
import { Actions } from "../actions";
import { ActionType } from "../actions-types";

interface BundleState {
  [key: string]: {
    code: string;
    error: string;
  };
}

const initialState: BundleState = {};

const reducers = produce(
  (state: BundleState = initialState, action: Actions) => {
    switch (action.type) {
      case ActionType.BUNLDE_CREATED:
        return state;

      default:
        return state;
    }
  }
);

export default reducers;
