import Link from 'next/link';
import styles from "./components.module.css";
export default function Navbar(){
    return(
        <nav className={styles.nav}>
            <Link href={'/'} className={styles.home}>Park Coding</Link>
            <Link href={'/addTopic'} className={styles.add}>Add Topic</Link>
        </nav>
    )
}