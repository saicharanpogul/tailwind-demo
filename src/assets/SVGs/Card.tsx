import React from "react";

const Card: React.FC<SVGProps> = (props) => {
  const height = props.height;
  const width = props.width;
  return (
    <svg
      id="eMbfitGxRhc1"
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="100 0 600 800"
      shape-rendering="geometricPrecision"
      text-rendering="geometricPrecision"
    >
      <defs>
        <linearGradient
          id="eMbfitGxRhc3-fill"
          x1="145.37"
          y1="0"
          x2="145.37"
          y2="376.08"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 0)"
        >
          <stop id="eMbfitGxRhc3-fill-0" offset="0%" stopColor="#626a88" />
          <stop id="eMbfitGxRhc3-fill-1" offset="100%" stopColor="#2e3149" />
        </linearGradient>
        <linearGradient
          id="eMbfitGxRhc4-stroke"
          x1="145.37"
          y1="0"
          x2="145.37"
          y2="376.08"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 0)"
        >
          <stop
            id="eMbfitGxRhc4-stroke-0"
            offset="0%"
            stopColor="rgba(236,240,255,0.1)"
          />
          <stop
            id="eMbfitGxRhc4-stroke-1"
            offset="100%"
            stopColor="rgba(46,49,73,0)"
          />
        </linearGradient>
      </defs>
      <g transform="matrix(2 0 0 2 109.26001 39.818565)">
        <path
          d="M273.74,0h-39c-7.273.023578-14.375,2.20709-20.406,6.2735-6.03,4.0664-10.716,9.8324-13.464,16.5665-4.52,11.0046-12.21,20.417-22.092,27.0411-9.883,6.6241-21.511,10.1609-33.408,10.1609s-23.525-3.5368-33.407-10.1609C102.08,43.257,94.3906,33.8446,89.8701,22.84c-2.7479-6.7341-7.4344-12.5001-13.4646-16.5665s-13.1324-6.249922-20.4055-6.2735h-39C12.4913,0,8.16737,1.79107,4.97925,4.97919C1.79113,8.16731,0,12.4913,0,17v316.08c0,4.509,1.79113,8.833,4.97925,12.021s7.51205,4.979,12.02075,4.979h256.74c4.509,0,8.833-1.791,12.021-4.979s4.979-7.512,4.979-12.021v-316.08c0-4.5087-1.791-8.83269-4.979-12.02081s-7.512-4.97919-12.021-4.97919Z"
          fill="url(#eMbfitGxRhc3-fill)"
          fill-opacity="0.1"
        />
        <path
          d="M201.333,23.03v-.0011c2.711-6.6423,7.333-12.3298,13.281-16.34085C220.562,2.67717,227.567,0.523416,234.741,0.5h38.999c4.376,0,8.573,1.73839,11.667,4.83274C288.502,8.42709,290.24,12.6239,290.24,17v316.08c0,4.376-1.738,8.573-4.833,11.667-3.094,3.095-7.291,4.833-11.667,4.833h-256.74c-4.3761,0-8.57285-1.738-11.6672-4.833C2.23845,341.653,0.5,337.456,0.5,333.08L0.5,17c0-4.3761,1.73845-8.57291,4.8328-11.66726s7.2911-4.83274,11.6672-4.83274h38.9992c7.1738.023416,14.1789,2.17717,20.1268,6.18805C82.074,10.6991,86.6967,16.3866,89.4072,23.0289l.0004.0011C93.9657,34.1263,101.72,43.6171,111.684,50.2964c9.965,6.6793,21.69,10.2456,33.686,10.2456s23.721-3.5663,33.686-10.2456s17.719-16.1701,22.277-27.2664Z"
          fill="none"
          stroke="url(#eMbfitGxRhc4-stroke)"
        />
      </g>
    </svg>
  );
};

export default Card;
