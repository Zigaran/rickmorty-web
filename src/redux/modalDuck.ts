// CONSTS
let CHANGE_MODAL_STATUS = 'CHANGE_MODAL_STATUS';
let STORE_ACTUAL_OBJECT = 'STORE_ACTUAL_OBJECT';

let initialData = {
  open: false,
  data: {},
};

// REDUCERS
export default function reducer(state = initialData, action: any) {
  switch (action.type) {
    case CHANGE_MODAL_STATUS:
      return { ...state, open: action.payload };
    case STORE_ACTUAL_OBJECT:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

// ACTIONS
export let storeActualObject = (actual: object) => (
  dispatch: any,
  getState: any
) => {
  dispatch({
    type: STORE_ACTUAL_OBJECT,
    payload: actual,
  });
};

export let changeModalStatus = () => (dispatch: any, getState: any) => {
  let { open } = getState().modalStatus;
  dispatch({
    type: CHANGE_MODAL_STATUS,
    payload: !open,
  });
};
