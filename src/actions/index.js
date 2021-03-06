
import { formValues } from "redux-form"
import streams from "../apis/streams"
import history from "../history"

import {FETCH_STREAM ,
    FETCH_STREAMS,
    DELETE_STREAM,
    EDIT_STREAM , SIGN_IN,SIGN_OUT,CREATE_STREAM, NEW_STREAM } from "./types"

export const signIn = (id)=>{

    return{
        type:SIGN_IN,
        payload: id
        
    }
}

export const signOut=()=>{
    return{
        type:SIGN_OUT
    }
}

export const createStream = (formValues) => async (dispatch,getState) =>{
    const {userId} = getState().auth
   const response = await streams.post("/streams",{...formValues,userId});

   dispatch({type: NEW_STREAM, payload: response.data})
   history.push("/")
}

export const fetchStreams = () => async dispatch =>{
    const response = await streams.get("/streams")

    dispatch({type: FETCH_STREAMS , payload : response.data})
}

export const fetchStream = (id) => async dispatch =>{
    const response = await streams.get(`/streams/${id}`)

    dispatch({type: FETCH_STREAM , payload: response.data})
}

export const editStream = (id,formValues)=> async dispatch =>{
    const response = await streams.patch(`/streams/${id}`, formValues);

    dispatch({type: EDIT_STREAM, payload: response.data})
    history.push("/")
}

export const deleteStream = id => async dispatch =>{
    await streams.delete(`/streams/${id}`)

    dispatch({type: DELETE_STREAM, payload: id})
    history.push("/")
}
