import React from 'react';
import userImage from '../../Images/userImage.png';
import { GoSearch } from 'react-icons/go';
import { useSelector, useDispatch } from 'react-redux';
import { change } from 'components/Redux/Filter/filterSlice';
import Contact from './Contact';
import { UserAuth } from 'components/Redux/User/UserSlice';



export default function Sidebar() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.persistedReducer.contacts);
  const searchName = useSelector(state => state.persistedReducer.filter);
  const user = useSelector(state => state.persistedReducer.user);

  const handleChange = event => {
    dispatch(change(event.target.value));
  };

  const handleLogOut = () => {
    dispatch(UserAuth(null));
  };

  const normalizedFilter = searchName.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <section className="sidebar">
      <div className="user-wrapper">
        <div className="user-info-box">
          <img
            className="user-wrapper__image"
            src={user ? user.picture : userImage}
            alt="user"
          />
          <p className="user-wrapper__text">{user ? user.name : 'User'}</p>
          <button type="button" className="user-wrapper__btn" onClick={handleLogOut}>Log Out</button>
        </div>
        <div className="input-wrap">
          <input
            className="input-wrap__input"
            placeholder="Search"
            type="text"
            value={searchName}
            onChange={handleChange}
          />
          <GoSearch
            style={{ position: 'absolute', top: '7px', left: '12px' }}
            color="#959595"
          />
        </div>
      </div>
      <div className="contacts-wrap">
        <h3 className="contacts-wrap__title">Chats</h3>
        <ul className="contacts-list">
          {filteredContacts.map(
            ({ id, photo, name, messages, messageCounter }) => (
              <Contact
                key={id}
                id={id}
                photo={photo}
                name={name}
                messages={messages}
                counter={messageCounter}
              />
            )
          )}
        </ul>
      </div>
    </section>
  );
}
