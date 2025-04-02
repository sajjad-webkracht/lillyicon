import React, { useEffect, useState } from 'react';
import DownloadRiveIcon from '../components/download_rive_icon';
import SvgIcon from '@mui/material/SvgIcon';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Snackbar from '@mui/material/Snackbar';
import { Link } from 'gatsby';
import IconButton from '@mui/material/IconButton';

const Download = ({ icon, onClose }) => {
    const [showCopiedMessage, setShowCopiedMessage] = useState(false);


    useEffect(() => {
        // Add class to body to disable scrolling
        document.body.classList.add('overflow-hidden');

        // Update the URL without reloading the page
        if (icon && icon.name) {
            window.history.pushState({}, '', `/icons/${icon.name.toLowerCase().replace(/ /g, '-')}`);
        }

        // Cleanup function to remove class when component unmounts
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [icon]);

    const handleClose = () => {
        // Revert the URL to the default state
        window.history.pushState({}, '', '/icons/');
        // Call the onClose function
        onClose();
    };

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            setShowCopiedMessage(true);
            setTimeout(() => {
                setShowCopiedMessage(false);
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowCopiedMessage(false);
    };

    
    return (
        <div className="fixed z-40 inset-0 bg-nigra/90 md:flex justify-center items-center overflow-y-scroll">
            <div className="bg-nigra border-blue-500/30 border-[1px] p-4 md:rounded-lg relative w-full md:w-11/12 lg:w-9/12 flex flex-col md:flex-row gap-4 overflow-y-scroll items-end md:items-stretch">
                
                <button onClick={handleClose} className="md:absolute top-3 right-2 w-fit">
                    <IconButton aria-label="delete" color='ao' >
                            <SvgIcon fontSize='small'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                >
                                    <path class="st0" d="M21,19" />
                                    <path class="st0" d="M3,19" />
                                    <path class="st1" d="M13.4,12l7.3-7.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L12,10.6L4.7,3.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l7.3,7.3
	l-7.3,7.3c-0.4,0.4-0.4,1,0,1.4C3.5,20.9,3.7,21,4,21s0.5-0.1,0.7-0.3l7.3-7.3l7.3,7.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3
	c0.4-0.4,0.4-1,0-1.4L13.4,12z"/>
                                </svg>
                            </SvgIcon>
                    </IconButton>
                </button>
                
                <div className='w-full md:w-1/2 relative'>
                    <DownloadRiveIcon url={icon.riv} />
                    <a href='/guides/#color' target='_blank' className='absolute top-2 right-2'>
                        <Button variant="outlined" color='ao' size='small' >
                            How to Change Colors
                        </Button>
                    </a>
                    <button onClick={handleShare} className='absolute top-2 left-2 '>
                        <Button variant="outlined" color='ao' size='small' >
                            share
                        </Button>
                    </button>
                </div>
                <div className='w-full md:w-1/2'>
                    <h2 className="text-lg md:text-xl font-bold text-zinc-50 mb-6">{icon.name} Free Animated Icon</h2>
                    <div className="mt-4">
                        <div className='flex flex-col gap-2'>
                            <a href={icon.riv} download className='w-full'>
                                <Button variant="outlined" color='ao' size='large' className='w-full' >
                                    Download .riv
                                </Button>
                            </a>
                        </div>


                        <div className='flex flex-col lg:flex-row gap-2 mt-2'>
                            <a href={icon.svg} download className='w-full'>
                            <Button variant="outlined" color='ao' size='large' className='w-full' >
                                    Download .svg
                                </Button>
                            </a>
                            <a href={icon.png} download className='w-full'>
                            <Button variant="outlined" color='ao' size='large' className='w-full' >
                                    Download .png
                                </Button>
                            </a>
                        </div>

                        <div className='mt-8'>
                            <h3 className='text-zinc-50 mb-2 text-sm font-bold'>CC BY 4.0 License</h3>
                            <p className="text-zinc-400 mb-4">
                                This icon is licensed under the <a href='https://creativecommons.org/licenses/by/4.0/' target="_blank" className="underline"> Creative Commons Attribution 4.0 International (CC BY 4.0)</a> license.
                            </p>
                        </div>

                        <div className='mt-8'>
                            <Alert severity="info" color='ao'>
                                <AlertTitle>Learn How to Use</AlertTitle>
                                If you're unsure how to use the animated icon, check out the <Link to='/guides' className='underline'>guide here</Link>.
                            </Alert>
                        </div>

                    </div>
                </div>
            </div>
            <Snackbar
                open={showCopiedMessage}
                autoHideDuration={2000}
                onClose={handleSnackbarClose}
                message="URL Copied!"
            />
            <div className={`h-[50vh] w-full bg-gradient-to-t from-blue-500/5 to-blue-500/0 absolute bottom-0 left-0 -z-10 fade-in duration-200`} /></div>
    );
};

export default Download;