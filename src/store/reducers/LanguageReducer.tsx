import Actions, { ActionDispatchTypes } from "../actions/actions";

const initialState = {
  language: {},
};

const languageReducer = (
  state: any = initialState,
  action: ActionDispatchTypes
) => {
  switch (action.type) {
    case Actions.SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    ////////////////////////////========Default=========/////////////////
    default:
      return state;
  }
};

export default languageReducer;
