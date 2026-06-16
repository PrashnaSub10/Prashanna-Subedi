import React, { useState, useEffect } from 'react'
import './PythonSpinner.scss'

function PythonSpinner({ hidden, onStabilize }) {
    const [isAccelerating, setIsAccelerating] = useState(false)
    const [isExpanding, setIsExpanding] = useState(false)
    
    const hiddenClass = hidden ? 'python-spinner-hidden' : ''
    const acceleratingClass = isAccelerating ? 'python-spinner-accelerating' : ''
    const expandingClass = isExpanding ? 'python-spinner-expanding' : ''
    
    useEffect(() => {
        if (onStabilize && !hidden) {
            const timer = setTimeout(() => {
                setIsAccelerating(true)
                setTimeout(() => {
                    setIsExpanding(true)
                }, 1500)
            }, 500)
            return () => clearTimeout(timer)
        }
    }, [hidden, onStabilize])
    
    return (
        <div className={`python-spinner ${hiddenClass} ${acceleratingClass} ${expandingClass}`}>
            <div className="python-spinner-pulsar"></div>
            <svg className="python-spinner-logo" viewBox="0 0 32 32" width="80" height="80">
                <defs>
                    <linearGradient id="python-blue" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{stopColor:'#387EB8'}} />
                        <stop offset="100%" style={{stopColor:'#366994'}} />
                    </linearGradient>
                    <linearGradient id="python-yellow" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{stopColor:'#FFE873'}} />
                        <stop offset="100%" style={{stopColor:'#FFD43B'}} />
                    </linearGradient>
                </defs>
                <path fill="url(#python-blue)" d="M15.885 2.1c-7.1 0-6.651 3.07-6.651 3.07v3.19h6.752v1h-9.441S2 8.8 2 15.9s4.545 6.751 4.545 6.751h2.718v-3.818s-.156-4.545 4.465-4.545h6.653s4.384.07 4.384-4.229V6.3s.661-4.2-6.88-4.2zm-3.732 2.427a1.214 1.214 0 1 1-.001 2.428 1.214 1.214 0 0 1 .001-2.428z"/>
                <path fill="url(#python-yellow)" d="M16.115 29.9c7.1 0 6.651-3.07 6.651-3.07v-3.19h-6.752v-1h9.441S30 23.2 30 16.1s-4.545-6.751-4.545-6.751h-2.718v3.818s.156 4.545-4.465 4.545H11.62s-4.384-.07-4.384 4.229V25.7s-.661 4.2 6.88 4.2zm3.732-2.427a1.214 1.214 0 1 1 .001-2.428 1.214 1.214 0 0 1-.001 2.428z"/>
            </svg>
        </div>
    )
}

export default PythonSpinner
