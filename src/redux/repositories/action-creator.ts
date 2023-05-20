import axios from "axios";
import { ActionTypes } from "./types";
import { Action } from "./actions";
import { Dispatch } from "redux";

const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionTypes.SEARCH_REPOSITORIES
      })
    
      let url = `https://registry.npmjs.org/-/v1/search`;

      let { data } = await axios.get(url, {
        params: {
          text: term,
        },
      });

      let names = data.objects.map((result: any) => result.package.name);

      dispatch({
        type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
        payload: names
      });

    } catch (e: any) {
        dispatch({
            type: ActionTypes.SEARCH_REPOSITORIES_ERROR,
            payload: e.message
        })
    }
  };
};

export default searchRepositories;
