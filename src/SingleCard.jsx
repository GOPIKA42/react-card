
import "./RecipeCard.css"; 

export default function SingleCard({placeName,nickname,img,timeToVisit,Highlight,type,footer}){
    return (
       <div className="travelCard">
  <header className="travel-header">
    <h2>{placeName}</h2>
    <p>{nickname}</p>
  </header>

  <section className="travel-details">
    <img 
      src={img}
      alt="Paris" 
      className="travel-image" 
    />
    <div className="travel-info">
      <p><strong>Best Time to Visit:</strong> {timeToVisit}</p>
      <p><strong>Highlights:</strong> {Highlight}</p>
      <p><strong>Type:</strong> {type}</p>
    </div>
  </section>

  <footer className="travel-footer">
    <small>{footer}</small>
  </footer>
  </div>

    )
}