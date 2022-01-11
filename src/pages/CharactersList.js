import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./CharacterList.css";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export default function CharactersList() {
  const { error, loading, data } = useQuery(GET_CHARACTERS);

  console.log({ error, loading, data });

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
}
