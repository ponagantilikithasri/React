import React from "react";

export default function Person({ person }) {
  return (
    <div>
      <h1>
        I'm {person.name} I'm {person.Age} years old and I know {person.Skill}
      </h1>
    </div>
  );
}
