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
            <div className='flex'>
            <Navbar />
                    <div className='grid place-items-center h-screen'>
                        <div className='col-start-1 row-start-1'>
                            {children}
                        </div>
                    </div>
            </div>
        </div> 
    )
}

export default Layout
