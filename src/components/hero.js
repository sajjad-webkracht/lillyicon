import * as React from "react";
import { Link } from 'gatsby';
import Button from '@mui/material/Button';

const Hero = () => {
    return (
        <section className="py-4 px-4 md:px-12 flex h-96 items-center">
            <div className="w-full md:w-1/2">
                <h1 className="text-4xl font-bold text-zinc-50">
                    Bring Your Projects 
                    to Life <br /> With Rive
                    <span className="text-blue-500"> Animated</span> Icons
                </h1>
                <p className="text-zinc-400 mt-3 mb-4">
                    Explore this collection of animated icons, crafted by Rive and provided in .riv format. Easily integrate them into your projects for free and enhance your designs effortlessly.
                </p>
                <Link to='/icons' className='inline-block'>
                    <Button variant="outlined" color='ao' size='medium'>Explore Icons</Button>
                </Link>
            </div>
        </section>
    );
};

export default Hero;