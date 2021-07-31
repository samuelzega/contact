import React, {useReducer, createContext} from 'react';

export const ContactContext = createContext();

const initialState = {
  contacts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_CONTACTS':
      return {
        ...state,
        contacts: action.payload
      };
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(el => el.id !== action.payload.id)
      };
    case 'UPDATE_CONTACT':
      const foundIndex = state.contacts.findIndex(el => el.id == action.payload.id);
      let allContact = state.contacts
      allContact[foundIndex] = action.payload
      return {
        ...state,
        contacts: allContact
      };
    default:
      return state;
  }
};

export const ContactContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ContactContext.Provider value={[state, dispatch]}>
      {props.children}
    </ContactContext.Provider>
  );
};
