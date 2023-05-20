import { Action } from "./actions";
import { ActionTypes } from "./types";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initalState = {
  loading: false,
  error: null,
  data: []
}

const reducer = (
  state: RepositoriesState = initalState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionTypes.SEARCH_REPOSITORIES: {
      return { loading: true, error: null, data: [] };
    }

    case ActionTypes.SEARCH_REPOSITORIES_SUCCESS: {
      return { loading: false, error: null, data: action.payload };
    }

    case ActionTypes.SEARCH_REPOSITORIES_ERROR: {
      return { loading: false, error: action.payload, data: [] };
    }

    default:
      return state;
  }
};

export default reducer;
