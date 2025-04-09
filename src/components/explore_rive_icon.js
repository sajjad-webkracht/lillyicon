import React from 'react';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';

const ExploreRiveIcon = ({ url }) => {
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
      className='bg-blue-500/10 rounded-md flex justify-center items-center py-12 cursor-pointer hover:bg-blue-500/20 duration-200'
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
      <div className='w-10 h-10'>
        <RiveComponent />
      </div>
    </div>
  );
};

export default ExploreRiveIcon;