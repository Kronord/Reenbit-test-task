import React from 'react';
import { saveCurrentContact } from 'components/Redux/CurrentContact/CurrentContactSlice';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetCounter } from 'components/Redux/Contacts/ContactsSlice';


export default function Contact({ id, photo, name, messages, counter }) {
  const dispatch = useDispatch();

  return (
    <li className={counter === 0 ? "contacts-list__item" : "contacts-list__item--new"}>
      <NavLink
        to={id.toString()}
        onClick={() => {
          if (counter !== 0) {
            dispatch(resetCounter({ id }));
          }
          dispatch(saveCurrentContact({ id }));
        }}
        className="contacts-list__link"
      >
        <img className="contacts-list__image" src={photo} alt="user" />
        <div className="text-box">
          <p className="contacts-list__name">{name}</p>
          <p className="contacts-list__message">
            {messages[messages.length - 1].message}
          </p>
        </div>
        <p className={counter === 0 ? "contacts-list__date" : "contacts-list__date--new"}>
          {messages[messages.length - 1].dateLL}
        </p>
        {counter !== 0 && (
          <div className="counter-box">
            <p className="counter-box__text">{counter}</p>
          </div>
        )}
      </NavLink>
    </li>
  );
}
