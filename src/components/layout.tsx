import * as React from 'react'
import Navbar from './navbar'

interface LayoutProps {
    pageTitle: string;
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({pageTitle, children}) => {
    return (
        <div className='flex bg-black'>
            <Navbar />
            <div className='flex-1'>
                {children}
            </div>
        </div>
    )
}

export default Layout
