import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Alert from '@material-ui/lab/Alert';

const StripeCheckoutButton = ({price}) => {
    const priceInCents =  price*100;
    const publishableKey = 'pk_test_u2VtG4jV6bgpQfdrEE8xqIVn00yTKeCJ40';
   const onToken = (token)=> {
        console.log(token);
        return (<Alert severity="success">This is a success alert — check it out!</Alert>)
    }


    return (
        <StripeCheckout 
            label='Pay Now'
            name='Myntraa Shopping Corp.'
            billingAddress shippingAddress 
            image='https://seeklogo.com/images/M/myntra-logo-B3C45EAD5C-seeklogo.com.png'
            description={`Your total is $${price}`}
            amount={priceInCents}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )

}
export default StripeCheckoutButton;