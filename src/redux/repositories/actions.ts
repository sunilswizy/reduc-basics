import { ActionTypes } from "./types";

interface SearchRepositoriesActions {
  type: ActionTypes.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessActions {
  type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesErrorActions {
  type: ActionTypes.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchRepositoriesActions
  | SearchRepositoriesSuccessActions
  | SearchRepositoriesErrorActions;


// every action will have their own interface