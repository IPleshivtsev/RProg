import React from 'react';
import styles from './userlink.css';

interface IUserLink {
  author: string;
}

export function UserLink({author}: IUserLink) {
  return (
      <div className={styles.userLink}>
        <img
            className={styles.avatar}
            src="https://avatars.mds.yandex.net/get-zen_doc/28064/pub_5a62fa1c482677a2e649388c_5a62fa379b403c54425784e3/scale_1200"
            alt="avatar"
        />
        <a href="#user-url" className={styles.userName}>{author}</a>
      </div>
  );
}
