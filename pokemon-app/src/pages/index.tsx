import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { NextPage, GetStaticProps } from 'next'
import { Layout } from '../../components/layouts';
import { pokeApi } from '../../api';
import { PokemonListResponse, SmallPokemon } from '../../interfaces';
import { Grid } from '@nextui-org/react';
import { PokemonCard } from '../../components/pokemon';


const inter = Inter({ subsets: ['latin'] })

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {

  console.log(pokemons)

  return (
    <Layout title='Listado pokemons'>

      <Grid.Container gap={ 2 } justify='flex-start'>
        {
          pokemons.map( ( pokemon ) => (
            <PokemonCard key={ pokemon.id} pokemon={ pokemon }></PokemonCard>
          ))
        }
      </Grid.Container>

    </Layout>
  )
  
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  console.log(data)

  const pokemons: SmallPokemon[] = data.results.map( (poke, i) => ({
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
