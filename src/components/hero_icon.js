import React from 'react';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';

const HeroIcon = ({ url, hidden }) => {
  const absoluteUrl =
    typeof window !== "undefined" ? new URL(url, window.location.origin).href : url;
    
  const { rive, RiveComponent } = useRive({
    src: absoluteUrl,
    stateMachines: 'default',
    autoplay: true,
    shouldDisableRiveListeners: true,
  });
  
  const isClicked = useStateMachineInput(rive, 'default', 'isClicked');

  const isHovered = useStateMachineInput(rive, 'default', 'isHovered');

  return (
    <div
    className={`${
      hidden ? 'hidden md:flex w-[9vw] h-[9vw] xl:w-[10vw] xl:h-[10vw]' : 'flex w-[25vw] h-[25vw] md:w-[9vw] md:h-[9vw] xl:w-[10vw] xl:h-[10vw]'
    } bg-blue-500/10 border-blue-500/30 border-[1px] border-solid rounded-md justify-center items-center py-12`}
      onClick={() => isClicked && isClicked.fire()}
      onMouseEnter={() => {
        if (typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches) {
          if (isHovered) {
            isHovered.value = true;
          }
        }
      }}
      onMouseLeave={() => {
        if (typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches) {
          if (isHovered) {
            isHovered.value = false;
          }
        }
      }}
      
    >
      <div className='w-9 h-9 sm:h-14 sm:w-14'>
        <RiveComponent />
      </div>
    </div>
  );
};

export default HeroIcon;