import { authTypes } from "../types/auth.types";
import { ADD_USER} from "../actions/auth.actions";
import User from "../../models/User";

const { SIGN_UP, SIGN_IN } = authTypes;

const initialState = {
    users: [],
    token: null,
    userId: null,
    
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            const newUser = new User(Date.now(), action.payload.title, action.payload.image)
            return { 
                ...state,
                users: state.users.concat(newUser) 
            }
        case SIGN_UP:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
            }
        case SIGN_IN:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
            }
        default:
            return state;
    }
}

export default AuthReducer;