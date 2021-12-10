import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, ADD_SMURF, ERROR } from '../actions';

export const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(FETCH_START):
            return({
                ...state,
                isLoading: true,
                error: ''
            });

        case(FETCH_SUCCESS):
            return({
                ...state,
                smurfs: action.payload,
                isLoading: false,
                error: ''
            });

        case(FETCH_FAIL):
            return({
                ...state,
                isLoading: false,
                error: action.payload
            });

        case(ADD_SMURF):
            return({
                ...state,
                smurfs: [...state.smurfs, action.payload]
            });

        case(ERROR):
            return({
                ...state,
                error: action.payload
            });

        default:
            return state;
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;