import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = {
id: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case  EMAIL_CHANGED:
      //console.log(action);
      return { ...state, id: action.payload };

      default:
        return state;
    }
};
