import React from 'react';

const StateContext = React.createContext();
const DispatchContext = React.createContext();


const initialState = {
    theme: "dark"
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'TOGGLE_THEME': {
            return {
                ...state,
                theme: state.theme == 'light' ? 'dark' : 'light'
            }
        }
            break;
        default:
            throw new Error("Bad Action Type");
    }
}

export const Context = ({children}) => {
    const[] = React.useReducer(reducer, initialState);
    return <div>{children}</div>
}