import React from "react";
import { useDispatch } from "react-redux";
import { bandRemoved } from "./bandsSlice"

function Band({ band }) {
  const dispatch = useDispatch();
  const { id, name } = band

  function handleRemove() {
    dispatch(bandRemoved({ id }))
  }

  return (
    <li>
      <span>{name}</span>
      <button onClick={handleRemove}>Delete Band</button>
    </li>
  )
}

export default Band