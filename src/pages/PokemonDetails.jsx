import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const typeColors = {
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  electric: "#F8D030",
  grass: "#78C850",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  fairy: "#EE99AC",
  default: "#A8A878",
};

export default function PokemonDetails() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then(setData);
  }, [name]);

  if (!data) return <p className="loading">Searching the tall grass...</p>;

  const mainType = data.types[0].type.name;
  const bgColor = typeColors[mainType] || typeColors.default;

  return (
    <div className="details-container">
      <div className="details-nav">
        <button className="back-button" onClick={() => navigate(-1)}>
          &larr; Back to List
        </button>
      </div>

      <div className="details-card">
        <div className="details-header" style={{ backgroundColor: bgColor }}>
          <img
            src={data.sprites.other["official-artwork"].front_default}
            alt={data.name}
            className="details-image"
          />
          <h1>{data.name}</h1>
        </div>

        <div className="info-grid">
          <div className="info-section">
            <h3>Basics</h3>
            <p>
              <b>Height:</b> {data.height / 10} m
            </p>
            <p>
              <b>Weight:</b> {data.weight / 10} kg
            </p>
            
            <div className="types-container" style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
              <b>Types:</b> 
              {data.types.map(t => (
                <span 
                  key={t.type.name} 
                  style={{
                    backgroundColor: typeColors[t.type.name],
                    color: 'white',
                    padding: '2px 10px',
                    borderRadius: '12px',
                    textTransform: 'capitalize',
                    fontSize: '0.9rem',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                  }}
                >
                  {t.type.name}
                </span>
              ))}
            </div>
          </div>

          <div className="info-section">
            <h3>Abilities</h3>
            <ul>
              {data.abilities.map((a) => (
                <li key={a.ability.name}>{a.ability.name.replace("-", " ")}</li>
              ))}
            </ul>
          </div>

          <div className="info-section stats-section">
            <h3>Base Stats</h3>
            {data.stats.map((s) => (
              <div key={s.stat.name} className="stat-row">
                <span className="stat-name">
                  {s.stat.name.replace("-", " ")}
                </span>
                <span className="stat-value">
                  <b>{s.base_stat}</b>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}