import React from 'react';
import './style.css';

const Container = ({ children }) => {
  return <div className="container">{children}</div>
}

const Row = ({ children }) => {
  return <div className="row">{children}</div>
}

export { Container, Row };