import React, { useState, useContext } from "react";
import { Button, Grid } from "@material-ui/core";
import { MainContext } from "./context/MainContext";
import defFormula from './resource.json';

export const Buttons = () => {
    const { setArrFormula } = useContext(MainContext);
    let newArray = defFormula.formula;

    const addFormula = () => {
        newArray.push("");
        setArrFormula(newArray);
    }

    const onCancel = () => {
        setArrFormula(defFormula.formula);
    }

    return (
        <>
            <Grid container>
                <Grid item xs={2}>
                    <Button variant="contained" onClick={onCancel}>
                        Отмена
                    </Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" color="primary" disabled={true}>
                        Сохранить
                    </Button>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={6}>
                    <Button variant="contained" color="primary" onClick={addFormula}>
                        Добавить формулу
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}