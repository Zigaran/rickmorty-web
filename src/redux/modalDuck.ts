// CONSTS
let CHANGE_MODAL_STATUS = 'CHANGE_MODAL_STATUS';

let initialData = {
  open: false,
};

// REDUCERS
export default function reducer(state = initialData, action: any) {
  switch (action.type) {
    case CHANGE_MODAL_STATUS:
      return { ...state, open: action.payload };
    default:
      return state;
  }
}

// ACTIONS
export let changeModalStatus = () => (dispatch: any, getState: any) => {
  let { open } = getState().modalStatus;
  dispatch({
    type: CHANGE_MODAL_STATUS,
    payload: !open,
  });
};
