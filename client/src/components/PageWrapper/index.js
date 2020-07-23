import React from 'react';

const PageWrapper = props => {
  return <div {...props}>{props.children}</div>
}

export default PageWrapper;