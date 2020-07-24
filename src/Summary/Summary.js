import React, { Component } from 'react';
//import CartTotals from '../CartTotals/CartTotals';

export default class Cart extends Component {
  render() {
    const cartSummary = Object.keys(this.props.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.props.state.selected[feature];
      return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature}</div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {this.props.USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
      )
    });

    return (
      <>
        {cartSummary}
      </>
    )
  }
}
