enum Actions {
  SET_LANGUAGE = "SET_LANGUAGE",
}

//////////////=======Language=========//////////////

interface SetLanguage {
  type: typeof Actions.SET_LANGUAGE;
  payload: any;
}

//////////////================//////////////

export type ActionDispatchTypes = SetLanguage;

export default Actions;
