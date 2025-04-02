import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'gatsby';

const Start = () => {
    return (
        <div className='py-12 flex flex-col items-center relative px-4 md:px-12 bg-gradient-to-t from-blue-500/10 to-blue-500/0'>
            <span className='text-sm font-bold text-blue-500 mb-3 text-center block'>Bring Your Work to Life</span>
            <h1 className="text-3xl text-center font-bold text-zinc-50">Add <span className='text-blue-500'>Animated</span> Icons to Your Project</h1>
            <p className="text-zinc-400 mt-3 mb-4 text-sm w-full md:w-1/3 text-center">Easily download these free Rive animated icons, add them to your project with Rive Runtime, and you’re done.</p>
            <Link to='/icons' className='inline-block'>
                    <Button variant="outlined" color='ao' size='medium'>Explore Icons</Button>
            </Link>

        </div>
    );
};

export default Start;