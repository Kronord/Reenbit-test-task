import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRoute({ component: routerComponent }) {
  const isLoggedIn = useSelector(state => state.persistedReducer.user);

  return isLoggedIn ? routerComponent : <Navigate to="/" />;
}

