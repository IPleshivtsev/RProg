import React from 'react';
import styles from './preview.css';

interface IPreview {
    url?: string
}

export function Preview({url}: IPreview) {
  return (
      <div className={styles.preview}>
        <img
            className={styles.previewImg}
            src={url || 'https://granatblack.ru/local/templates/granatblack/components/bitrix/catalog/catalog_restoraunt/bitrix/catalog.element/.default/images/tile-empty.jpg'}
        />
      </div>
  );
}
