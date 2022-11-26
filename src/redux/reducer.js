import { FETCH_RECORDS_REQUEST, FETCH_RECORDS_SUCCESS, FETCH_RECORDS_FAILURE, FETCH_RECORD_REQUEST, FETCH_RECORD_SUCCESS } from './constant';

const initialRecordsState =  {
    loading : false,
    data : [],
    error : ""
}
const initialRecordState =  {
    loading : false,
    data : [],
    error : ""
}

export const recordsReducer = (state = initialRecordsState, action ) => {
    switch(action.type){
        case FETCH_RECORDS_REQUEST :
            return {
                ...state,
                loading : true
            }
            
        case FETCH_RECORDS_SUCCESS:
            return {
                ...state,
                loading : false,
                data : action.payload,
            }
            
        case FETCH_RECORDS_FAILURE:
            return {
                ...state,
                loading : false,
                data : [],
                error : action.payload
            }
            
    
        default: return state
    }
}

export const recordReducer = (state = initialRecordState, action ) => {
    switch(action.type){
        case FETCH_RECORD_REQUEST :
            return {
                ...state,
                loading : true
            }
            
        case FETCH_RECORD_SUCCESS:
            return {
                ...state,
                loading : false,
                data : action.payload,
            }
            
        case FETCH_RECORDS_FAILURE:
            return {
                ...state,
                loading : false,
                data : [],
                error : action.payload
            }
            
    
        default: return state
    }
}
