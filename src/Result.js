import React from 'react';
import './Result.css';

export default class Result extends React.Component {

  attrs = () => Object.keys(this.props.result).map(key => {
    return (
      <div className="result-attr-container" key={key}>
        <span className="result-attr-name">{`${key}: `}</span>
        <span className="result-attr-value">{this.props.result[key]}</span>
      </div>
    );
  })

  
  render() {
    return (
      <div className="result-container">
        <h3 className="result-name">{this.props.name}</h3>
        {this.attrs()}
      </div>
    );
  }
}