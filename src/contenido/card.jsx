import React from 'react';
import "./card.css";

export default function Card(){


    return(
<div className="card text-white bg-primary mb-3 estilo-card col-md-4 pull-right" >
  <div className="card-header">Header</div>
  <div className="card-body">
    <h4 className="card-title">Primary card title</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
        
    )
}