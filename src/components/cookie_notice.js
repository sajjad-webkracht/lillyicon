import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';


const CookieNotice = () => {
    const [showNotice, setShowNotice] = useState(false);

    useEffect(() => {
        const cookieConsent = localStorage.getItem('cookieConsent');
        if (!cookieConsent) {
            setShowNotice(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setShowNotice(false);
    };

    if (!showNotice) {
        return null;
    }

    return (
        <div className="z-50 fixed bottom-0 left-0 w-full md:w-1/4 md:bottom-12 md:left-12 bg-nigra text-zinc-400 p-4 gap-4 flex justify-between items-center md:rounded-md border-blue-500/10 md:border-solid md:border-[1px]">
            <p className="text-sm">
            We use cookies to personalize content, and analyze traffic.
            </p>
            <Button
                onClick={handleAccept}
                variant="outlined" color='ao' size='medium'
                >
                Okay
            </Button>
        </div>
    );
};

export default CookieNotice;