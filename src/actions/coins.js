/* Action creators for redux store */

import { COINMARKETCAP_DEFAULT_PAGE_SIZE } from '../constants/appConstants';

export const changePageSize = (size = COINMARKETCAP_DEFAULT_PAGE_SIZE) => ({
	type: 'CHANGE_PAGE_SIZE',
	size
})

export const saveCoinsList = (list = []) => ({
	type: 'SAVE_LIST',
	list
})