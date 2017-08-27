import React from 'react'

import './Banner.css'

export default ({ children }) =>
  (<div>
    <div className="banner mb-1">
      { children }
    </div>
  </div>)
