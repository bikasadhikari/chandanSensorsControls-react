import React from "react";
import { Link } from "react-router-dom";

const ProductCards = (props) => {
  return (

      <div className="card text-center" style={{borderRadius: '10px'}}>
        <div className="overflow">
          <img src={props.image} alt="" className="card-img-top" />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text text-secondary">
            {props.info}
          </p>
          <Link to="/" className="btn btn-outline-success">More</Link>
        </div>
      </div>
  );
};

export default ProductCards;
