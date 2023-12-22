'use client'
import styles from './components.module.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {apiUrl} from '../app/api/api'
export default function EditTopicForm({id, title, description}) {
    const [newTitle, setNewTitle]=useState(title)
    const [newDescription, setNewDescription]=useState(description)

    const router=useRouter()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const res=await fetch(`${apiUrl}/topics/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({newTitle,newDescription})
            })
            if(!res.ok){
                throw new Error('Failed to update topic')
            }
            router.push('/')
            router.refresh()
            
        }catch(err){
            console.log("err", err)
        }
    }
        
    return (
        <form className={styles.editForm} onSubmit={handleSubmit}>
            <input className={styles.editInput} type="text" placeholder="Topic Title"  onChange={e=>setNewTitle(e.target.value)} value={newTitle}/>
            <input className={styles.editInput} type="text" placeholder="Topic Description" onChange={e=>setNewDescription(e.target.value)} value={newDescription}/>
            <button className={styles.editButton}>Update Topic</button>
        </form>
    )
}