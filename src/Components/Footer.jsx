import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

export default function Footer() {
  const {themeContext}= useContext(ThemeContext)
    return (
        <footer className={`footer fixed-bottom text-center py-3 custom-transition ${themeContext==="light"? "custom-bg-light text-dark":""}`}>
          <div className="container">
            <span className="text-muted">&copy; 2024 TMV Website</span>
          </div>
        </footer>
    )
}
