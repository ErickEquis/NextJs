import '<erick>/styles/globals.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import type { AppProps } from 'next/app'
import { lightTheme, darkTheme } from '../../themes'


export default function App({ Component, pageProps }: AppProps) {
  return (
    // Componente que aplica el tema
    <ThemeProvider theme={ darkTheme }>
      {/* Componente necesario para mostrar tema */}
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
    )
}
