import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Extensions List</h1>
      <div className={styles.tabs}>
        <div className={`${styles.tab} ${styles.active}`}>All</div>
        <div className={styles.tab}>Active</div>
        <div className={styles.tab}>Inactive</div>
      </div>
    </header>
  );
}
