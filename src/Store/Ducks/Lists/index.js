import { createAction, createReducer} from '@reduxjs/toolkit';

export const INITIAL_STATE = {
    data:[],
    loading:false,
    error:false
}
   
export const loadRequest = createAction('list/LOAD_REQUEST');
export const loadSuccess = createAction('list/LOAD_SUCCESS');
export const loadFailure = createAction('list/LOAD_FAILURE');

export default createReducer(INITIAL_STATE, {
    [loadRequest.type]: (state) => ({...state, loading:true }),
    [loadSuccess.type]: (state, action) => ({ ...state, loading:false, error:false, data:action.payload}),
    [loadFailure.type]: (state) => ({...state, loading:false, error:true, data:[]})
})
