import React from 'react';
import { Link } from 'gatsby';
import Button from '@mui/material/Button';
import HeroIcon from '../components/hero_icon';

const Hero = () => {
    return (
        <section className="flex flex-col relative">
            <div className='bg-gradient-to-b from-blue-500/5 to-blue-500/0 w-full h-56 absolute pointer-events-none' />
            <div className="py-4 px-4 md:px-12 w-full flex flex-col items-center mt-12">
                <h1 className="text-2xl md:text-4xl font-bold text-zinc-50 text-center">
                    Bring Your Projects
                    to Life <br /> With Rive
                    <span className="text-blue-500"> Animated</span> Icons
                </h1>
                <p className="text-zinc-400 mt-3 mb-4 text-center md:w-1/2">
                    Explore this collection of animated icons, crafted by Rive and provided in .riv format. Easily integrate them into your projects for free and enhance your designs effortlessly.
                </p>
                <Link to='/icons' className='inline-block'>
                    <Button variant="outlined" color='ao' size='medium'>Explore Icons</Button>
                </Link>
            </div>
            <div className='py-4 mx-4 md:mx-12 relative mt-10 mb-0 md:mb-12'>
                <div className="flex w-full gap-4 justify-center">
                    <HeroIcon url='/static/icons/calendar.riv' hidden={false} />
                    <HeroIcon url='/static/icons/remove.riv' hidden={false}  />
                    <HeroIcon url='/static/icons/cog.riv' hidden={false}  />
                    <HeroIcon url='/static/icons/clock.riv' hidden={false}  />
                    <HeroIcon url='/static/icons/lock.riv' hidden={true}  />
                    <HeroIcon url='/static/icons/gift.riv' hidden={true} />
                    <HeroIcon url='/static/icons/eye.riv' hidden={true} />
                    <HeroIcon url='/static/icons/globe.riv' hidden={true} />
                    <HeroIcon url='/static/icons/download.riv' hidden={true} />
                </div>
                <div className="flex mt-4 w-full gap-4 justify-center">
                    <HeroIcon url='/static/icons/map.riv' hidden={false} />
                    <HeroIcon url='/static/icons/video.riv' hidden={false} />
                    <HeroIcon url='/static/icons/location.riv' hidden={false} />
                    <HeroIcon url='/static/icons/like.riv' hidden={false} />
                    <HeroIcon url='/static/icons/home.riv' hidden={true} />
                    <HeroIcon url='/static/icons/building.riv' hidden={true} />
                    <HeroIcon url='/static/icons/growth.riv' hidden={true} />
                    <HeroIcon url='/static/icons/edit.riv' hidden={true} />
                    <HeroIcon url='/static/icons/document.riv' hidden={true} />
                </div>
                <div className='bg-gradient-to-r from-nigra to-nigra/0 h-full w-1/4 absolute left-0 top-0 pointer-events-none' />
                <div className='bg-gradient-to-r to-nigra from-nigra/0 h-full w-1/4 absolute right-0 top-0 pointer-events-none' />
            </div>
        </section>
    );
};

export default Hero;