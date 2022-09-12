import React, { useReducer } from 'react';
import { MainContext } from './MainContext';
import { mainReducer } from './reduce';
import { SET_ARR, SET_CHANGE_FORMULA } from './types';


export const MainState = ({ children }) => {

    const initialState = {
        arrFormula: [],
        changeFormula: ""
    }

    const [state, dispatch] = useReducer(mainReducer, initialState);

    const setArrFormula = (newArr) => {
        dispatch({
            type: SET_ARR,
            payload: newArr
        })
    }

    const setChangeFormula = (newFormula) => {
        dispatch({
            type: SET_CHANGE_FORMULA,
            payload: newFormula
        })
    }


    return (
        <MainContext.Provider value={{
            arrFormula: state.arrFormula, setArrFormula,
            changeFormula: state.changeFormula, setChangeFormula
        }}>
            {children}
        </MainContext.Provider>
    )
}
