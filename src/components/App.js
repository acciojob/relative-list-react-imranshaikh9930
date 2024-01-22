import React from "react";

const App = () => {

  const relatives = [
    'sharma Uncle',
    ' Jadav Aunt ',
    'Cousin Naina',
    'Grandpa Jagtap',
    'Grandma Jyoti',
  ];
  return (

    <div id="main">
      <h2>Diwali Shopping List</h2>
      <ol key="relativeList">
        {relatives.map((relative, index) => (
          <li key={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;
