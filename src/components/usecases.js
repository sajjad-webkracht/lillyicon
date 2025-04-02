import React from 'react';
import UsecaseRiveIcon from '../components/usecase_rive_icon';

const Usecases = () => {
    return (
        <div className='flex w-full max-w-xl h-80 bg-gradient-to-t from-blue-500/10 to-blue-500/5 rounded-md border-blue-500/30 border-solid border-[1px] overflow-hidden'>
            <div className='w-1/2 relative -translate-y-10 -translate-x-10 bg-nigra h-full rounded-br-4xl flex flex-col justify-between overflow-hidden'>
                <div className='h-60 overflow-hidden pr-10 pb-5 relative'>
                    <p className='text-white/60'>
                        Ubaste, also known as Bastet, was an ancient Egyptian goddess associated with home, fertility, protection, and war. Originally depicted as a lioness, she later took the form of a domestic cat, symbolizing both ferocity and grace. Worshipped primarily in the city of Bubastis, she was revered as a guardian deity who defended households from evil spirits and disease.

                        Ubaste was also linked to joy, music, and dance, embodying a more nurturing and playful aspect of divinity. Egyptians believed she had the power to ward off misfortune and bring prosperity to those who honored her. Temples dedicated to Ubaste housed sacred cats, which were treated as living embodiments of the goddess. Her cult remained popular for centuries, and her influence extended beyond Egypt, shaping later mythologies and artistic traditions.
                    </p>
                    <div className='absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-nigra/100 to-nigra/0' />
                </div>
                <div className='bg-blue-500/20 flex w-full justify-between h-20 px-5'>
                    <UsecaseRiveIcon url="/static/icons/home.riv" className="w-12 h-12" />
                    <UsecaseRiveIcon url="/static/icons/search.riv" className="w-12 h-12" />
                    <UsecaseRiveIcon url="/static/icons/avatar.riv" className="w-12 h-12" />
                </div>
                <div className='h-12 w-2 rounded-md bg-blue-500/20 absolute top-20 right-2' />
            </div>
            <div className='w-1/2 relative translate-y-10 translate-x-10 bg-nigra h-full rounded-tl-2xl flex flex-col justify-start overflow-hidden'>
                <div className='w-full h-10 bg-blue-500/10 flex items-center justify-start px-3'>
                    <UsecaseRiveIcon url="/static/icons/close.riv" className="w-5 h-5" />
                </div>
                <div className='px-6 flex flex-col items-start pt-8'>
                    <UsecaseRiveIcon url="/static/icons/remove.riv" className="w-16 h-16" />
                    <h2 className='text-white font-bold text-2xl mt-2'>Remove Item</h2>
                    <p className='text-white/60'>Are you sure you want to delete video.mp4? This action cannot be undone.</p>
                </div>
            </div>
        </div>
    );
};

export default Usecases;