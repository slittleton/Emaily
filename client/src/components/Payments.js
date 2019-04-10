import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';


class Payments extends Component {

  render() {


    return(
      <StripeCheckout 
        name="Emaily"
        description="$5 for 5 buy email credits"
        amount={500} //amount in cents
        token={token => this.props.handleToken(token)} // callback function called after we recieve authorization token from stripe
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">
          Add Credits
        </button>
      </StripeCheckout>
    )
  }
}
export default connect(null,actions)(Payments);