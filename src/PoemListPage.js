import React from "react";
import { Link } from "react-router-dom";
import POEMS from "./poems";

export default function PoemListPage() {
  return (
    //displays short paragraph and an unordered list. It iterates over the POEMS array to create <li> instances
    <>
      <p>Choose a poem from the list below.</p>
      <ul className="PoemList">
        {POEMS.map((poem) => (
          <li key={poem.id}>
            <Link to={`/poem/${poem.id}`}>{poem.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
