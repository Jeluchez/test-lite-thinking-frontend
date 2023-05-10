import React from 'react'
import { Navbar } from '../navbar/navbar'

interface LayoutProps {
  children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  // if user is authenticate return children, otherwise return it wiwth navbar
  return (
    <div className='layout'>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
