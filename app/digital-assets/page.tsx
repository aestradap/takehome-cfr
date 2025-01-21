import styles from "./page.module.css";
import DigitalAsset from "@/components/DigitalAssets/DigitalAsset";
import ListStackAssets from "@/components/ListStack/ListStackAssets";

export const metadata = {
    title: 'Main Page',
    description: 'Digital Assets List'
};

interface MainProps {
};

export default function DigitalAssets({props}: MainProps) {
    return <div className={styles.page}>
        <main className={styles.main}>
            <ListStackAssets/>
        </main>
    </div>

}