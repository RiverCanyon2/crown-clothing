import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IyJzeCoNBj3o2iwGfDiUEXo7g60RwHrP8Z3xVnZBbqLXkkzojsFkAeydydJzTzwSPYQ6NYjBIiThvORqkRti76W001ImIB78X';

   const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name='Crown Clothing Ltd.'
        billingAddressshippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={ onToken }
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;