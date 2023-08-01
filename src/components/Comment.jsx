import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment () {
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/thalesluiz45.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thales Luiz</strong>
              <time title='30 de maio às 20:10h' dateTime='2023-05-30 20:10:00'>Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom, parabéns 👏</p>
        </div>

        <footer>
          <button> 
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}