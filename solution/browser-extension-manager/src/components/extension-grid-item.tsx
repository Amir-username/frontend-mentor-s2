export default function ExtensionGridItem() {
  return (
    <div className="extension-item">
      <div className="extension-header">
        <img src="../assets/images/logo-console-plus.svg" alt="avatar" />
        <div className="extension-info">
          <h3>DevLens</h3>
          <p>Quickly inspect page layouts and visualize element boundaries.</p>
        </div>
      </div>
      <div className="extension-footer">
        <button>Remove</button>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}
