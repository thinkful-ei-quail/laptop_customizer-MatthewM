import React, { Component } from 'react';
import SummaryTotals from '../SummaryTotals/SummaryTotals';

export default class Cart extends Component {
  render() {
    const cartSummary = Object.keys(this.props.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.props.state.selected[feature];
      return (
        <SummaryTotals key={idx} featureHash={featureHash} selectedOption={selectedOption} USCurrencyFormat={this.props.USCurrencyFormat}/>
      )
    });

    return (
      <>
        {cartSummary}
      </>
    )
  }
}
