import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const typeColors = {
  normal: '#A8A878', fire: '#F08030', water: '#6890F0', electric: '#F8D030',
  grass: '#78C850', ice: '#98D8D8', fighting: '#C03028', poison: '#A040A0',
  ground: '#E0C068', flying: '#A890F0', psychic: '#F85888', bug: '#A8B820',
  rock: '#B8A038', ghost: '#705898', dragon: '#7038F8', dark: '#705848',
  steel: '#B8B8D0', fairy: '#EE99AC', default: '#A8A878'
};

export default function PokemonCard({ name, url }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setDetails(data));
  }, [url]);

  if (!details) return <div className="pokemon-card loading"></div>;

  const mainType = details.types[0].type.name;
  const bgColor = typeColors[mainType] || typeColors.default;

  return (
    <Link 
      to={`/pokemon/${name}`} 
      className="pokemon-card" 
      style={{ backgroundColor: bgColor }}
    >
      <div className="card-info">
        <p className="pokemon-id">#{String(details.id).padStart(3, '0')}</p>
        <h3 style={{ textTransform: 'capitalize' }}>{name}</h3>
      </div>
      <div className="image-container">
         <img 
            src={details.sprites.other['official-artwork'].front_default} 
            alt={name} 
         />
      </div>
    </Link>
  );
}