
import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  user: null,
  isLoggedIn: false,
  isSeller: null,
};

// Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        isSeller: action.payload.isSeller,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isLoggedIn: false,
        isSeller: null,
      };
    default:
      return state;
  }
};

// Create context
const UserContext = createContext();

// Create provider component
const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

export default UserProvider;
