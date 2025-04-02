import React from 'react';

const Format = () => {
    return (
        <div className='py-4 px-4 md:px-12 my-12'>
            <h3 className="text-base mb-1 font-bold text-blue-500">Why Use .riv Icons?</h3>
            <h2 className="text-3xl font-bold text-zinc-50">Rive for Animated Icons</h2>
            <p className="text-zinc-400 mt-3 mb-4">Adding animation to icons is like introducing an entirely new dimension to your design.</p>
            <div className='flex flex-col md:flex-row gap-4 mt-8'>
                <div className='w-full md:w-1/4 rounded-md bg-gradient-to-t from-blue-500/10 to-blue-500/5 border-blue-500/30 border-[1px] p-4 md:p-6'>
                    <h4 className='text-sm text-zinc-50 mb-2'>Interactivity</h4>
                    <p className='text-sm text-zinc-400'>Rive-powered animated icons can easily be made interactive, perfect for a variety of use cases on your websites or apps.</p>
                </div>
                <div className='w-full md:w-1/4 rounded-md bg-gradient-to-t from-blue-500/10 to-blue-500/5 border-blue-500/30 border-[1px] p-4 md:p-6'>
                    <h4 className='text-sm text-zinc-50 mb-2'>Lightweight</h4>
                    <p className='text-sm text-zinc-400'>Vector-based animations created with Rive ensure fast load speeds and smooth runtime performance for your apps and websites.</p>
                </div>
                <div className='w-full md:w-1/4 rounded-md bg-gradient-to-t from-blue-500/10 to-blue-500/5 border-blue-500/30 border-[1px] p-4 md:p-6'>
                    <h4 className='text-sm text-zinc-50 mb-2'>Flexible</h4>
                    <p className='text-sm text-zinc-400'>These icons adapt effortlessly to any size, situation, or color scheme. You can easily customize their colors and dimensions to fit any use case.</p>
                </div>
                <div className='w-full md:w-1/4 rounded-md bg-gradient-to-t from-blue-500/10 to-blue-500/5 border-blue-500/30 border-[1px] p-4 md:p-6'>
                    <h4 className='text-sm text-zinc-50 mb-2'>Open-Source Libraries</h4>
                    <p className='text-sm text-zinc-400'>In order to load and control these animated icons you can use open-source libraries provided by Rive team for any usecase.</p>
                </div>
            </div>
        </div>
    );
};

export default Format;