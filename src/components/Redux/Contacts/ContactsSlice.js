import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../../contactsData';

const addMessageHelper = (state, payload, el) => {
  el.messages.push(payload);
  state.unshift(...state.splice(state.indexOf(el), 1));
}

const ContactsSlice = createSlice({
  name: 'Contacts',
  initialState,
  reducers: {
    addMessage: (state, { payload }) => {
      state.forEach(el => {
        if (el.id === payload.id && payload.author !== 'Me') {
          el.messageCounter += 1;
          addMessageHelper(state, payload, el);
        } else if (el.id === payload.id) {
          addMessageHelper(state, payload, el);
        }
      });
    },
    resetCounter: (state, {payload}) => {
      state.forEach(el => {
        if (el.id === payload.id) {
          return el.messageCounter = 0;
        };
      });
    },
  },
});

export const { addMessage, resetCounter } = ContactsSlice.actions;
export default ContactsSlice.reducer;
