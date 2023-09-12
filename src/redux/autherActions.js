import { SIGNIN_USER, REGISTER_USER, SIGNOUT_USER } from "./autherTypes"; // Assuming you have these constants defined

const initialState = {
    isLoggedIn: false,
    loading: true,
    user: null

}

export const userReducsers = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case REGISTER_USER:
            return {
                ...state,
                isLoggedIn: true,
                loading: false
            }
        case SIGNIN_USER: {
            return {
                ...state,
                isLoggedIn: true,
                loading: false,
                user: payload
            }
        }
        case SIGNOUT_USER: {
            return {
                ...state,
                isLoggedIn: false,
                loading: false,
                user: null
            }
        }
        default: return state
    }
} 