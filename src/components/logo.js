import React from 'react'

const Logo = () => (
    <svg width="150" height="172" fill="none" xmlns="http://www.w3.org/2000/svg">
    <radialGradient id="angular" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(75 65) rotate(-90) scale(65 75)">
        <stop stopColor="#96CADF"/>
        <stop offset="34%" stopColor="#92D7AB"/>
        <stop offset="64%" stopColor="#F99EB8"/>
        <stop offset="1" stopColor="#96CADF"/>
    </radialGradient>
        <path fill="url(#angular)">
            <animate repeatCount="none" fill="freeze" attributeName="d" dur="10s"
            values="M75 130C102.262 130 127.853 122.962 150 110.631C143.803 63.3039 115.201 22.8832 75 0C34.7988 22.8832 6.19741 63.3039 0 110.631C22.1465 122.962 47.7379 130 75 130ZM75 108C93.1747 108 110.236 103.669 125 96.0805C120.868 66.9563 101.801 42.082 75 28C48.1992 42.082 29.1316 66.9563 25 96.0805C39.7643 103.669 56.8253 108 75 108Z
            "
            />
        </path>
    </svg>
)
export default Logo


