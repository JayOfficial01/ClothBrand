import React from 'react';
import "./ArticleCard.css"
function ArticleCard(props) {
  const { heading, product, price, imgSrc } = props; // Destructure the props object

  return (
    <>
      <div className="article-card">
        <img src={imgSrc} alt="Shirt" />
        <div className="card-content">
          <div>
            <h3>{heading}</h3>
            <label>{product}</label>
          </div>
          <div>
            <button>{price}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleCard;
