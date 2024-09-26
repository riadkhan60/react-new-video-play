import React from 'react';

export default function MinimizeIcon({ className, style }: { className?: string, style?: React.CSSProperties }) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={style}
        className={className}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15 19v-2a2 2 0 0 1 2 -2h2" />
        <path d="M15 5v2a2 2 0 0 0 2 2h2" />
        <path d="M5 15h2a2 2 0 0 1 2 2v2" />
        <path d="M5 9h2a2 2 0 0 0 2 -2v-2" />
      </svg>
    </div>
  );
}
