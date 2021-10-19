import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import axios from 'axios'

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../types'
import Register from '../../components/auth/Register';




const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null
    };
    const [state, dispatch] = useReducer(authReducer, initialState)
    //Load User

    const loadUser = () => {
        console.log('User Is logged')
    }

    //Register User
    const register = async (formData) => {
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/user', formData, config);
            dispatch({ type: REGISTER_SUCCESS, payload: res.data })
        } catch (error) {
            dispatch({ type: REGISTER_FAIL, payload: error.respond.data.msg })
        }
    }
    //Login User
    const loginUser = () => {
        console.log('User Is logged')
    }
    //Logout User
    const logOutUser = () => {
        console.log('User Is Logged Out')
    }
    //Clear errors
    const cleareErrors = () => {
        console.log('Error is Cleared!')
    } 
    return (
        <AuthContext.Provider

            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                error: state.error,
                register,
                loadUser,
                cleareErrors,
                logOutUser,
                loginUser

            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthState;
