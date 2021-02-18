import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import './DarkMode.css'

const DarkMode = () => (
    <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <label>
        <input
          type="checkbox"
          className="btn-flotante cm-toggle"
          onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
          checked={theme === 'dark'}
           />{' '}
      </label>
    )}
  </ThemeToggler>
)

export default DarkMode
