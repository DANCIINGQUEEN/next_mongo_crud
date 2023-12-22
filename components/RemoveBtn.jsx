import {HiOutlineTrash} from 'react-icons/hi'
import styles from './components.module.css'
export default function RemoveBtn() {
    return (
        <button className={styles.deleteButton}><HiOutlineTrash size={24}/></button>
    )
}