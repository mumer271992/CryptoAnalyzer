/* Action creators for redux store */

import { COINMARKETCAP_DEFAULT_PAGE_SIZE } from '../constants/appConstants';
import datahelper from '../helpers/dataHelper'; 

export const changePageSize = (size = COINMARKETCAP_DEFAULT_PAGE_SIZE) => {
	return(dispatch) => {
		dispatch(fetchData(size))
	}
}
export const savePageSize = (size = COINMARKETCAP_DEFAULT_PAGE_SIZE) => ({
	type: 'CHANGE_PAGE_SIZE',
	size
})

export const saveCoinsList = (list = []) => ({
	type: 'SAVE_LIST',
	list
})

export const saveSizeAndList = (size = COINMARKETCAP_DEFAULT_PAGE_SIZE, list = []) => ({
	type: 'SAVE_LIST_AND_SIZE',
	list,
	size
})

export const requestCoinsData = () => ({
	type: 'REQUEST_DATA_FROM_API'
})

export const fetchData = (size) => {
	return (dispatch, getState) => {
		// TODO: set isLoading in state to show loader
		return datahelper.getData({ limit: size ? size : getState().coinsData.pageSize }).then((data) => {
			if(size){
				dispatch(saveSizeAndList(size, data));
			} else {
				dispatch(saveCoinsList(data));
			}
		});
	}
}