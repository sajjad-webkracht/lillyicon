import React from 'react';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';

const UsecaseRiveIcon = ({ url, className }) => {
  const absoluteUrl = new URL(url, window.location.origin).href;

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
      className='flex justify-center items-center'
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
      <div className={`${className || ''}`}>
        <RiveComponent />
      </div>
    </div>
  );
};

export default UsecaseRiveIcon;