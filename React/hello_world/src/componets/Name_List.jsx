import React from "react";
import Person from "./Person";

export default function Name_List() {
  let persons = ["Likitha Sri", "Bangaram", "Sankar"];
  // instead of writing all this statement in  return
  //   just store the names.map() in a variable return this name_list is easy to understand
  // if there is  no unique id we use this
  const person_list = persons.map((person, index) => (
    <Person key={index} person={person} />
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
