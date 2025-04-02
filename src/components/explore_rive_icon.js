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
      className='bg-blue-500/10 rounded-md flex justify-center items-center py-12 cursor-pointer hover:bg-blue-500/20 duration-200'
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
      <div className='w-10 h-10'>
        <RiveComponent />
      </div>
    </div>
  );
};

export default ExploreRiveIcon;