import {useState} from 'react';
import {data} from './data';
import './App.css';

function App() {
  const [places, setPlaces]= useState(data);
  const [showText, setShowText] = useState(false);
  const removePlace = (id) => {
    let newPlaces = places.filter(place => place.id !== id);
    setPlaces(newPlaces)
  }
const showTextClick = (place) =>{
    place.showMore = !place.showMore
    setShowText(!showText)
  }

  return(
  <div className="places">
    <div className ='container'>
      <h1>Top<span className="number"> {places.length} </span> places to visit <br/>in <span className="city">Los Angeles</span></h1>
    </div>

    {places.map((place) => {
    const {id, placeName, description, image, source, showMore} = place;

      return(
        <div  key = {id}>
          <div className = 'container'>
            <h2>{id}-{placeName}</h2>
          </div>
          <div className = 'container'>
            <p>{showMore ? description : description.substring (0,200) + '..'}
            <button onClick = {() => showTextClick (place)}> {showMore? 'Show less': 'Show more'}
            </button></p>
          </div>
          <div className = 'container'>
            <img src = {image} alt = 'Place to visit' width='500px'/>
          </div>
          <div className ='container'>
            <p>source:  {source}</p>
          </div>
          <div className = 'container'>
            <button className = 'btn' onClick= {() => removePlace(id)}> Remove </button>
          </div>
        </div>
      )
    })}
 
  </div>
  );
}

export default App;
