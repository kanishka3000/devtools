import {combineReducers} from 'redux';
import {reducer as reduxForm} from 'redux-form';

import compareReducer from './compareReduer';

export default combineReducers({
        form: reduxForm,
        compare:compareReducer
    }
);