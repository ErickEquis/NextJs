import Head from "next/head"
import { PropsWithChildren } from "react"
import { Navbar } from "../ui"

// Interfaz con Props tipados y extencion a 'PropsWithChildren', este permite 'children' en compenente funcional 'React.FC'
interface Props extends PropsWithChildren{
  title?: string
}


export const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
        {/* '<Head>' es componente propio de React y permite modficar '<head>' de HTML */}
        <Head>
            {/* Destructuracion: permite poner argumentos '{ props }' en codigo HTML */}
            <title> { title || 'Pokemon App' } </title>
            <meta name="author" content="Erick"/>
            <meta name="description" content={`Informacion sobre ${ title }`}/>
            <meta name="keywords" content={`${ title }, pokemon, pokedex`}/>
        </Head>

        {/* Componente propio */}
        <Navbar />

        {/* Estilo CSS se usa como en HTML entre '{}' referentes a JS */}
        <main style={{
          padding: '0px 20px' 
        }}>
            {/* 'children': referencia el codigo (props) que se escribira entre etiquetas del componente */}
            { children }
        </main>
    </>
  )
}
