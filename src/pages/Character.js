import React from "react";
import { useCharacter } from "../hooks/useCharacter";
import { useParams } from "react-router";
import "./Character.css";

export const Character = () => {
  const { id } = useParams();

  const { data, loading, error } = useCharacter(id);

  if (error) return <div>Something not working</div>;
  if (loading) return <div>Spinner</div>;

  return (
    <div className='Character'>
      <img src={data.character.image} width={750} height={750} alt='morty' />
      <div className='Character-content'>
        <h1>{data.character.name}</h1>
        <h1>{data.character.gender}</h1>
        <div className='Character-episode'>
          {data.character.episode.map((episode) => {
            return (
              <div key={data.character.id}>
                {episode.name} - <b>{episode.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Character;
