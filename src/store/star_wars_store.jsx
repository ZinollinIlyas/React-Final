import { createStore } from "redux";

const starWarsReducer = (state = 2, action) => {
    switch(action.type){
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        default:
            return state;
    }
}

const starWarsStore = createStore(starWarsReducer);

export default starWarsStore;