import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme)=>({
  root: {
   //
  },
  addressTitle:{
    fontWeight:400,
    fontSize: '0.8em',
  },
  cardCls:{
    boxShadow: '-20px -19px 11px -20px rgba(0,0,0,0.2),0px 0px 0px 0px rgba(0,0,0,0.14),0px 0px 1px 0px rgba(0,0,0,0.12)'
 },
  addressText:{
    fontWeight:100,
    fontSize:'0.9em',
    paddingTop: '0.5em',
    color: '#000000'
  },
}));

const Address = ()=>  {
  const classes = useStyles();

  return (
    <div>
    <Card className={classes.cardCls}>
      <CardActionArea >
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="p" component="h2" align="left" className={classes.addressTitle}>
            ADDRESS (4)
          </Typography>
          <Typography variant="p"  component="p" align="left" className={classes.addressText}>
            <b>Home :</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;24/6, Mercy Flats, Indira Nagar, 4th Main Road, Adyar, Chennai, Tamil Nadu, 600020
         </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <CardMedia
        className={classes.cover}
        image="/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      />
    </div>
  );
}

export default Address;
