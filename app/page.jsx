import Image from 'next/image'
import styles from './page.module.css'
import TopicsList from '@/components/TopicsList'

export default function Home() {
  return (
    <>
      <TopicsList />
    </>
  )
}
