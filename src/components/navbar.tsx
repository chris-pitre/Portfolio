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
        <Link to={itemLink}>
            <li className={`mt-4 py-2 px-4 text-white mr-4 p-2 rounded bg-opacity-50 text-center transform transition-transform duration-500 ${isActive ? 'bg-rose-900 hover:scale-110' : 'hover:bg-rose-700 hover:scale-110'}`}>
                {content}
            </li>
        </Link>
    )
}

const Navbar: React.FC = () => {
    const location = useLocation();

    return (
        <div className='h-screen w-64 p-4 text-white'>
            <Link to="/" className='justify-between flex py-2 items-center transform transition-transform duration-500 hover:scale-110'>
                <img src={logo} alt='Website Logo' className="h-12 w-auto object-contain rounded" loading="lazy" />
                <span className=" text-white text-xl font-bold">Chris Pitre</span>
            </Link>
            <ul className="mt-4">
                <NavbarItem itemLink="/" content="Home" isActive={location.pathname === '/'} />
                <NavbarItem itemLink="/about" content="About Me" isActive={location.pathname === '/about/'} />
                <NavbarItem itemLink="/projects" content="Projects" isActive={location.pathname === '/projects/'} />
            </ul>
        </div>
    )
}

export default Navbar