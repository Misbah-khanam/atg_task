import React from "react"
import { ReactDOM } from "react"

const rootReducer=(state = false, action)=> {
    switch (action.type) {
        case 'LOGIN':
            return true

        case 'LOGOUT':
            return false

        default:
            return state
    }
}

export default rootReducer;
