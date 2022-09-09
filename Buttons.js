import React from "react";
import { Button } from "@material-ui/core";

export const Buttons = () => {

    const addFormula = () => {
        let obj = require("./resource.json");
        
    }

    const onCancel = () => {

    }

    return (
        <>
            <div>
                <Button variant="contained" onClick={onCancel}>
                    Отмена
                </Button>
                <Button variant="contained" color="primary" disabled={true}>
                    Сохранить
                </Button>
            </div>
            <div>
                <Button variant="contained" color="primary" onClick={addFormula}>
                    Добавить формулу
                </Button>
            </div>
        </>
    )
}