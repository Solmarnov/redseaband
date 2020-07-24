import React from 'react';
import './style.css';

const InternalLink = props => {
  return (
    <div className="internal-link">
      <ul className="internal-link-ul">
        <li className="internal-link-li">
          <a href={props.href} className="internal-link-a">{props.children}</a>
        </li>
      </ul>
    </div>
  )
}

export default InternalLink;