import React, { Component } from 'react';
import slugify from 'slugify';
import Options from '../Options/Options';

export default class Feature extends Component {
  render() {
    const featureHash = this.props.feature + '-' + this.props.idx;
    const options = this.props.features[this.props.feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <Options key={itemHash} itemHash={itemHash} item={item} feature={this.props.feature} state={this.props.state} USCurrencyFormat={this.props.USCurrencyFormat} updateFeature={this.props.updateFeature}/>
      );
    });

    return (
    <fieldset className="feature" key={featureHash}>
      <legend className="feature__name">
        <h3>{this.props.feature}</h3>
      </legend>
      {options}
    </fieldset>
    )
  }
}
