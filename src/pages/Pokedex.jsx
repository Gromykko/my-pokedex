import { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";

export default function Pokedex() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 20;

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data.results));
  }, [offset]);

  return (
    <div className="pokedex-page">
      <h1>Pokédex</h1>

      <div className="pokemon-grid">
        {pokemon.map((p) => (
          <PokemonCard key={p.name} name={p.name} url={p.url} />
        ))}
      </div>

      <div className="pagination">
        <button
          disabled={offset === 0}
          onClick={() => setOffset(offset - limit)}
        >
          Previous
        </button>

        <span style={{ margin: "0 15px", fontWeight: "bold" }}>
          Page {Math.floor(offset / limit) + 1}
        </span>

        <button onClick={() => setOffset(offset + limit)}>Next</button>
      </div>
    </div>
  );
}
