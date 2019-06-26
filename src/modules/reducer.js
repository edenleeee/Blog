import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  items: []
};

const postReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_POST: {

      let post = action.payload;
      let newState = _.cloneDeep(state);
      newState.currentPost = post;
      return newState;
    }

    default:
      return state;
  }
};

export default postReducer;