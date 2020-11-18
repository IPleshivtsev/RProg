import React from 'react';
import styles from './textcontent.css';

export function TextContent() {
  return (
      <div className={styles.textContent}>
        <div className={styles.metaData}>
          <div className={styles.userLink}>
            <img
                className={styles.avatar}
                src="https://avatars.mds.yandex.net/get-zen_doc/28064/pub_5a62fa1c482677a2e649388c_5a62fa379b403c54425784e3/scale_1200"
                alt="avatar"
            />
            <a href="#user-url" className={styles.userName}>Дмитрий Гришин</a>
          </div>
          <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано </span>
            4 часа назад
        </span>
        </div>
        <h2 className={styles.title}>
          <a href="#post-url" className={styles.postLink}>
            Следует отметить, что новая модель организационной...
          </a>
        </h2>
      </div>
  );
}
