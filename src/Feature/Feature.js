import React from 'react';
import slugify from 'slugify';

export default function Feature(props) {
    const featureHash = props.feature + '-' + props.idx;
    const options = props.features[props.feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(props.feature)}
            checked={item.name === props.state.selected[props.feature].name}
            onChange={e => props.updateFeature(props.feature, item)}
          />
          <label htmlFor={itemHash} className="feature__label">
            {item.name} ({props.USCurrencyFormat.format(item.cost)})
          </label>
        </div>
      );
    });
  //return {featureHash, options};
  return (
  <fieldset className="feature" key={featureHash}>
      <legend className="feature__name">
        <h3>{props.feature}</h3>
      </legend>
      {options}
    </fieldset>
  )
}
