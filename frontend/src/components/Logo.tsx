import React from 'react'

const Logo = ({ setGraphState }: { setGraphState: (graphState: any) => void }) => {
  return (
    <div
      className='fixed hover:cursor-pointer top-4 left-4 z-50 flex items-center gap-2'
      onClick={() => setGraphState(null)}
    >
      {/* Inline SVG bar chart icon */}
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="18" width="5" height="14" rx="2" fill="#00bcd4"/>
        <rect x="13" y="10" width="5" height="22" rx="2" fill="#2196f3"/>
        <rect x="22" y="4" width="5" height="28" rx="2" fill="#4caf50"/>
      </svg>
      {/* App name */}
      <span style={{ fontWeight: 'bold', fontSize: 28, color: '#fff', fontFamily: 'Arial, sans-serif', letterSpacing: 1 }}>
        DataVis.ai
      </span>
    </div>
  )
}

export default Logo
