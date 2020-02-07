import api from '../../Services/Api';
import {loadFailure, loadRequest, loadSuccess} from '../Ducks/Lists';

export const loadList = () => {
  return async dispatch => {
    await dispatch(loadRequest());
    try {
      const response = await api.get('/');
      await dispatch(loadSuccess(response.data));
    } catch (error) {
      await dispatch(loadFailure());
      console.log(error);
    }
  };
};
