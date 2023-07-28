import { Avatar } from './Avatar.jsx';
import { Comment } from './Comment.jsx';
import styles from './Post.module.css';

export function Post() {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://avatars.githubusercontent.com/u/83894791?v=4"/>
          <div className={styles.authorInfo}>
            <strong>Thales Luiz</strong>
            <span>Estudante Web</span>
          </div>
        </div>

        <time title='30 de maio às 20:10h' dateTime='2023-05-30 20:10:00'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href=""> jane.design/doctorcare</a></p>
        <p> 
          <a href="">#novoprojeto</a>
          <a href=""> #nlw </a>
          <a href=""> #rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder='Deixe seu comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.CommentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
