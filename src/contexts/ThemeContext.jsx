import { createContext, useContext, useReducer } from "react";

const initialData = {
  theme: 'dark'
};

export const ThemeContext = createContext(undefined);

export const themeActions = {
  setTheme: 'setTheme'
};

const reducer = (state, action) => {
  switch (action.type) {
    case themeActions.setTheme:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialData);
  const value = { state, dispatch };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

const useForm = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useForm needs to be used inside the ThemeProvider');
  }
  return context;
};

export { useForm };
