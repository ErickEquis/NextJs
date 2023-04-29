// Las paginas se crean dentro de directorios.
// La URL de la pagina será el nombre del archivo JS

import Link from "next/link";
import Head from 'next/head';

// Llamando a la funcion donde se manipularon datos
import { getSortedPostsData } from "../../lib/posts";

// Permite pre-rederizar el request
export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
      props: {
        allPostsData,
      },
    };
  }

// Se reciben los datos como parametro { allPostsData }
export default function FirstPost({ allPostsData }) {
    return (
        <>
        <Head>
            <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <h2>
            <Link href="/">← Back to home</Link>
        </h2>

        {/* Se mapean los datos */}
        <section>
          <h2>Blog</h2>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
            ))}
          </ul>
        </section>
        
        </>
        );
  }