// APOLLO CLIENT ──────────────────────────────────────────────────────────
import ApolloClient, { gql } from 'apollo-boost';

// CONSTS ─────────────────────────────────────────────────────────────────
let initialData = {
  input: '',
  fetching: false,
  info: {},
  prev: null,
  next: null,
  data: [],
  error: '',
};

let client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
});

let STORE_INPUT = 'STORE_INPUT';
let CLEAR_DATA = 'CLEAR_DATA';
let GET_DATA = 'GET_DATA';
let GET_CHARS_DATA_SUCCESS = 'GET_CHARS_DATA_SUCCESS';
let GET_LOCATIONS_DATA_SUCCESS = 'GET_LOCATIONS_DATA_SUCCESS';
let GET_EPISODES_DATA_SUCCESS = 'GET_EPISODES_DATA_SUCCESS';
let GET_DATA_ERROR = 'GET_DATA_ERROR';

// REDUCER
export default function reducer(state = initialData, action: any) {
  switch (action.type) {
    case STORE_INPUT:
      return { ...state, input: action.payload };
    case GET_DATA:
      return { ...state, fetching: true };
    case GET_CHARS_DATA_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: action.payload.results,
        info: action.payload.info,
        prev: action.payload.info.prev,
        next: action.payload.info.next,
      };
    case GET_LOCATIONS_DATA_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: action.payload.results,
        info: action.payload.info,
        prev: action.payload.info.prev,
        next: action.payload.info.next,
      };
    case GET_EPISODES_DATA_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: action.payload.results,
        info: action.payload.info,
        prev: action.payload.info.prev,
        next: action.payload.info.next,
      };
    case GET_DATA_ERROR:
      return { ...state, fetching: false, error: action.payload, input: '' };
    case CLEAR_DATA:
      return { ...state, error: '', data: action.payload };
    default:
      return state;
  }
}

// ACTIONS

export let clearData = () => (dispatch: any, getState: any) => {
  dispatch({
    type: CLEAR_DATA,
    payload: [],
  });
};

export let getInput = (input: string) => (dispatch: any, getState: any) => {
  if (input === '') {
    clearData()(dispatch, getState);
  }

  dispatch({
    type: STORE_INPUT,
    payload: input,
  });

  getMeTheData(1)(dispatch, getState);
};

export let getMeTheData = (page: number) => (dispatch: any, getState: any) => {
  let byEntitie = getState().menuFilter;
  let { input } = getState().characters;

  if (input.length > 2) {
    if (byEntitie.charsMenuItem) {
      return getCharacterAction(page, input)(dispatch, getState);
    } else if (byEntitie.locationsMenuItem) {
      return getLocationsAction(page, input)(dispatch, getState);
    } else if (byEntitie.episodesMenuItem) {
      return getEpisodesAction(page, input)(dispatch, getState);
    }
  }
};

export let getCharacterAction = (pg: number, char?: string) => (
  dispatch: any,
  getState: any
) => {
  let { byName } = getState().menuFilter;

  if (byName === true) {
    var query = gql`
      query searchCharactersByName($pg: Int, $char: String) {
        characters(page: $pg, filter: { name: $char }) {
          info {
            count
            pages
            prev
            next
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
      query searchCharactersByName($pg: Int, $char: String) {
        characters(page: $pg, filter: { type: $char }) {
          info {
            count
            pages
            prev
            next
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
    pg,
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

let getLocationsAction = (pg: number, char: string) => (
  dispatch: any,
  getState: any
) => {
  let { byName } = getState().menuFilter;

  if (byName === true) {
    var query = gql`
      query searchLocationsByName($pg: Int, $char: String) {
        locations(page: $pg, filter: { name: $char }) {
          info {
            count
            pages
            prev
            next
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
      query searchLocationsByName($pg: Int, $char: String) {
        locations(page: $pg, filter: { type: $char }) {
          info {
            count
            pages
            prev
            next
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
    pg,
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

let getEpisodesAction = (pg: number, char: string) => (
  dispatch: any,
  getState: any
) => {
  var query = gql`
    query searchEpisodesByName($pg: Int, $char: String) {
      episodes(page: $pg, filter: { name: $char }) {
        info {
          count
          pages
          prev
          next
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
    pg,
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
