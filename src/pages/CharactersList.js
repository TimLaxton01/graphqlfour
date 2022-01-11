import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import "./CharacterList.css";

export const CharactersList = () => {
  const { error, loading, data } = useCharacters();
  if (loading) return <div>Spinner...</div>;

  if (error) return <div>Something isnt working...</div>;

  return (
    <div className='CharacterList'>
      {data.characters.results.map((character) => {
        return (
          <div key={character.id}>
            <img src={character.image} alt='rick' />
            <h2> {character.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default CharactersList;
