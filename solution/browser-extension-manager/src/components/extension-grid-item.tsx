import styles from "./extension-grid-item.module.css"
import Avatar from "../../../../assets/images/logo-markup-notes.svg"

export default function ExtensionGridItem() {
  return (
    <div className={styles.gridItem}>
      <div className={styles.extensionHeader}>
        <img src={Avatar} alt="avatar" />
        <div className={styles.extensionInfo}>
          <div>DevLens</div>
          <p>Quickly inspect page layouts and visualize element boundaries.</p>
        </div>
      </div>
      <div className={styles.extensionFooter}>
        <button>Remove</button>
        <label className={styles.switch}>
          <input type="checkbox" />
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  );
}
