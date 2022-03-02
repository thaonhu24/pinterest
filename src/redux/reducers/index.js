import {combineReducers} from 'redux';
import {DARK, LIGHT} from '../actions'
 
const initApp= {
    bg:false
}

function fc_app(state = initApp,action){
    switch(action.type){
        case DARK:{
            state=false
            return state;
        }
        case LIGHT:{
            state=true
            return state
        }
        default:
            return state;
    }
}
 
const reduxApp = combineReducers({
    dataApp : fc_app
})
 
export default reduxApp;
