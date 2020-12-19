import React from 'react';
import styles from './menu.css';
import {Icon} from "../../../Icons";
import {Dropdown} from "../../../Dropdown";
import {Text, EColors} from "../../../Text";
import {MenuItemsList} from "./MenuItemsList";


export function Menu() {
  return (
      <div className={styles.menu}>
          <Dropdown
              button={
              <button className={styles.menuButton}>
                  <Icon IconName={"Menu"} Size={16} />
              </button>
          }
          >
              <div className={styles.dropdown}>
                  <MenuItemsList postId={"1234"}/>
                  <button className={styles.closeButton}>
                  <Text mobileSize={12} size={14} color={EColors.grey66}>
                    Закрыть
                  </Text>
                  </button>
              </div>
          </Dropdown>
      </div>
  );
}
