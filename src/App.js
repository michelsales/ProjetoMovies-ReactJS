import InitialPage from './pages/InitialPage';
import GlobalStyle from  './GlobalStyle';
import React, { useReducer } from 'react';
import {ContextReducer, InitialState, MoviesReducer} from './reducer/MoviesReducer';

function App() {
  const [state, dispatch] = useReducer(MoviesReducer, InitialState);
  
  return (
    <ContextReducer.Provider value={{state, dispatch}}>
        <GlobalStyle/>
        <InitialPage />
    </ContextReducer.Provider> 
  );
}


export default App;
