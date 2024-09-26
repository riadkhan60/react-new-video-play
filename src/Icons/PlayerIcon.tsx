import React from 'react';

export default function PlayerIcon({
  className,
  style,
  
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        style={style}
       
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />
      </svg>
    </div>
  );
}
