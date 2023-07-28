import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/thalesluiz45.png',
      name: 'Thales Luiz',
      role: 'Estudante'
    }
  }
]

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          <Post 
            author='Thales Luiz'
            content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, atque. Iure, expedita porro quasi voluptatibus voluptatem consectetur, magni eos minima mollitia praesentium eius voluptates quia necessitatibus ab tempore recusandae harum.'
          />
          <Post 
            author='Fulano'
            content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, atque. Iure, expedita porro quasi voluptatibus voluptatem consectetur, magni eos minima mollitia praesentium eius voluptates quia necessitatibus ab tempore recusandae harum.'
          />
        </main>
      </div>
    </div>
  )
}

