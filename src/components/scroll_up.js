import React, { useState, useEffect } from 'react';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';


const Scrollup = () => {
    const [isVisible, setIsVisible] = useState(false);

      const { rive, RiveComponent } = useRive({
        src: "/static/ui/arrow-up.riv",
        stateMachines: 'default',
        autoplay: true,
        shouldDisableRiveListeners: true,
      });

        const isClicked = useStateMachineInput(rive, 'default', 'isClicked');
      
        const isHovered = useStateMachineInput(rive, 'default', 'isHovered');

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        if (isClicked) {
            console.log('isClicked fired');
            isClicked.fire();
        }
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-4 right-4 md:right-12 md:bottom-12 z-20">
            <div
                onClick={scrollToTop}
                onMouseEnter={() => {
                  if (isHovered) {
                    isHovered.value = true;
                  }
                }}
                onMouseLeave={() => {
                  if (isHovered) {
                    isHovered.value = false;
                  }
                }}
                className={`bg-blue-500/20 backdrop-blur-md hover:bg-blue-500 active:scale-95 w-14 h-14 rounded-full flex justify-center items-center cursor-pointer shadow-lg hover:shadow-xl duration-300 ease-in-out transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
                <div className='w-6 h-6'>
                    <RiveComponent />
                </div>
            </div>
        </div>
    );
};

export default Scrollup;