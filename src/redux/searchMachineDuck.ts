// APOLLO CLIENT ──────────────────────────────────────────────────────────
import ApolloClient, { gql } from 'apollo-boost';

// CONSTS
let initialData = {
  fetching: false,
  array: [],
};

let client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
});

let GET_DATA = 'GET_DATA';
let GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
let GET_DATA_ERROR = 'GET_DATA_ERROR';

// REDUCER
export default function reducer(state = initialData, action: any) {
  switch (action.type) {
    case GET_DATA:
      return { ...state, fetching: true };
    case GET_DATA_SUCCESS:
      return { ...state, fetching: false, array: action.payload };
    case GET_DATA_ERROR:
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
}

// ACTIONS
export let getCharacterAction = (char: string) => (
  dispatch: any,
  getState: any
) => {
  let query = gql`
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

  // getCharacterAction()(store.dispatch, store.getState);

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
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
