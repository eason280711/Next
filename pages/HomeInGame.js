import styles from '../styles/layout.module.css'
export default function Home({isLog,setLog,isGame,setGame}) {
  return (
    <>
      <div id={styles.pageintro} className={[styles.hoc,styles.clear,styles.hi].join(" ")}> 
          <article>
            <h3 className={styles.heading}>HOME IN GAME</h3>
          </article>
      </div>
    </>
  )
}