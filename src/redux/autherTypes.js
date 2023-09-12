export const RIGISTER_USER="RIGISTER_USER";
export const SIGIN_USER="SIGIN_USER";
export const SIGNOUT_USER="SIGNOUT_USER";

export const rigisterUser=()=>{
    return {
        type:RIGISTER_USER,
    }
}
export const siginUser=(payload)=>{
    return{
        type:SIGIN_USER,
        payload:payload
    }
}

export const siginOutUser=()=>{
    return{
        type : SIGNOUT_USER
    }
}