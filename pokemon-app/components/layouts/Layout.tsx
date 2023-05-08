import Head from "next/head"
import { PropsWithChildren } from "react"
import { Navbar } from "../ui"

interface Props extends PropsWithChildren{
  title?: string
}


export const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title> { title || 'Pokemon App' } </title>
            <meta name="author" content="Erick"/>
            <meta name="description" content={`Informacion sobre ${ title }`}/>
            <meta name="keywords" content={`${ title }, pokemon, pokedex`}/>
        </Head>

        <Navbar />

        <main style={{
          padding: '0px 20px' 
        }}>
            { children }
        </main>
    </>
  )
}
