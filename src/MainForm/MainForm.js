import React, { Component } from 'react';
import Features from '../Features/Features';

export default class MainForm extends Component{
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <Features USCurrencyFormat={this.props.USCurrencyFormat} state={this.props.state} updateFeature={this.props.updateFeature} />
      </form>
    )
  }
}