import * as React from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import logo from "../img/logo.png"

interface NavbarItemProps {
    itemLink: string;
    content: React.ReactNode;
    isActive: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({itemLink, content, isActive}) => {
    return (
        <li className='py-2 px-4'>
            <Link
                to={itemLink}
                className={`text-white mr-4 p-2 rounded text-center transform transition-transform duration-500 ${isActive ? 'bg-rose-900' : 'hover:bg-rose-700'} hover:scale-110`}
            >
                {content}
            </Link>
        </li>
    )
}

const Navbar: React.FC = () => {
    const location = useLocation();

    return (
        <div className='h-screen w-64 bg-rose-800 text-white'>
            <div className='p-4'>
                <div className="flex items-center">
                    <Link to="/">
                        <img src={logo} alt='Website Logo' className="h-12 w-auto object-contain rounded transform transition-transform duration-500 hover:scale-110" loading="lazy" />
                    </Link>
                    <span className="ml-3 text-white text-xl font-bold">Chris Pitre</span>
                </div>
                <ul className="mt-4">
                    <NavbarItem itemLink="/" content="Home" isActive={location.pathname === '/'} />
                    <NavbarItem itemLink="/about" content="About Me" isActive={location.pathname === '/about/'} />
                    <NavbarItem itemLink="/projects" content="Projects" isActive={location.pathname === '/projects/'} />
                </ul>
            </div>
        </div>
    )
}

export default Navbar