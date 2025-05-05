import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'gatsby';
import Rive from '@rive-app/react-canvas';
import * as rive from "@rive-app/canvas";


const Color = () => {

    useEffect(() => {
        const canvas = document.getElementById("canvas");
        if (canvas) {
            const r = new rive.Rive({
                src: "/static/icons/heart-rate.riv",
                canvas: canvas,
                autoplay: true,
                stateMachines: "default",
                autoBind: false,
                onLoad: () => {
                    r.resizeDrawingSurfaceToCanvas();
                },
            });
        }
    }, []); // Empty dependency array ensures this runs only once after the component mounts



    return (
        <div className="py-4 px-4 md:px-12 mb-10 flex flex-col md:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2">
                <h3 className="text-base mb-1 font-bold text-blue-500">Change Icon Colors Easily</h3>
                <h2 className="text-3xl font-bold text-zinc-50">Runtime Color Control</h2>
                <p className="text-zinc-400 mt-3 mb-4">With Rive’s innovative "data binding" feature, developers can easily change icon colors directly in their code, no design software needed. This makes it simple to integrate the icons into any project without any issue.</p>
                <Link to='/guides/#color' className='inline-block'>
                    <Button variant="outlined" color='ao' size='medium'>How to change colors</Button>
                </Link>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center'>
                <div className=' bg-gradient-to-t from-blue-500/10 to-blue-500/5 rounded-md border-blue-500/30 border-solid border-[1px]'>
                    <canvas id="canvas" width="100" height="100"></canvas>
                </div>
            </div>
        </div>
    );
};

export default Color;