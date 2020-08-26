// APOLLO CLIENT ──────────────────────────────────────────────────────────
import ApolloClient, { gql } from 'apollo-boost';

// CONSTS ─────────────────────────────────────────────────────────────────
let initialData = {
  input: '',
  fetching: false,
  info: {},
  data: [],
  error: '',
};

let client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
});

let CLEAR_DATA = 'CLEAR_DATA';
let GET_DATA = 'GET_DATA';
let GET_CHARS_DATA_SUCCESS = 'GET_CHARS_DATA_SUCCESS';
let GET_LOCATIONS_DATA_SUCCESS = 'GET_LOCATIONS_DATA_SUCCESS';
let GET_EPISODES_DATA_SUCCESS = 'GET_EPISODES_DATA_SUCCESS';
let GET_DATA_ERROR = 'GET_DATA_ERROR';

// REDUCER
export default function reducer(state = initialData, action: any) {
  switch (action.type) {
    case GET_DATA:
      return { ...state, fetching: true };
    case GET_CHARS_DATA_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: action.payload.results,
        info: action.payload.info,
      };
    case GET_LOCATIONS_DATA_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: action.payload.results,
        info: action.payload.info,
      };
    case GET_EPISODES_DATA_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: action.payload.results,
        info: action.payload.info,
      };
    case GET_DATA_ERROR:
      return { ...state, fetching: false, error: action.payload };
    case CLEAR_DATA:
      return { ...state, error: '', data: action.payload };
    default:
      return state;
  }
}

// ACTIONS

export let getInput = (input: string) => (dispatch: any, getState: any) => {
  if (input === '') {
    dispatch({
      type: CLEAR_DATA,
      payload: [],
    });
  }

  let byEntitie = getState().menuFilter;

  if (input.length > 2) {
    if (byEntitie.charsMenuItem) {
      return getCharacterAction(input)(dispatch, getState);
    } else if (byEntitie.locationsMenuItem) {
      console.log('entro en locations');
      return getLocationsAction(input)(dispatch, getState);
    } else if (byEntitie.episodesMenuItem) {
      return getEpisodesAction(input)(dispatch, getState);
    }
  }
};

export let getCharacterAction = (char?: string) => (
  dispatch: any,
  getState: any
) => {
  let { byName } = getState().menuFilter;

  if (byName === true) {
    var query = gql`
      query searchCharactersByName($char: String) {
        characters(page: 1, filter: { name: $char }) {
          info {
            count
            pages
          }
          results {
            id
            name
            species
            type
            gender
            image
          }
        }
      }
    `;
  } else {
    query = gql`
      query searchCharactersByName($char: String) {
        characters(page: 1, filter: { type: $char }) {
          info {
            count
            pages
          }
          results {
            id
            name
            species
            type
            gender
            image
          }
        }
      }
    `;
  }

  let variables = {
    char,
  };

  dispatch({
    type: GET_DATA,
  });

  return client
    .query({
      query,
      variables,
    })
    .then((res) => {
      dispatch({
        type: GET_CHARS_DATA_SUCCESS,
        payload: res.data.characters,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_DATA_ERROR,
        payload: err.message,
      });
    });
};

let getLocationsAction = (char: string) => (dispatch: any, getState: any) => {
  let { byName } = getState().menuFilter;

  if (byName === true) {
    var query = gql`
      query searchLocationsByName($char: String) {
        locations(page: 1, filter: { name: $char }) {
          info {
            count
            pages
          }
          results {
            id
            name
            type
            dimension
            residents {
              name
              image
            }
          }
        }
      }
    `;
  } else {
    query = gql`
      query searchLocationsByName($char: String) {
        locations(page: 1, filter: { type: $char }) {
          info {
            count
            pages
          }
          results {
            id
            name
            type
            dimension
            residents {
              name
              image
            }
          }
        }
      }
    `;
  }

  console.log(char);

  let variables = {
    char,
  };

  dispatch({
    type: GET_DATA,
  });

  return client
    .query({
      query,
      variables,
    })
    .then((res) => {
      dispatch({
        type: GET_LOCATIONS_DATA_SUCCESS,
        payload: res.data.locations,
      });
      console.log('esto es dentro del dispatch' + res);
    })
    .catch((err) => {
      dispatch({
        type: GET_DATA_ERROR,
        payload: err.message,
      });
    });
};

let getEpisodesAction = (char: string) => (dispatch: any, getState: any) => {
  var query = gql`
    query searchEpisodesByName($char: String) {
      episodes(page: 1, filter: { name: $char }) {
        info {
          count
          pages
        }
        results {
          id
          name
          air_date
          episode
          characters {
            name
            image
          }
        }
      }
    }
  `;

  let variables = {
    char,
  };

  dispatch({
    type: GET_DATA,
  });

  return client
    .query({
      query,
      variables,
    })
    .then((res) => {
      dispatch({
        type: GET_EPISODES_DATA_SUCCESS,
        payload: res.data.episodes,
      });
      console.log(res);
    })
    .catch((err) => {
      dispatch({
        type: GET_DATA_ERROR,
        payload: err.message,
      });
    });
};
