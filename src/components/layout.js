import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Checkout from './checkout/checkout';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: '5em',
    marginRight: '5em'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Layout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} direction="row" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Paper className={classes.paper}>Header</Paper>
        </Grid>
        <Grid item xs={8}> 
        <Checkout />
          
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Footer</Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}
