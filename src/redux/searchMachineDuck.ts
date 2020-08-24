// APOLLO CLIENT ──────────────────────────────────────────────────────────
import ApolloClient, { gql } from 'apollo-boost';

// CONSTS
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

let GET_INPUT = 'GET_INPUT';
let GET_DATA = 'GET_DATA';
let GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
let GET_DATA_ERROR = 'GET_DATA_ERROR';

// REDUCER
export default function reducer(state = initialData, action: any) {
  switch (action.type) {
    case GET_DATA:
      return { ...state, fetching: true };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: action.payload.characters.results,
        info: action.payload.info,
      };
    case GET_DATA_ERROR:
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
}

// ACTIONS

export let getInput = (input: string) => (dispatch: any, getState: any) => {
  dispatch({
    type: GET_INPUT,
    payload: input,
  });
  console.log(input);

  if (input.length > 2) {
    return getCharacterAction(input)(dispatch, getState);
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
        type: GET_DATA_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_DATA_ERROR,
        payload: err.message,
      });
    });
};

// let getLocationsAction = (char: string) => (dispatch: any,
//   getState: any) => {
//     let query = gql`query searchLocationsByName {
//       locations(page: 1, filter: { name: "Earth" }) {
//         info {
//           count
//           pages
//         }
//         results {
//           name
//           type
//           dimension
//           residents {
//             name
//           }
//         }
//       }
//     }`
//   }
