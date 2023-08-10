import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={450}
    height={300}
    fill="none"
    {...props}
  >
    <rect width={450} height={300} fill="url(#a)" rx={8} />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="matrix(.0012 0 0 .00181 0 -.027)" />
      </pattern>
      <image
        id="b"
        width={828}
        height={1104}
      />
    </defs>
  </svg>
)
export default SvgComponent