import api from '../../Services/Api';
import { loadRequest, loadSuccess, loadFailure } from '../Ducks/Lists';

export const loadList =  () => {
    return async dispatch => {
      await dispatch( loadRequest() )
            try{
                const response = await api.get('/')
                await   dispatch( loadSuccess(response.data) )

            }
            catch( error ){
             await   dispatch( loadFailure() )
              console.log(error)
            }
       
    }
}
