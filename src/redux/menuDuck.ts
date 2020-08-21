// CONSTS
let CHARACTERS_STATUS_MENU = 'CHARACTERS_STATUS_MENU';
let LOCATIONS_STATUS_MENU = 'LOCATIONS_STATUS_MENU';
let EPISODES_STATUS_MENU = 'EPISODES_STATUS_MENU';

let initialData = {
  charsMenuItem: true,
  locationsMenuItem: false,
  episodesMenuItem: false,
};

// REDUCERS
export default function reducer(state = initialData, action: any) {
  switch (action.type) {
    case CHARACTERS_STATUS_MENU:
      return {
        ...state,
        charsMenuItem: true,
        locationsMenuItem: false,
        episodesMenuItem: false,
      };
    case LOCATIONS_STATUS_MENU:
      return {
        ...state,
        charsMenuItem: false,
        locationsMenuItem: true,
        episodesMenuItem: false,
      };
    case EPISODES_STATUS_MENU:
      return {
        ...state,
        charsMenuItem: false,
        locationsMenuItem: false,
        episodesMenuItem: true,
      };
    default:
      return state;
  }
}

export let charFilterActive = () => (dispatch: any, getState: any) => {
  dispatch({
    type: CHARACTERS_STATUS_MENU,
  });
};

export let locationsFilterActive = () => (dispatch: any, getState: any) => {
  dispatch({
    type: LOCATIONS_STATUS_MENU,
  });
};

export let episodesFilterActive = () => (dispatch: any, getState: any) => {
  dispatch({
    type: EPISODES_STATUS_MENU,
  });
};
