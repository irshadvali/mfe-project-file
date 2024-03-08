/* eslint-disable import/no-anonymous-default-export */
import { mount } from 'tutorial/TutorialApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
