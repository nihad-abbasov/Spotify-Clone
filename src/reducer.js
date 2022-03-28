export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token: null REMOVE BELOW ONE AND ASSIGN IT TO NULL AGAIN 
  // token:"BQCEb1Iw2cYUMQdeCWJ38W0cfCsl5crIjxdwVQjHPdJhyAVh4KaqLUeOOMsb6Mh6WnXc8DnP-AK1ZKCF32WBR0eNAD-aqySefdEyOmgMB7mnOkGeJhx1zAOjHs9PYzP0qG6RguIjbU-H26zMbycKpPyrwea0dvN0SuhHD4xaMTFjpub8vlwy",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly
      }

    default:
      return state;
  }
};

export default reducer;
