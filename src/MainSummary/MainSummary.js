import React, { Component } from "react";
import Summary from '../Summary/Summary';
import GrandTotal from '../GrandTotal/GrandTotal';


export default class Main_Summary extends Component {
  render(){
    return (
    <section className="main__summary">
            <h2>Your cart</h2>
            <Summary USCurrencyFormat={this.props.USCurrencyFormat} state={this.props.state} />
            <GrandTotal state={this.props.state} USCurrencyFormat={this.props.USCurrencyFormat} />
          </section>
    )
  }
}