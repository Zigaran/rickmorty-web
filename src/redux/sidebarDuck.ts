// CONSTS
let CHANGE_SIDEBAR_TOGGLED_STATUS = 'SIDEBAR_TOGGLE_STATUS';
let CHANGE_SIDEBAR_HIDDEN_STATUS = 'SIDEBAR_HIDDEN_STATUS';

let sidebarStatuses = {
  toggled: false,
  hidden: false,
};

// REDUCERS
export default function reducer(state = sidebarStatuses, action: any) {
  switch (action.type) {
    case CHANGE_SIDEBAR_TOGGLED_STATUS:
      return { ...state, toggled: action.payload };
    case CHANGE_SIDEBAR_HIDDEN_STATUS:
      return { ...state, hidden: action.payload };
    default:
      return state;
  }
}

// ACTIONS
export let changeHiddenStatus = (width: any) => (
  dispatch: any,
  getState: any
) => {
  let { hidden } = getState().sidebarStatuses;
  let { toggled } = getState().sidebarStatuses;
  width < 769
    ? dispatch({
        type: CHANGE_SIDEBAR_TOGGLED_STATUS,
        payload: !toggled,
      })
    : dispatch({
        type: CHANGE_SIDEBAR_HIDDEN_STATUS,
        payload: !hidden,
      });
};

export let changeToggledStatus = () => (dispatch: any, getState: any) => {
  let { toggled } = getState().sidebarStatuses;
  dispatch({
    type: CHANGE_SIDEBAR_TOGGLED_STATUS,
    payload: !toggled,
  });
};

export let activeSidebar = () => (dispatch: any, getState: any) => {
  dispatch({
    type: CHANGE_SIDEBAR_HIDDEN_STATUS,
    payload: false,
  });
};
