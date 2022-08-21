import React from 'react';

export default function Message({ author, date, time, message, photo }) {
  return (
    <li
      className={
        author === 'Me' ? 'message-list__item--right' : 'message-list__item'
      }
    >
      {author !== 'Me' && (
        <img src={photo} alt="User" className="message-list__image" />
      )}
      <div className={author === 'Me' ? 'message-box--right' : 'message-box'}>
        <span
          className={
            author === 'Me'
              ? 'message-list__text-box--right'
              : 'message-list__text-box'
          }
        >
          <p
            className={
              author === 'Me'
                ? 'message-list__text--right'
                : 'message-list__text'
            }
          >
            {message}
          </p>
        </span>
        <p className="message-list__date">
          {date}
          <span className="message-list__time">{time}</span>
        </p>
      </div>
    </li>
  );
}
