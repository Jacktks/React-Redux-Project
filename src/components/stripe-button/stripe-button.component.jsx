import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_M3xJTxYSHPE8iBUfCWflguUO00iN055otb';

    const onToken = token => {
        console.log(token);
        alert('Payment succesfully!')
    }

    return (
        <StripeCheckout
            label="Pay now"
            name="Jacktks Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay now"
            token={onToken}
            stripeKey={publishablekey}
        />
    );
};

export default StripeCheckoutButton;