import React from 'react';
import Rive from '@rive-app/react-canvas';

const Grid = () => {
    return (
        <div className="py-4 px-4 md:px-12 mb-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
                <h3 className="text-base mb-1 font-bold text-blue-500">Standardized Approach</h3>
                <h2 className="text-3xl font-bold text-zinc-50">
                    24 x 24 Grid Used For All Icons
                </h2>
                <p className="text-zinc-400 mt-3">The icons are aligned to a 24px grid and include a 2px padding/safe area for animations and effects, creating a 20x20px live area for the static icon. This consistent and adaptable structure ensures the icons can be seamlessly integrated into diverse interfaces.</p>
            </div>
            <div className='w-full md:w-1/2 flex justify-end items-center'>
                <Rive
                    src="/static/ui/grid.riv"
                    stateMachines="State Machine 1"
                    className='w-[calc(100vw-22px)] h-[calc(100vw-22px)] md:w-[30vw] md:h-[30vw]'
                />
            </div>
        </div>
    );
};

export default Grid;