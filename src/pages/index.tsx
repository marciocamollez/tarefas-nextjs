import Head from 'next/head';
import { GetStaticProps } from 'next';
import styles from '../styles/style.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Board - Organizando suas Tarefas</title>
      </Head>
    
      <main className={styles.contentContainer}>
        <img src="/images/board-user.svg" alt="Ferramenta Board" />

        <section className={styles.callToAction}>
          <h1>Uma ferramenta para o seu dia a dia. Escreva, planeje, organize.</h1>
          <p>
            <span>100% Gratuita</span> e online
          </p>
        </section>

        <div className={styles.donaters}>
          <img src="https://sujeitoprogramador.com/steve.png" alt="Apoiador" />
        </div>

      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return{
    props: {

    },
    revalidate: 60 * 60 // Atualiza a cada 60 min
  }
}