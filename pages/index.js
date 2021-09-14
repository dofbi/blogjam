import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { attributes, react as HomeContent } from '../content/home.md';

export default function Home() {
  let { title, date, ingredients } = attributes;
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello Jamstack !</title>
        <meta name="description" content="Jamstack, et puis quoi encore !" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {title}
        </h1>
        
        <HomeContent />

        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              <h2>{ingredient.name}</h2>
              <p>{ingredient.description}</p>
            </li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>
        Propulsé par toi, en {new Date(date).getFullYear()}
      </footer>
    </div>
  )
}
