import React, { useState } from 'react';
import './detail.css'

const Tour = ({GameTitle, GameDescription, Topic, Group, Level, Subject, GameImage }) => {
  return (
    <article className="single-tour">
        <img src={GameImage} alt={GameTitle} />
        <div className="cards">
          <h2 className="game-card-h2">{GameTitle}</h2>
          <hr />
          <div className="game-card-content">
            <h3>{Topic} </h3>
            <h4 className="game-card-span">{Group}</h4>
            <h3>{Level} <span className="game-card-span">{Subject}</span></h3>
            <p>{GameDescription}</p>
          </div>
          
          
        </div>


        {/* <div className="cards">
            <h2 className="game-card-h2">{GameTitle}</h2>
            <div className="game-content">
              <div className="game-content-part1">
                <span>
                  <h3>{Topic}</h3>
                  <h4>{Group}</h4>
                </span>
               
              </div>
              <div>
                <h4>{Level}</h4>
                <h4>{Subject}</h4>
            </div>
          </div>
          <p>{GameDescription}</p>
        </div> */}
    </article>
  );
};

export default Tour;
