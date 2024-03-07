/* eslint-disable import/no-anonymous-default-export */
import { mount } from 'dashboard/DashboardApp';
import React, { useRef, useEffect } from 'react';

export default (dataForDashboard) => {
  
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current,dataForDashboard);
  }, []);

  return <div ref={ref} />;
};
