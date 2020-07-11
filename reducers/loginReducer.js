const defaultState={
    loginsucess:'',
    loginfail:'',
    token:[],
    ifuser:[],
    tokensuccess:''
}
const login=(state=defaultState,action)=>{
    if(action.type==='LOGIN_SUCESS'){
        return{
            ...state,
            loginsucess:'login_sucess'
        }
    }
    if(action.type==='LOGIN_FAIL'){
        return{
            ...state,
            loginfail:'login_fail'
        }
    }
    if(action.type==='DEFAULT_LOGIN'){
        return{
            ...state,
            loginfail:'',
            loginsucess:'',
        }
    }
    if(action.type==='TOKEN'){
        return{
            ...state,
            token:action.token
        }
    }
    if(action.type==='IF_USER'){
        return{
            ...state,
            ifuser:action.ifuser,
            tokensuccess:'tokensuccess',
        }
    }
    return state;
}
export default login;