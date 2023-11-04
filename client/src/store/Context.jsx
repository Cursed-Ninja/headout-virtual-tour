import React, { createContext, useReducer, useContext } from "react";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")),
  isLoggedIn: localStorage.getItem("user") ? true : false,
  isSeller: JSON.parse(localStorage.getItem("user"))?.isSeller,
};

// Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        isSeller: action.payload.isSeller,
      };
    case "LOGOUT":
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
