import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import styles from "./components.module.css";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (err) {
    console.log("err", err);
  }
};

export default async function TopicsList() {
  const { topics } = await getTopics();
  return (
    <>
      {topics.map(topic => (
        <div className={styles.topicContainer} key={topic._id}>
          <div>
            <div className={styles.topicTitle}>{topic.title}</div>
            <div>{topic.description}</div>
          </div>
          <div>
            <RemoveBtn id={topic._id}/>
            <Link href={`/editTopic/${topic._id}`} className={styles.button}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
