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

  const isHover = useStateMachineInput(rive, 'default', 'isHover');

  return (
    <div
      className='bg-blue-500/5 rounded-md flex justify-center items-center h-full py-16'
      onClick={() => isClicked && isClicked.fire()}
      onMouseEnter={() => {
        if (isHover) {
          isHover.value = true;
        }
      }}
      onMouseLeave={() => {
        if (isHover) {
          isHover.value = false;
        }
      }}
      
    >
      <div className='w-20 h-20'>
        <RiveComponent />
      </div>
    </div>
  );
};

export default ExploreRiveIcon;