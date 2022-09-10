import React from "react";

const BUSD: React.FC<SVGProps> = (props) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="25" cy="25" r="25" fill="#F0B90B" />
      <path
        d="M25.4346 8L29.7542 12.4237L18.8771 23.3008L14.5575 18.9812L25.4346 8Z"
        fill="white"
        stroke="white"
        strokeWidth="0.104087"
      />
      <path
        d="M31.9921 14.5575L36.3117 18.9812L18.8771 36.4158L14.5575 32.0962L31.9921 14.5575Z"
        fill="white"
        stroke="white"
        strokeWidth="0.104087"
      />
      <path
        d="M12.3196 21.115L16.6392 25.5387L12.3196 29.8583L8 25.5387L12.3196 21.115Z"
        fill="white"
        stroke="white"
        strokeWidth="0.104087"
      />
      <path
        d="M38.5496 21.115L42.8692 25.5387L25.4346 42.9733L21.115 38.6537L38.5496 21.115Z"
        fill="white"
        stroke="white"
        strokeWidth="0.104087"
      />
    </svg>
  );
};

export default BUSD;
