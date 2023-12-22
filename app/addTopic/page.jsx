"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./addTopic.module.css";
import {apiUrl} from "../api/api";
export default function AddTopic() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router=useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!title || !description){
        alert("Please fill out all fields")
        return
    }
    try{
        const res = await fetch(`${apiUrl}/topics`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, description})
        })    
        if(res.ok){
            router.push('/')
            router.refresh()
        }else{
            throw new Error('Failed to add topic')
        }
    }catch(err){
        console.log("err", err)
    }
  };
  return (
    <form className={styles.addForm} onSubmit={handleSubmit}>
      <input
        className={styles.addInput}
        type="text"
        placeholder="Topic Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        className={styles.addInput}
        type="text"
        placeholder="Topic Description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button className={styles.addButton} type="submit">
        Add Topic
      </button>
    </form>
  );
}
