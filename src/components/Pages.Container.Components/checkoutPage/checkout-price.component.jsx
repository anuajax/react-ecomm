import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import './checkout-price.styles.scss';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(2),
      width: theme.spacing(35),
      height: theme.spacing(40),
    },
  
  },
}));

export default function CheckoutPricing({total}) {
  const classes = useStyles();
const x= 0.9*total>80 || total===0 ? 0: 5;
  return (
    <div className={classes.root}>
      
     
      <Paper  variant="outlined" square className="checkout-pricing-box">
        <h3> PRICE DETAILS</h3>
        <div className="pricing-titles">
          <span>Bag Total</span>
          <span>$ {(total).toPrecision(4)}</span>
        </div>
        <div className="pricing-titles">
          <span>Bag Discount</span>
          <span>- $ {(0.1*total).toPrecision(4)}</span>
        </div>
        <div className="pricing-titles">
          <span>Order Total</span>
          <span>$ {(0.9*total).toPrecision(4)}</span>
        </div>
       
        <div className="pricing-titles">
          <span>Delivery Charges</span>
          <span>$ {x.toPrecision(4)} </span>
        </div>
       
        <Divider variant="middle"/>
        <div className="pricing-titles">
          <span>Total</span>
          <span>$ {(0.9*total + x).toPrecision(4)}</span>
        </div>
        <Button color="secondary">PLACE ORDER</Button>
      </Paper>
    </div>
  );
}
