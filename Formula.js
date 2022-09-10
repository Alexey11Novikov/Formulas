import React from "react";
import { Buttons } from "./Buttons";
import { MainState } from "./context/mainState";
import { TableFormula } from "./TableFormula";

export const Formula = () => {
    return (
        <div>
            <MainState >
                <Buttons />
                <TableFormula />
            </MainState>
        </div>
    )
}