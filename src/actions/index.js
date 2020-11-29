import compareReduer from "../reducers/compareReduer";

import {COMPARE} from './types';
import compare from '../service/compare';
export const compareLists = (left, right)=>{
    return {
        type: COMPARE,
        payload: compare(left, right)
    };
}
