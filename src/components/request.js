import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'gatsby';
import RiveIcon from '../components/rive_icon';

const Request = () => {
    return (
        <div className="py-4 px-4 md:px-12 mb-10 flex flex-col md:flex-row items-center gap-20">
            <div className="w-full md:w-1/2">
                <h3 className="text-base mb-1 font-bold text-blue-500">Ask, and it shall be given you</h3>
                <h2 className="text-3xl font-bold text-zinc-50">Need an Icon? Request It</h2>
                <p className="text-zinc-400 mt-3 mb-4">This set is constantly growing, and new icons are added regularly. Use the form below to suggest one, and I’ll do my best to add it soon. <Link to="/donate" className="underline" >Donations</Link> help speed up the process.</p>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSc6-h15JSjjpbIPzRNGi9ja35QJFRQS8eyR-zpG4_unFNPEzA/viewform?usp=dialog' className='inline-block'>
                    <Button variant="outlined" color='ao' size='medium'>Request Icon</Button>
                </a>
            </div>
            <div className="w-1/2 my-10 hidden md:block">
                <div className="w-full grid-cols-3 grid-rows-3 grid gap-3 md:gap-5 h-72 relative">
                    <div className="bg-blue-500/10 border-blue-500/30 border-[1px] border-solid rounded-md justify-center items-center py-4">
                        <RiveIcon url='/static/icons/setting.riv' />
                    </div>
                    <div className="bg-blue-500/10 border-blue-500/30 border-[1px] border-solid rounded-md justify-center items-center py-4">
                        <RiveIcon url='/static/icons/fingerprint.riv' />
                    </div>
                    <div className="bg-blue-500/10 border-blue-500/30 border-[1px] border-solid rounded-md justify-center items-center py-4">
                        <RiveIcon url='/static/icons/bot.riv' />
                    </div>
                    <div className="bg-blue-500/10 border-blue-500/30 border-[1px] border-solid rounded-md justify-center items-center py-4">
                        <RiveIcon url='/static/icons/translate.riv' />
                    </div>
                    <div className="bg-blue-500/10 border-blue-500/30 border-[1px] border-solid rounded-md justify-center items-center py-4">
                        <RiveIcon url='/static/icons/envelope.riv' />
                    </div>
                    <div className="bg-blue-500/10 border-blue-500/30 border-[1px] border-solid rounded-md justify-center items-center py-4">
                        <RiveIcon url='/static/icons/music.riv' />
                    </div>
                    <div className="bg-blue-500/10 border-blue-500/30 border-[1px] border-solid rounded-md justify-center items-center py-4">
                        <RiveIcon url='/static/icons/heart-rate.riv' />
                    </div>
                    <div className="bg-blue-500/10 border-blue-500/30 border-[1px] border-solid rounded-md justify-center items-center py-4">
                        <RiveIcon url='/static/icons/sticker.riv' />
                    </div>
                    <div className="bg-blue-500/10 border-blue-500/30 border-[1px] border-solid rounded-md justify-center items-center py-4">
                        <RiveIcon url='/static/icons/box.riv' />
                    </div>
                    <div className="w-full h-30 bg-gradient-to-t from-nigra/100 to-nigra/0 absolute bottom-0 left-0 pointer-events-none" />
                    <div className="w-full h-30 bg-gradient-to-b from-nigra/100 to-nigra/0 absolute top-0 left-0 pointer-events-none" />
                </div>
            </div>
        </div>
    );
};

export default Request;