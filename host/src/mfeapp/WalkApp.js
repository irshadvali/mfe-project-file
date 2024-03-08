/* eslint-disable import/no-anonymous-default-export */
import { mount } from 'walk/WalkApp';
import React, { useRef, useEffect } from 'react';

export default (dataForCartApp) => {
  
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current, dataForCartApp);
  }, []);

  return <div ref={ref} />;
};
