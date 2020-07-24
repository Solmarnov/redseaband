import React from 'react';
import './style.css';

const Iframe = props => {
  return <iframe title={props.title} {...props}></iframe>;
}

export default Iframe;