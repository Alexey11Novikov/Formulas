import React, { useReducer } from 'react';
import { MainContext } from './MainContext';
import { mainReducer } from './reduce';
import { SET_ARR } from './types';


export const MainState = ({ children }) => {

    const initialState = {
        arrFormula: [],
    }

    const [state, dispatch] = useReducer(mainReducer, initialState);

    const setArrFormula = (newArr) => {
        dispatch({
            type: SET_ARR,
            payload: newArr
        })
    }

    return (
        <MainContext.Provider value={{
            arrFormula: state.arrFormula, setArrFormula,
        }}>
            {children}
        </MainContext.Provider>
    )
}
