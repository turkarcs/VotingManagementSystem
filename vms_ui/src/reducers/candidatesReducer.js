import { GET_CANDIDATES } from "../actions/type";

const initialState={
    candidates:[],
    candidate:{}
};

export default function(state=initialState,action){
    switch(action.type){
        case GET_CANDIDATES:
            return{
                ...state,
                candidates:action.payload
            }
            default:
                return state;
                
    }
}