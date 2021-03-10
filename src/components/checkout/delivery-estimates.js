import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { Box, ListItemAvatar } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingBottom: '15px'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '140px',
    height: '140px',
  },
  title: {
    fontSize: '0.9em',
    fontWeight: 100,
    paddingBottom: '16px'
  }
}));

export default function DeliveryEstimate({ estimate }) {
  console.log('items', estimate)
  const classes = useStyles();
  const theme = useTheme();

  const [value, setValue] = React.useState('express');
  const [selectedValue, setSelectedValue] = React.useState('a');

  const GreenRadio = withStyles({
    root: {
      color: "#00aa8a",
      '&$checked': {
        color: "#00aa8a",
      },

    }
  })((props) => <Radio color="default" size="small" {...props} />);


  const handleChange = (event) => {
    setValue(event.target.value);
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      {estimate.map((itm, i) => (
        <Card className={classes.root} elevation={0}>
          <CardMedia
            className={classes.cover}
            image="/assets/img1.jpg"
            title="Live from space album cover"
          />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="body1" variant="p" align="left" >
                <Typography component="p" variant="p" className={classes.title}>  {itm.title} </Typography>
                {
                  itm.delivery.map(pro => (
                    <FormControl component="fieldset">
                      <RadioGroup row aria-label="gender" name={i} value={value} onChange={handleChange} className={classes.radio} >
                        {pro.type == 'express'
                          ? <FormControlLabel value="express" control={<GreenRadio />} label={<span style={{ fontSize: '0.7rem', fontFamily: "'Roboto Slab', serif" }}>
                            {pro.time}
                            <span style={{ display: 'block', fontWeight: 'bold' }}>{pro.date}</span>
                          </span>} />
                          : <FormControlLabel value="standard" control={<GreenRadio />} label={<span style={{ fontSize: '0.7rem', fontFamily: "'Roboto Slab', serif" }}>
                            {pro.time}
                            <span style={{ display: 'block', fontWeight: 'bold' }}>{pro.date}</span>
                          </span>} />
                        }
                      </RadioGroup>
                    </FormControl>
                  ))
                }
              </Typography>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  );
}
