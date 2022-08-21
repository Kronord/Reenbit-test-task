import React from 'react';
import jwtDecode from 'jwt-decode';
import { UserAuth } from '../Redux/User/UserSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function GoogleAuth() {
  const dispatch = useDispatch();

  function handleCallbackResponse({ credential }) {
    const userObject = jwtDecode(credential);
    if (userObject) {
      dispatch(UserAuth(userObject));
    }
  }

  useEffect(() => {
    /* global google*/
    google.accounts.id.initialize({
      client_id:
        '565152282469-33sguj7n3v48jfv0r7nkejujebo492pd.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className='auth-section'>
    <header className="auth-section__header"></header>
    <div className='sign-in-wrapper'>
      <p className='sign-in-wrapper__text'>Sign in with Google</p>
      <div id='signInDiv'></div>
    </div>
    <footer className='auth-section__footer'></footer>
    </section>
  );
}
