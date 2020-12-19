import React from 'react';
import styles from './menuitemslist.css';
import {Icon} from "../../../../Icons";
import {EColors, Text} from "../../../../Text";

interface IMenuItemsListProps {
  postId: string;
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  return (
      <ul className={styles.menuItemsList}>
          <li className={styles.menuItemNoMobile} onClick={() => console.log(postId)}>
              <Icon IconName={"Comment"} Size={16} />
              <Text size={12} color={EColors.grey99}>Комментарии</Text>
          </li>
          <div className={styles.divider} />
          <li className={styles.menuItemNoMobile} onClick={() => console.log(postId)}>
              <Icon IconName={"Share"} Size={16} />
              <Text size={12} color={EColors.grey99}>Поделиться</Text>
          </li>
          <div className={styles.divider} />
          <li className={styles.menuItem} onClick={() => console.log(postId)}>
              <Icon IconName={"Block"} Size={16} />
              <Text size={12} color={EColors.grey99}>Скрыть</Text>
          </li>
          <div className={styles.divider} />
          <li className={styles.menuItemNoMobile} onClick={() => console.log(postId)}>
              <Icon IconName={"Save"} Size={16} />
              <Text size={12} color={EColors.grey99}>Сохранить</Text>
          </li>
          <div className={styles.divider} />
          <li className={styles.menuItem}>
              <Icon IconName={"Warning"} Size={16} />
              <Text size={12} color={EColors.grey99}>Пожаловаться</Text>
          </li>
      </ul>
  );
}
