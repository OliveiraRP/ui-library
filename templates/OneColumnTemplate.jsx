import styles from "./OneColumnTemplate.module.css";

export function OneColumnTemplate({ header, children }) {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        {header}
        {children}
      </div>
    </div>
  );
}
