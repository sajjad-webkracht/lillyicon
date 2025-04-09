import React from 'react';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';

const UsecaseRiveIcon = ({ url, className }) => {
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
      className='flex justify-center items-center'
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
      <div className={`${className || ''}`}>
        <RiveComponent />
      </div>
    </div>
  );
};

export default UsecaseRiveIcon;