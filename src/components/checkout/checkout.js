import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Box, makeStyles } from '@material-ui/core';
import Address from './address';
import DeliveryEstimate from './delivery-estimates';
import data from "../../data/data.json";

const Accordion = withStyles({
  root: {
    boxShadow: '-20px -19px 11px -20px rgba(0,0,0,0.2),0px 0px 0px 0px rgba(0,0,0,0.14),0px 0px 1px 0px rgba(0,0,0,0.12)',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
     margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    minHeight: 16,
    '&$expanded': {
      minHeight: 16,
    },
    fontWeight: 300,
    fontSize:'1em',
    letterSpacing: '2px',
    paddingTop: '0.5em',
    color: '#000000'
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(0),
    fontWeight: 100,
    fontSize:'0.9rem'
  },
}))(MuiAccordionDetails);

const useStyles = makeStyles((theme)=>({
    root:{},
    title:{
        paddingBottom: theme.spacing(2),
        fontStyle: 'italic' 
    },
    arrow:{
      fontSize: '0.7em',
      paddingLeft: '2px'
    }
}))

export default function Checkout() {
  let dt = data;
  const [pdata, setDt] = useState({...dt});
  
  
  
  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const classes = useStyles();

  return (
    <div>
        <Box >
        <Typography variant="h6" component="h6" align="left" className={classes.title} >
             <ArrowBackIosIcon className={classes.arrow} /> Checkout
        </Typography>
        </Box>
        
      <Accordion  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography gutterBottom variant="p" component="h6" align="left">
            {pdata.address.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Address address={pdata.address.type} />
        </AccordionDetails>
      </Accordion>
      <Accordion  expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
        <Typography gutterBottom variant="p" component="h6" align="left">
            {pdata.estimate.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
         <DeliveryEstimate estimate={pdata.estimate.items} />
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
