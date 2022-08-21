import React from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';
import Message from './Message';
import { nanoid } from 'nanoid';


export default function ChatArea() {
  const currentUser = useSelector(state => state.persistedReducer.currentContact);
  const contacts = useSelector(state => state.persistedReducer.contacts);

  const contact = currentUser && contacts.find(({ id }) => id === currentUser.id);

  if (contact) {
    const { id, photo, name, messages, messageCounter } = contact;
    return (
      <section className="chat-section">
        <header className="chat-header">
          <img className="chat-header__image" src={photo} alt="User" />
          <p className="chat-header__name">{name}</p>
        </header>
        <ul className="message-list">
          {messages &&
            messages.map(({ author, message, date, time }) => (
              <Message
                key={nanoid()}
                author={author}
                message={message}
                date={date}
                time={time}
                photo={photo}
              />
            ))}
        </ul>
        <Form id={id} name={name} counter={messageCounter} messages={messages}></Form>
      </section>
    );
  }
}
