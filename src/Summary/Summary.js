import React, { Component } from 'react';
import CartTotals from '../CartTotals/CartTotals';

export default class Cart extends Component {
  cartSummary = Object.keys(this.props.state.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = this.props.state.selected[feature];
    return (
      <CartTotals featureHash={featureHash} selectedOption={selectedOption}  USCurrencyFormat={this.props.USCurrencyFormat}/>
    )
  });

  render() {
    return (
      <>
        {this.cartSummary}
      </>
    )
  }
}
