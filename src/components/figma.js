import React from 'react';
import Button from '@mui/material/Button';
import FigmaScreenshot from '../images/figma-plugin-screenshot.png';

const Figma = () => {
    return (
        <div className="py-4 md:py-12 px-4 md:px-12 mb-10 flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-20">
            <div className='w-full lg:w-1/2'>
                <h3 className="text-base mb-1 font-bold text-blue-500">Add Lilly Icons Easily</h3>
                <h2 className="text-3xl font-bold text-zinc-50">Figma Plugin for Lilly Icon</h2>
                <p className="text-zinc-400 mt-3 mb-4">The Lilly Icon Figma plugin is now available! Use it to quickly add static versions of icons to your Figma designs—completely free. Developers can later download the .riv animated versions from the website when building the app or website.</p>
                <a href='https://www.figma.com/community/plugin/1501698853335905566/lilly-icon-free-rive-animated-static-icons' target='_blank' className='inline-block'>
                    <Button variant="outlined" color='ao' size='medium'>Get the plugin</Button>
                </a>
            </div>
            <div className='w-full lg:w-1/2  bg-gradient-to-t from-blue-500/10 to-blue-500/5 rounded-md border-blue-500/30 border-solid border-[1px] overflow-hidden'>
                <img src={FigmaScreenshot} alt="Figma Plugin Screenshot" className='w-full h-full 2xl:h-96 object-contain md:px-10 md:translate-y-10 px-5 translate-y-5' />
            </div>
        </div>
    );
};

export default Figma;