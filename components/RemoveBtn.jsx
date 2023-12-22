'use client'
import {HiOutlineTrash} from 'react-icons/hi'
import { useRouter } from 'next/navigation'
import styles from './components.module.css'
import {apiUrl} from '../app/api/api'
export default function RemoveBtn({id}) {
    const router=useRouter()
    const removeTopic = async () => {
        const confirmed=confirm("Are you sure you want to delete this topic?")
        if(confirmed){
            const res = await fetch(`${apiUrl}/topics?id=${id}`, {
                method: 'DELETE'
            })
            if(res.ok){
                router.refresh()
            }
        }
    }
    return (
        <button className={styles.deleteButton} onClick={removeTopic}><HiOutlineTrash size={24}/></button>
    )
}