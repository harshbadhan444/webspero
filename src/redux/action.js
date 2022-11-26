import { FETCH_RECORDS_REQUEST, FETCH_RECORDS_SUCCESS, FETCH_RECORDS_FAILURE, FETCH_RECORD_REQUEST, FETCH_RECORD_SUCCESS, FETCH_RECORD_FAILURE } from './constant';
import { rows } from './../components/MockData';

export const fetchDatas = () => async (dispatch) => {
    try{
        dispatch({type : FETCH_RECORDS_REQUEST})
        
        dispatch({type : FETCH_RECORDS_SUCCESS, payload : rows})
    }catch(err){
      dispatch({type : FETCH_RECORDS_FAILURE, error : err})
    }  
}

export const fetchData = (id) => async (dispatch) => {
  try{
      dispatch({type : FETCH_RECORD_REQUEST})
  
      const row = rows && rows.filter(item => item.id == id)

      dispatch({type : FETCH_RECORD_SUCCESS, payload : row})
  }catch(err){
    dispatch({type : FETCH_RECORD_FAILURE, error : err})
  }  
}
