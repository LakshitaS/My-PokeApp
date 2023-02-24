import React, { useEffect, useState } from 'react'
import PokemonThumb from './PokemonThumb'
function About() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);
    console.log(data);

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
    // await console.log(allPokemons)
  };

  useEffect(() => {
    getAllPokemons();
  }, []);
  return (
    <div>
      <div className="app-contaner">
        {/* <h1>Pokemon Evolution</h1> */}

        {/* lmcs */}
        <div class="container-for-heading pokemon-galaxy">
          <div class="imageBox imageBefore">
            <img
              src="https://imgs.search.brave.com/lDCSEGb2BgiSyAEVfAa8Q4tTKNieWy65tAxSZDOIJ3w/rs:fit:1024:578:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mLzA1/NjA4MWQxLWY4OGMt/NGQxNi1iY2Q4LTg5/YmI0N2U1MDE0YS9k/ZDNjdzR3LWM0YTA0/MjAyLTMwMzgtNDIx/Zi04YjY2LTQxNjM5/ZWM0NzJiMi5wbmcv/djEvZmlsbC93XzEw/MjQsaF81Nzgsc3Ry/cC9wb2tlbW9uX2dh/bGF4eV9sb2dvX2J5/X3ByaW5jZV9nYWxh/eHlfZGQzY3c0dy1m/dWxsdmlldy5wbmc_/dG9rZW49ZXlKMGVY/QWlPaUpLVjFRaUxD/SmhiR2NpT2lKSVV6/STFOaUo5LmV5Snpk/V0lpT2lKMWNtNDZZ/WEJ3T2pkbE1HUXhP/RGc1T0RJeU5qUXpO/ek5oTldZd1pEUXhO/V1ZoTUdReU5tVXdJ/aXdpYVhOeklqb2lk/WEp1T21Gd2NEbzNa/VEJrTVRnNE9UZ3lN/alkwTXpjellUVm1N/R1EwTVRWbFlUQmtN/alpsTUNJc0ltOWlh/aUk2VzF0N0ltaGxh/V2RvZENJNklqdzlO/VGM0SWl3aWNHRjBh/Q0k2SWx3dlpsd3ZN/RFUyTURneFpERXRa/amc0WXkwMFpERTJM/V0pqWkRndE9EbGlZ/alEzWlRVd01UUmhY/QzlrWkROamR6UjNM/V00wWVRBME1qQXlM/VE13TXpndE5ESXha/aTA0WWpZMkxUUXhO/ak01WldNME56SmlN/aTV3Ym1jaUxDSjNh/V1IwYUNJNklqdzlN/VEF5TkNKOVhWMHNJ/bUYxWkNJNld5SjFj/bTQ2YzJWeWRtbGpa/VHBwYldGblpTNXZj/R1Z5WVhScGIyNXpJ/bDE5LkRlSXduS1Zx/T09Xd25JUUJqYzlV/OHhHWmlCaFRROG44/TEFZV3NCM2pibjQ"
              alt=""
            />
          </div>
          <div class="imageBox imageAfter">
            <img
              src="https://imgs.search.brave.com/QTUgaRmWWmMtLn5GAuFCN63DinF4aow_gZlVq13fEmw/rs:fit:1020:574:1/g:ce/aHR0cHM6Ly9pbWdp/eC5idXN0bGUuY29t/L2VsaXRlLWRhaWx5/LzIwMTUvMDcvMDYw/MTUzNTAvcG9rZW1v/bi5qcGc_dz0xMDIw/Jmg9NTc0JmZpdD1j/cm9wJmNyb3A9ZmFj/ZXMmYXV0bz1mb3Jt/YXQlMkNjb21wcmVz/cyZjcz1zcmdiJnE9/NzA"
              alt=""
            />
          </div>
        </div>
        <div className="pokemon-container">
          <div className="all-container">
            {allPokemons.map((pokemonStats, index) => (
              <PokemonThumb
                key={index}
                id={pokemonStats.id}
                image={pokemonStats.sprites.other.dream_world.front_default}
                name={pokemonStats.name}
                type={pokemonStats.types[0].type.name}
              />
            ))}
          </div>
          {/* <button className="load-more" onClick={() => getAllPokemons()}>Load more</button> */}

          <div class=" main sub-main">
            <button class="button-three" onClick={() => getAllPokemons()}>
              LOAD MORE...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
