import React from "react";
import { useCharacter } from "../hooks/useCharacter";

export const Character = () => {
  const { data, loading, error } = useCharacter(4);

  console.log(data, loading, error);

  return <div>hhvhkvh</div>;
};

export default Character;
