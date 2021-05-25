import React from 'react';
import Tour from './tour';
const Tours = ({ group }) => {
  return (
    <section>
      <div className="title">
        <h2> 9ijakids Game List</h2>
        <div className="underline"></div>
      </div>
      <div className="container">
        {group.map((tour, index) => {
          return <Tour key={index} {...tour}/>;
        })}
      </div>
    </section>
  );
};

export default Tours;