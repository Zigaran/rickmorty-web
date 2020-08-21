import ApolloClient, { gql } from 'apollo-boost';

interface Props {
  charName: string;
}

// CONSTS
let initialData = {
  fetching: false,
  array: [],
  current: {},
};

let client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
});

let GET_CHARACTERS = 'GET_CHARACTERS';
let GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS';
let GET_CHARACTERS_ERROR = 'GET_CHARACTERS_ERROR';

// REDUCER
export default function reducer(state = initialData, action: any) {
  switch (action.type) {
    case GET_CHARACTERS:
      return { ...state, fetching: true };
    case GET_CHARACTERS_SUCCESS:
      return { ...state, fetching: false, array: action.payload };
    case GET_CHARACTERS_ERROR:
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
}

// ACTIONS
export let getCharacterAction = () => (dispatch: any, getState: any) => {
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

  let variables = {
    char: 'rick sanchez',
  };

  dispatch({
    type: GET_CHARACTERS,
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
