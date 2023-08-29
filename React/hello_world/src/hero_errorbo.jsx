import React from "react";
export default function Hero_errorbo({ hero_name }) {
  if (hero_name === "joker") {
    throw new Error("Not a hero");
  }
  return <div>{hero_name}</div>;
}
