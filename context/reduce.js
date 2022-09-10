import { SET_ARR } from "./types";

const handlers = {
    [SET_ARR]: (state, { payload }) => ({ ...state, arrFormula: payload }),
    DEFAULT: (state) => state
};

export const mainReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
};
