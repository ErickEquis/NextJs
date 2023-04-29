// Realiza una carga global de CSS
// Solo se puede hacer en pages/_app.js
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}