import {COMPARE} from '../actions/types';

export default (state = null, action)=>{

    switch(action.type){
        case COMPARE:{
            return action.payload;
        }
        default:{
            return state;
        }
    }

}