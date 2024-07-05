import * as React from 'react'
import Navbar from './navbar'
import WebGLShader from '../components/webglshader'

interface LayoutProps {
    pageTitle: string;
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({pageTitle, children}) => {
    return (
        <div>
            <WebGLShader />
            <div className='flex text-white'>
                <Navbar />
                <div className='grid place-items-center text-center w-screen h-screen'>
                    {children}
                </div>
            </div>
        </div> 
    )
}

export default Layout
