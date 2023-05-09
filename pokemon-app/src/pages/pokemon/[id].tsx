import React from 'react'
import { Layout } from '../../../components/layouts'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';

interface Props{
  id: string,
  name: string
}
const PokemonPage: NextPage<Props> = ({ id, name }) => {
  return (
    <Layout title='Algun pokemon'>
        <h1>{ id } - { name } </h1>
    </Layout>
  )
}



export const getStaticPaths: GetStaticPaths = async (ctx) => {

  return {
    // Cantidad de paginas que se crearan
    paths: [
      {
        params:{

        }
      }
    ],
    fallback: false
  }
}


export const getStaticProps: GetStaticProps = async (ctx) => {

  // const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  return {
    props: {
      id: 1,
      name: 'Squirtle'
    }
  }
}

export default PokemonPage