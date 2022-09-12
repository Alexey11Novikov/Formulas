import { SET_ARR, SET_CHANGE_FORMULA } from "./types";

const handlers = {
    [SET_ARR]: (state, { payload }) => ({ ...state, arrFormula: payload }),
    [SET_CHANGE_FORMULA]: (state, { payload }) => ({ ...state, changeFormula: payload }),
    DEFAULT: (state) => state
};

export const mainReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
};
