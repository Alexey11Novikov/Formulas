import React, { useState, useContext } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { MainContext } from "./context/MainContext";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: "30px",
      height: "30px",
    },
  },
}));

const arithmetic = [
  "+", "-", "*", "/", "(", ")"
]

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export const ModalAddFormula = (props) => {
  const classes = useStyles();
  const { isOpen, setOpen } = props;
  const { changeFormula } = useContext(MainContext);
  const [temp, setTemp] = useState([]);

  const handleClose = (event, reason) => {
    if (reason && reason == "backdropClick") return;
    setOpen(false);
  };

  const addArithmetic = (event) => {
    setTemp(
      <InputLabel htmlFor="my-input">{event.target.innerText}</InputLabel>)
  }

  const addNumber = () => {
    setTemp(<TextField id="outlined-basic" label="Число" variant="outlined" fullWidth />)
  }

  const onSave = () => {
  ///
    
    setOpen(false);
  }

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={isOpen} fullWidth>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Задать формулу
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Grid item xs={12}>
                <Button variant="outlined" color="primary" onClick={addNumber}>
                  Число
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined" color="primary" onClick={addArithmetic}>
                  x
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined" color="primary" onClick={addArithmetic}>
                  y
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined" color="primary" onClick={addArithmetic}>
                  z
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.root}>
                <Paper >
                  {temp}
                </Paper>
              </div>
            </Grid>
            <Grid item xs={4}>
              {arithmetic.map((item, index) => (
                <Grid item xs={12} key={index}>
                  <Button variant="outlined" color="primary" onClick={addArithmetic}>
                    {item}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            Отмена
          </Button>
          <Button onClick={onSave} variant="contained" color="primary">
            Сохранить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
