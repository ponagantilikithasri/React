import React from "react";
import Person from "./Person";

export default function Name_List() {
  //   let names = ["Likitha Sri", "Bangaram", "Sankar"];
  // with more objects and properties
  const persons = [
    {
      id: 1,
      name: "Likitha Sri",
      Age: "21",
      Skill: "React",
    },
    {
      id: 2,
      name: "Banagaram",
      Age: "21",
      Skill: "VLSI",
    },
    {
      id: 3,
      name: "Sankar",
      Age: "22",
      Skill: "VUJS",
    },
  ];

  // instead of writing all this statement in  return
  //   just store the names.map() in a variable return this name_list is easy to understand
  const person_list = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  return (
    <div>
      {person_list}
      {/* {names.map((name) => (
        <h1>{name}</h1>
      ))} */}
      {/* {persons.map((person) => (
        <Person person={person} />
      ))} */}
    </div>
  );
}
