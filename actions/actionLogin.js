import {CHECK_TOKEN,CHECK_LOGIN,DEFAULT_LOGIN} from './actionTypes';
export function checklogin(name,password){
    return{
        type:CHECK_LOGIN,
        name,
        password
    }
} 
export function checktoken(token){
    return{
        type:CHECK_TOKEN,
        token
    }
} 
export function defaultlogin(){
    return{
        type:DEFAULT_LOGIN
    }
} 