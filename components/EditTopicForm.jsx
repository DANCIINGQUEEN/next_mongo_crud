import styles from './components.module.css'
export default function EditTopicForm() {
    return (
        <form className={styles.editForm}>
            <input className={styles.editInput} type="text" placeholder="Topic Title" />
            <input className={styles.editInput} type="text" placeholder="Topic Description" />
            <button className={styles.editButton}>Update Topic</button>
        </form>
    )
}