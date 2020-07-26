import React, { Component } from 'react';
import Feature from '../Feature/Feature';
import FEATURES from './Feature.STORE';

export default class Features extends Component {
  render() {
    const features = Object.keys(FEATURES).map((feature, idx) => {
      return (
        <Feature key={idx} features={FEATURES} feature={feature} idx={idx} state={this.props.state} USCurrencyFormat={this.props.USCurrencyFormat} updateFeature={this.props.updateFeature}/>
      );
    });
    return features
  };
}
