import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Button from '@mui/material/Button';
import RiveIcon from '../components/rive_icon';
import Alert from '@mui/material/Alert';
import Back from '../images/arrow-right.svg';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
          document.body.classList.add('no-scroll');
        } else {
          document.body.classList.remove('no-scroll');
        }
      }, [isMenuOpen]);


    return (
        <div>
            <header className='w-full sticky top-0 left-0 bg-[#0f1214]/80 backdrop-blur-md z-10 flex justify-between items-center py-4 px-4 md:px-12 border-b border-y-zinc-900 border-solid'>
                <div className='flex items-center gap-8'>
                    <Link to='/' className='text-zinc-50 text-xl font-bold'>
                        <span className='text-blue-500'>LILLY</span>ICON
                    </Link>
                    <div className='hidden lg:flex gap-4'>
                        <Link to='/icons' className='text-zinc-50 hover:text-zinc-200 text-sm duration-150'>
                            <Button size='small' color='ao'>Icons</Button>
                        </Link>
                        <Link to='/guides' className='text-zinc-50 hover:text-zinc-200 text-sm duration-150'>
                            <Button size='small' color='ao'>Guides</Button>
                        </Link>
                        <Link to='/about' className='text-zinc-50 hover:text-zinc-200 text-sm duration-150'>
                            <Button size='small' color='ao'>About</Button>
                        </Link>
                    </div>
                </div>
                <div className='hidden lg:flex items-stretch gap-4'>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSc6-h15JSjjpbIPzRNGi9ja35QJFRQS8eyR-zpG4_unFNPEzA/viewform?usp=dialog' target='_blank' className='bg-blue-500/10 border-[1px] border-blue-500/30 rounded-sm hover:bg-blue-500/20 duration-200 px-4 py-1 text-blue-300 text-sm'>
                        Looking for an icon that’s not available yet?
                    </a>
                    <Link to='/donate' className=''>
                        <Button variant="outlined" color='ao' size='small'>Donate</Button>
                    </Link>
                </div>
                <button className='w-6 h-6 lg:hidden' onClick={toggleMenu}>
                    <RiveIcon url='static/ui/hamburger-menu.riv' />
                </button>
            </header>
            <div className={`fixed top-0 right-0 h-svh w-full flex flex-col justify-between bg-[#0f1214]/90 backdrop-blur-md z-30 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div>
                    <button className='w-full bg-blue-500/10 p-4 mt-4 ml-4 rounded-l-md' onClick={toggleMenu}>
                        <img src={Back} alt="back" className='w-6 h-6' />
                    </button>
                    <nav className='flex flex-col p-4'>
                        <Link to='/icons' className='text-zinc-50 hover:text-zinc-200 text-md duration-150 py-2'>Icons</Link>
                        <Link to='/guides' className='text-zinc-50 hover:text-zinc-200 text-md duration-150 py-2'>Guides</Link>
                        <Link to='/about' className='text-zinc-50 hover:text-zinc-200 text-md duration-150 py-2'>About</Link>
                        <Link to='/donate' className='text-zinc-50 hover:text-zinc-200 text-md duration-150 py-2'>Donate</Link>
                    </nav>
                </div>
                <div className='flex flex-col md:flex-row justify-between gap-2 md:items-center py-4 px-4 md:py-8 border-t border-solid border-y-zinc-900'>
                    <span className='text-zinc-400 text-sm'>
                        © 2025 Lilly Icon. All rights reserved.
                    </span>
                    <span className='text-zinc-400 text-sm'>
                        Made with love by <a href='https://sajjaddashti.ir/' className='underline'>Sajjad Dashti</a>
                    </span>
                </div>
            </div>
            <div>
                {children}
            </div>
            <footer className='w-full flex flex-col py-4 px-4 md:px-12 border-t border-y-zinc-900 border-solid'>
                <div className='flex flex-col md:flex-row justify-between gap-10 md:gap-4 my-10'>
                    <div className='w-full md:w-2/5'>
                        <Link to='/' className='text-zinc-50 text-2xl font-bold'>
                            <span className='text-blue-500'>LILLY</span>ICON
                        </Link>
                        <p className="text-zinc-400 text-sm mt-3 mb-4">
                            This is a free personal project created by <a href='https://sajjaddashti.ir/' className='underline'>Sajjad Dashti</a> for the creative community, featuring animated icons made with <a href='https://rive.app/' className='underline'>Rive</a> and licensed under the <a href='https://creativecommons.org/licenses/by/4.0/' className='underline'>Creative Commons Attribution 4.0 International (CC BY 4.0) License</a>.
                        </p>
                    </div>
                    <div className='w-full md:w-1/5 flex flex-col gap-2'>
                        <h2 className='mb-2 text-sm font-bold text-blue-500'>Resources</h2>
                        <Link to='/guides' className='text-zinc-50 text-sm hover:underline'>Lilly Icon Guides</Link>
                        <a href='https://rive.app/docs/runtimes' className='text-zinc-50 text-sm hover:underline'>Rive Runtime Documentation</a>
                        <a href='https://rive.app/docs/editor/interface-overview/overview' className='text-zinc-50 text-sm hover:underline'>Rive Editor Documentation</a>
                    </div>
                    <div className='w-full md:w-1/5 flex flex-col gap-2'>
                        <h2 className='mb-2 text-sm font-bold text-blue-500'>Project</h2>
                        <Link to='/icons' className='text-zinc-50 text-sm hover:underline'>Explore Icons</Link>
                        <Link to='/about' className='text-zinc-50 text-sm hover:underline'>About Lilly Icon</Link>
                        <Link to='/donate' className='text-zinc-50 text-sm hover:underline'>Donate</Link>
                        <Link to='/guides/#licensing' className='text-zinc-50 text-sm hover:underline'>License</Link>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-between gap-2 md:items-center py-4 md:py-8 border-t border-solid border-y-zinc-900'>
                    <span className='text-zinc-400 text-sm'>
                        © 2025 Lilly Icon. All rights reserved.
                    </span>
                    <span className='text-zinc-400 text-sm'>
                        Made with love by <a href='https://sajjaddashti.ir/' className='underline'>Sajjad Dashti</a>
                    </span>
                </div>
            </footer>
        </div>
    );
};

export default Layout;