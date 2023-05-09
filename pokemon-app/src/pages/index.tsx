import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { NextPage, GetStaticProps } from 'next'
import { Layout } from '../../components/layouts';
import { pokeApi } from '../../api';
import { PokemonListResponse, SmallPokemon } from '../../interfaces';
import { Grid } from '@nextui-org/react';
import { PokemonCard } from '../../components/pokemon';

// 'index.tsx' es la pagina 'home' de la app
// Modularizar codigo es la mejor opcion para mantener 'index' mas legible

const inter = Inter({ subsets: ['latin'] })

// Props que contiene objeto 'pokemon' con interfaz 'SmallPokemon'
interface Props {
  pokemons: SmallPokemon[];
}

// Funcion 'Home' recibe modulos para la contruccion de la pagina.
const Home: NextPage<Props> = ({ pokemons }) => {

  console.log(pokemons)
  // 'return' todo lo que devolvera la app
  return (
    // 'Layout': componente (≈ modulos)   creado que recibe como parametro 'title'
    // Los componentes se escriben como etiquetas HTML
    <Layout title='Listado pokemons'>
      
      {/* 'Grid': componente propio de React que permite estilizar*/}
      <Grid.Container gap={ 2 } justify='flex-start'>
        {
          // 
          pokemons.map( ( pokemon ) => (
            <PokemonCard key={ pokemon.id} pokemon={ pokemon }></PokemonCard>
          ))
        }
      </Grid.Container>

    </Layout>
  )
  
}

// 'getStaticProps' permite pre-renderizar la API pokemon
export const getStaticProps: GetStaticProps = async (ctx) => {

  // 'data' consume API referenciando la URL y limitandola a 151 datos
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  console.log(data)

  // 'pokemons': mapeo de API
  const pokemons: SmallPokemon[] = data.results.map( (poke, i) => ({
    // se 'heredan' atributos de 'SmallPokemon'
    ...poke,
    id: (i + 1),
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`
  }))

  return {
    props: {
      pokemons
    }
  }
}

export default Home;
