
import "./RecipeCard.css"; 
import { FaHeart } from "react-icons/fa"; 
import { useState } from 'react';

export default function SingleCard(props){
   const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };
    return (
      
       <div className="travelCard">
         <div className="like-container">
        <FaHeart 
          className="like-icon" 
          onClick={handleLike} 
        />
        {likes > 0 && <span className="like-count">{likes}</span>}
      </div>

  <header className="travel-header">
    <h2>{props.item.placeName}</h2>
    <p>{props.item.nickname}</p>
  </header>

  <section className="travel-details">
    <img 
      src={props.item.img}
      alt="Paris" 
      className="travel-image" 
    />
    <div className="travel-info">
      <p><strong>Best Time to Visit:</strong> {props.item.timeToVisit}</p>
      <p><strong>Highlights:</strong> {props.item.Highlight}</p>
      <p><strong>Type:</strong> {props.item.type}</p>
    </div>
  </section>

  <footer className="travel-footer">
    <small>{props.item.footer}</small>
  </footer>
  </div>

    )
}