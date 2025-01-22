
import styles from "./page.module.css";
import ListStackAssets from "@/components/ListStack/ListStackAssets";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <ListStackAssets/>
            </main>
        </div>
    );
}
