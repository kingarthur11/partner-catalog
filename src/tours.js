import React from 'react';
import Tour from './tour';
const Tours = ({ group }) => {
  return (
    <section>
      <div className="game-content">
        <div className="title">
          <h2 className="game-header"> 9ijakids Game List</h2>
          <div className="underline"></div>
        </div>
        <div className="container">
          {group.map((tour, index) => {
            return <Tour key={index} {...tour}/>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Tours;