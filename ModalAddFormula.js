import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

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
  const { isOpen, setOpen } = props;


  const handleClose = () => {
    setOpen(false);
  };

  const addArithmetic = () => {

  }

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={isOpen}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Задать формулу
        </DialogTitle>
        <DialogContent dividers>
          <Grid container>
            <Grid item xs={12}>
              <Button variant="outlined" color="primary">
                Число
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" color="primary">
                x
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" color="primary">
                y
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" color="primary">
                z
              </Button>
            </Grid>
          </Grid>
          <Paper >

          </Paper>
          <Grid container>
            {arithmetic.map((item, index) => (
              <Grid item xs={12} key={index}>
                <Button variant="outlined" color="primary" onClick={addArithmetic}>
                  {item}
                </Button>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            Отмена
          </Button>
          <Button onClick={handleClose} variant="contained" color="primary">
            Сохранить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
