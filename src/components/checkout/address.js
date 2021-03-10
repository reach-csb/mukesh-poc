import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  addressText: {
    fontWeight: 100,
    fontSize: '0.9em',
    color: '#000000'
  },
}));

const Address = ({address}) => {
  // console.log('address',address);
  address.map(ad=>{console.log(ad.atype)})
  const classes = useStyles();
  return (
    <div>
      {
        address.map(ad=>(
          <Typography variant="p"  component="p" align="left" className={classes.addressText}>
            {ad.atype}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ad.address}
         </Typography> 
        ))
      }
    </div>
  );
}

export default Address;
