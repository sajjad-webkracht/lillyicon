import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'gatsby';
import Usecases from '../components/usecases';

const Usage = () => {
    return (
        <div className="py-4 px-4 md:px-12 mb-10 flex flex-col md:flex-row items-center gap-20">
            <div className="hidden lg:block">
                <Usecases />
            </div>
            <div className="w-full lg:w-1/2">
                <h3 className="text-base mb-1 font-bold text-blue-500">Where Can I Use These Icons?</h3>
                <h2 className="text-3xl font-bold text-zinc-50">Animated Icons Usage</h2>
                <p className="text-zinc-400 mt-3 mb-4">Lilly icons are crafted with a simple and minimal aesthetic, making them perfectly suited for any app or website interface. Their clean design and subtle animations ensure seamless integration, enhancing user interactions and adding thoughtful detail to every corner of your product.</p>
                <Link to='/guides' className='inline-block'>
                    <Button variant="outlined" color='ao' size='medium'>How to use</Button>
                </Link>
            </div>
        </div>
    );
};

export default Usage;