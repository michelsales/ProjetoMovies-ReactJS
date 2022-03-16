import React, { useContext, useEffect, useState } from 'react';

import { Container, ContainerMovies, WrapperList, MovieItem, Infos, WrapperInfos } from './styles';
import { ContextReducer } from '../../reducer/MoviesReducer';
import { BiTimeFive } from 'react-icons/bi';
import { AiOutlineStar } from 'react-icons/ai';

function Content() {
  const {state, dispatch} = useContext(ContextReducer);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(data => setMovies(data));
  }, []);
  

  const renderMovies = () => {
    return(
      <ContainerMovies>
        <WrapperList>
          {movies.map(movie => {
            if(state?.genres?.id === movie.Genre_id){
              return(
                <MovieItem key={movie.Title} >
                    <img src={movie.Poster} alt="Poster do filme" />
                    <Infos>
                      <span>{movie.Title}</span>
                      <WrapperInfos>
                        <span><AiOutlineStar />{movie.Ratings[0].Value}</span>
                        <span><BiTimeFive />{movie.Runtime}</span>
                      </WrapperInfos>
                    </Infos>
                </MovieItem>
              )
            }
          })}
        </WrapperList>
      </ContainerMovies>
    )
  }

  return(
      <Container>
        <h1>Categoria: {state?.genres?.title}</h1>
        {renderMovies()}
      </Container>
  );
}

export default Content;