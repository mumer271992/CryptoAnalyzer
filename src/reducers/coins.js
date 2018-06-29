/* A reducer for coinsData redux store */

import { COINMARKETCAP_DEFAULT_PAGE_SIZE } from '../constants/appConstants';

/* This is the default store state. */
let defaultState = {
  pageSize: COINMARKETCAP_DEFAULT_PAGE_SIZE,
  list: []
}

export default (state = defaultState, action) => {
  switch(action.type){
    case 'SAVE_LIST':
      return {
        ...state,
        list: action.list
      };
    case 'CHANGE_PAGE_SIZE':
      return {
        ...state,
        pageSize: action.size
      }
    default:
      return state;
  }
}