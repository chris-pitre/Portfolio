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
            <li className={`mt-4 py-2 px-4 text-white p-2 rounded bg-opacity-50 text-center transform transition-transform duration-500 ${isActive ? 'bg-rose-900 2xl:hover:scale-110' : 'hover:bg-rose-700 2xl:hover:scale-110'}`}>
                {content}
            </li>
        </Link>
    )
}

const Navbar: React.FC = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='h-screen w-full 2xl:w-64 p-4 fixed text-white'>
            <Link to="/" className='hidden 2xl:flex justify-between py-2 items-center transform transition-transform duration-500 hover:scale-110'>
                <img src={logo} alt='Website Logo' className="h-12 w-auto object-contain rounded" loading="lazy" />
                <span className=" text-white text-xl font-bold">Chris Pitre</span>
            </Link>
            <div className='2xl:hidden flex items-center justify-between'>
                <button onClick={toggleMenu} className='font-bold'>
                    ☰ Menu
                </button>
                <span className='font-bold'>Chris Pitre</span>
                <Link to="/">
                    <img src={logo} alt='Website Logo' className="h-8 w-auto object-contain rounded" loading="lazy" />
                </Link>
            </div>
            
            <ul className={`mt-4 2xl:flex 2xl:flex-col bg-slate-400 bg-opacity-40 2xl:bg-transparent ${isOpen ? 'block' : 'hidden'}`}>
                <NavbarItem itemLink="/" content="Home" isActive={location.pathname === '/'} />
                <NavbarItem itemLink="/about" content="About Me" isActive={location.pathname === '/about/'} />
                <NavbarItem itemLink="/projects" content="Projects" isActive={location.pathname === '/projects/'} />
            </ul>
        </div>
    )
}

export default Navbar