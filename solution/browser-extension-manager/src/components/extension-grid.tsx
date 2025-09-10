import ExtensionGridItem from "./extension-grid-item";
import styles from "./extension-grid.module.css"


export default function ExtensionGrid() {
  return (
    <div className={styles.grid}>
      <ExtensionGridItem />
      <ExtensionGridItem />
      <ExtensionGridItem />
      <ExtensionGridItem />
    </div>
  );
}
