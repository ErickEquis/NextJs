import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { NextPage, GetStaticProps } from 'next'
import { Layout } from '../../components/layouts';
import { pokeApi } from '../../api';
import { PokemonListResponse, SmallPokemon } from '../../interfaces';

const inter = Inter({ subsets: ['latin'] })

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Listado pokemons'>

      <ul>
        {
          pokemons.map( ({ id, name }) => (
            <li key={ id }>
              # { id } - { name }
            </li>
          ))
        }
      </ul>

    </Layout>
  )
  
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  console.log(data);

  const pokemons: SmallPokemon[] = data.results.map( (poke, i) => ({
    ...poke,
    id: (i + 1),
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`
  }))

  return {
    props: {
      pokemons: data.results
    }
  }
}

export default Home;
