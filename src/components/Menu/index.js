import React, {useContext, useState, useEffect} from 'react';

import { Container, Li } from './styles';
import {ContextReducer} from '../../reducer/MoviesReducer';
 
const Menu = () =>  {
  const {state, dispatch} = useContext(ContextReducer);
  const [categories, setCategories] = useState([])
  const [selected, setSelected] = useState({});

const handleType = (categorie) => {
    if(categorie){
      dispatch({
        type: "SET_TYPEMOVIE",
        payload: categorie
      })
    }
}

  useEffect(() => {
      fetch('http://localhost:3000/genres')
        .then(response => response.json())
        .then(data => setCategories(data))
  }, []);

  const renderMenu = () => {

    
    return(
      <ul>
          {categories.map(categorie => 
            <Li key={categorie.id} onClick={() => handleType(categorie)}>{categorie.title}</Li>
            )}
      </ul>
    )
  }

  return (
      <Container>
        <h2>Escolha uma categoria:</h2>
        {renderMenu()}
      </Container>
  );
}

export default Menu;