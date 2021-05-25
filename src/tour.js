import React, { useState } from 'react';
import './detail.css'

const Tour = ({GameTitle, GameDescription, Topic, Group, Level, Subject, GameImage }) => {
  return (
    <article className="single-tour">
        <img src={GameImage} alt={GameTitle} />
        <div className="cards">
            <h2>{GameTitle}</h2>
            <div className="content">
              <div>
                <h3>{Topic}</h3>
                <h4>{Group}</h4>
              </div>
              <div>
                <h4>{Level}</h4>
                <h4>{Subject}</h4>
            </div>
          </div>
          <p>{GameDescription}</p>
        </div>
    </article>
  );
};

export default Tour;
