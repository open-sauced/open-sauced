import React from "react";

const Manager = ({data}) => {
  return (
    <div>
      <ul>{data.map((repo) => (
        <li>{repo}</li>
      ))}</ul>
    </div>
  );
}

export default Manager;

