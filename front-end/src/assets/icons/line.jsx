import * as React from 'react';
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1}
    height={17}
    fill="none"
    {...props}
  >
    <path stroke="#707070" d="M.5 0v17" />
  </svg>
);
export default SvgComponent;
