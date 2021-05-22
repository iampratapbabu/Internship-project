import React,{useReducer} from "react";
import axios from 'axios';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';



import {REGISTER_SUCCESS,REGISTER_FAIL,
    USER_LOADED,AUTH_ERROR,LOGIN_SUCCESS,LOGIN_FAIL,
    LOGOUT,CLEAR_ERRORS} from '../types';

const AuthState = (props) =>{
    const initialState={
        token:localStorage.getItem('token'),
        user:null,
        isAuthenticated:null,
        loading:true,
        error:null

    };
    const [state,dispatch]=useReducer(AuthReducer,initialState);

    //all reducer functions

    //load user
    const loadUser = async() => {
        console.log("load user");
    }
    
    //register user
    const register = async () =>{
        console.log("register user");
    };

    //login
    const login = () => console.log("login user");

    //logout
    const logout = () => console.log("logout user");

    //clear errors
    const clearErrors = () => dispatch({type:CLEAR_ERRORS});


    return(
        <AuthContext.Provider
        value={{
            token:state.token,
            user:state.user,
            isAuthenticated:state.isAuthenticated,
            loading:state.loading,
            error:state.error,
            register,
            loadUser,
            login,
            logout,
            clearErrors
        }}>
        {props.children}
        </AuthContext.Provider>
    )

};

export default AuthState;