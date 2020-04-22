import { combineReducers } from 'redux';
import categories from './category'
import toggleDrawer from './toggleDrawer'

const rootReducer = combineReducers({
    categories,
    toggleDrawer
});

export default rootReducer;