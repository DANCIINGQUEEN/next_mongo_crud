import styles from './addTopic.module.css'
export default function AddTopic(){
    return (
        <form className={styles.addForm}>
            <input className={styles.addInput} type="text" placeholder="Topic Title"/>
            <input className={styles.addInput} type="text" placeholder="Topic Description"/>
            <button className={styles.addButton}>Add Topic</button>
        </form>
    )
}