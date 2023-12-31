import EditTopicForm from "@/components/EditTopicForm";
import { get } from "mongoose";
import {apiUrl} from "../../api/api";

const getTopicById=async(id)=>{
    try{
        const res=await fetch(`${apiUrl}/topics/${id}`,{
            cache: 'no-store'
        })
        if(!res.ok){
            throw new Error('Failed to fetch topic')
        }
        return res.json()
    }catch(e){
        console.log("e", e)
    }
}

export default async function editTopic({params}){
    const {id}=params
    const {topic}=await getTopicById(id)
    const {title, description}=topic
    return <EditTopicForm id={id} title={title} description={description}/>
}