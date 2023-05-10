// '[id]' permite tomar un identificar del codigo para generar n paginas

import { useState } from 'react';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { pokeApi } from '../../../api';
import { Layout } from '../../../components/layouts'
import { Pokemon } from '../../../interfaces';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { localFavorite } from '../../../utils';

// Interfaz para tipado TS
interface Props{
  pokemon: Pokemon
}

// Genera paginas con informacion con 'id' y 'name' de cada pokemon
// Desestructuracion de 'props' necesarios 
const PokemonPage: NextPage<Props> = ({ pokemon }) => {

  const [isInFavorites, setisInFavorites] = useState( localFavorite.existInFavorite( pokemon.id ) )

  // Guarda al pokemon en 'favoritos'
  const onToggleFavorite = () => {
    // Importa funcion 'toggleFavorite' de 'localFavorite' pasando prop 'id'
    localFavorite.toggleFavorite( pokemon.id )
  }

  return (
    // 'Layout': componente creado
    // Muestra el titulo con el nombre del pokemon
    <Layout title={ pokemon.name }>
      {/* Estilo para cartas pokemon */}
      <Grid.Container css={{ marginTop: '3px' }} gap={ 2 }>
        {/* Carta principal */}
        <Grid xs={ 12 } sm={ 4 }>
          <Card isHoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={ pokemon.sprites.other?.dream_world.front_default || '/no-image.png' }
                alt={ pokemon.name }
                width= '100%'
                height={ 200 }
                />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={ 12 } sm={ 8 }>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform='capitalize' >{ pokemon.name }</Text>
              <Button 
                color={'gradient'}           
                ghost={ !isInFavorites }
                // Agrega funcion 'onToggleFavorite' en el boton y se ejecuta cuando se presiona
                onPress={ onToggleFavorite }
              >
                Guardar en favoritos
              </Button>
            </Card.Header>
            {/* Cartas secundarias */}
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction='row' display='flex' gap={ 0 }>
                <Image
                src={pokemon.sprites.front_default}
                alt={ pokemon.name}
                width={ 100 }
                height={ 100 }
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={ pokemon.name}
                  width={ 100 }
                  height={ 100 }
                  />
                <Image
                src={pokemon.sprites.front_shiny}
                alt={ pokemon.name}
                width={ 100 }
                height={ 100 }
                />
                <Image
                src={pokemon.sprites.back_shiny}
                alt={ pokemon.name}
                width={ 100 }
                height={ 100 }
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}


// Al ser [id] dinamico se utiliza 'GetStaticPaths' para generar rutas estaticas (pre-renderizar).
// Se ejecuta en el lado del servidor y en 'build time'
// Se crean primero las paginas y despues recibiran los argumentos para su presentacion
export const getStaticPaths: GetStaticPaths = async (ctx) => {

  // Funcion que crea un arreglo de 1 al 151
  const pokemon151 = [...Array(151)].map( ( value, index ) => `${ index + 1 }`)

  return {
    // Cantidad de paginas que se crearan
    paths: pokemon151.map( id => ({
      // Parametro que recibira [id] (deben ser 'string' por ser URL)
      params: { id }
    })),
    // Manda 'erro404' si se ingresa a una URL no encontrada
    fallback: false
  }
}

// Destructuracion de ctx (contexto). Recibe los id
export const getStaticProps: GetStaticProps = async ( { params } ) => {

  // Creando variable 'id' que viene de ctx destructurada y tipada como string
  const { id } = params as { id: string }

  // 'data' contiene a los pokemons con todos los atributos debido a interfaz 'Pokemon'
  // La URL sera consultada con argumento de [id]
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ id }`)

  return {
    props: {
      // Objeto 'pokemon' contenido en 'data'
      pokemon: data
    }
  }
}

export default PokemonPage