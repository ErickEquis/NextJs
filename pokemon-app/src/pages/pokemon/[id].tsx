// '[id]' permite tomar un identificar del codigo para generar n paginas

import React from 'react'
import { Layout } from '../../../components/layouts'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';

// Interfaz para tipado TS
interface Props{
  id: string,
  name: string
}

// Genera paginas con informacion con 'id' y 'name' de cada pokemon
// Desestructuracion de 'props' necesarios 
const PokemonPage: NextPage<Props> = ({ id, name }) => {
  return (
    // 'Layout': componente creado
    <Layout title='Algun pokemon'>
        {/* Recibe 'props' */}
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