import React from 'react'
import Navbar from './Navbar'
import Sidebar from './sidebar'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar />
      <div>
      <div className='flex'>
        <Sidebar />
        {children}
      </div>
      </div>
    </div>
  )
}

export default Layout
