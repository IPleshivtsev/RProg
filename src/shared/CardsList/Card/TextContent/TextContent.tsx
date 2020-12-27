import React from 'react';
import styles from './textcontent.css';

interface ITextContent {
    author: string;
    title: string;
    url: string;
    created?: string;
}

export function TextContent({author, title, url, created}: ITextContent) {
  return (
      <div className={styles.textContent}>
        <div className={styles.metaData}>
          <div className={styles.userLink}>
            <img
                className={styles.avatar}
                src="https://avatars.mds.yandex.net/get-zen_doc/28064/pub_5a62fa1c482677a2e649388c_5a62fa379b403c54425784e3/scale_1200"
                alt="avatar"
            />
            <a href="#user-url" className={styles.userName}>{author}</a>
          </div>
          <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано </span>
              {created}
        </span>
        </div>
        <h2 className={styles.title}>
          <a href={url} className={styles.postLink}>
              {title}
          </a>
        </h2>
      </div>
  );
}
