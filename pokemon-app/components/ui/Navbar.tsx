import Image from "next/image"
// Libreria NextUI; similar a Bootstrap
import { Spacer, Text, useTheme } from "@nextui-org/react"

export const Navbar = () => {

  // 'Hook': permite hacer funcionales a los estados de React.
  const { theme } = useTheme()

  return (
    // Codigo CSS
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0x 20px',
        backgroundColor: theme?.colors.gray100.value
    }}>

        <Image
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'
            alt="icono de app"
            width={70}
            height={70}
        />

        <Text color='white' h2>P</Text>
        <Text color='white'h3>okémon</Text>
        <Spacer css={{flex: 1}}/>
        <Text color='white'h3>Favoritos</Text>
    </div>
  )
}
