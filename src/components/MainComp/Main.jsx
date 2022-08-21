import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';

export default function Main() {
  return (
    <main className="global-wrap">
      <Sidebar />
      <Outlet />
    </main>
  );
}
