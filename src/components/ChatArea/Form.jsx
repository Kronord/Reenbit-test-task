import React from 'react';
import { useDispatch } from 'react-redux';
import { MdOutlineSend } from 'react-icons/md';
import { useState, useEffect } from 'react';
import {
  addMessage,
  resetCounter,
} from 'components/Redux/Contacts/ContactsSlice';
import moment from 'moment';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Form({ id, name, counter, messages }) {
  const [letter, setLetter] = useState('');
  const dispatch = useDispatch();
  const { chatId } = useParams();
  const date = moment().format('L');
  const time = moment().format('LT');
  const dateLL = moment().format('ll');

  useEffect(() => {
    if (chatId === id.toString() && counter !== 0) {
      setTimeout(() => {
        dispatch(resetCounter({ id }));
      }, 2000);
    };
  });

  const newMessageObj = (author, message) => {
    return {
      id,
      author,
      message,
      date,
      time,
      dateLL,
    };
  };

  const answerApi = async () => {
    try {
      const { data } = await axios.get(
        'https://api.chucknorris.io/jokes/random'
      );
      setTimeout(() => {
        dispatch(addMessage(newMessageObj(name, data.value)));
      }, 10000);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = value => {
    setLetter(value);
  };

  const onEnterPress = e => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      handleSend(e);
    }
  };

  const handleSend = event => {
    event.preventDefault();
    if (letter.trim() !== '') {
      dispatch(addMessage(newMessageObj('Me', letter)));
      setLetter('');
      answerApi();
    }
  };

  return (
    <form
      onSubmit={event => {
        handleSend(event);
      }}
      className="chat-form"
    >
      <textarea
        type="text"
        className="chat-form__input"
        placeholder="Type your message"
        value={letter}
        onChange={event => {
          handleChange(event.target.value);
        }}
        onKeyDown={onEnterPress}
      />
      <button type="submit" className="chat-form__button">
        <MdOutlineSend size="30px" color="#616161" />
      </button>
    </form>
  );
}
