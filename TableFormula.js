import React from "react";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import SettingsIcon from '@material-ui/icons/Settings';


export const TableFormula = () => {
    let resource = require('./resource.json');


    const onSettingFormula = () => {
        
    }

    const onDelete = () => {

    }


    return (
        <Paper >
            <Table
                aria-labelledby="tableTitle"
                size="small"
            >
                <TableHead>
                    <TableRow >
                        <TableCell align="center">
                            Формула
                        </TableCell>
                        <TableCell align="center">
                            Действие
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {Object.values(resource.formula).map((item, index) => (
                        <TableRow
                            hover
                            key={index}
                        >
                            <TableCell align="center">
                                {item}
                            </TableCell>
                            <TableCell align="center">
                                <IconButton aria-label="delete" onClick={onDelete}>
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton aria-label="setting" onClick={onSettingFormula}>
                                    <SettingsIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}