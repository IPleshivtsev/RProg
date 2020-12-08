import React from 'react';
import styles from './menu.css';
import {Icon, MenuIcon, MenuItem} from "../../../Icons";
import {Dropdown} from "../../../Dropdown";


export function Menu() {
  return (
      <div className={styles.menu}>
          <Dropdown
              button={
              <button className={styles.menuButton}>
                  <MenuIcon />
              </button>
          }
          >
              <div className={styles.dropdown}>
                  <ul>
                      <MenuItem iconName={"comment"} textButton={"Комментарии"} />
                      <MenuItem iconName={"share"} textButton={"Поделиться"} />
                      <MenuItem iconName={"hide"} textButton={"Скрыть"} />
                      <MenuItem iconName={"save"} textButton={"Сохранить"} />
                      <MenuItem iconName={"complain"} textButton={"Пожаловаться"} />
                  </ul>

                  <button className={styles.closeButton}>
                  Закрыть
                  </button>
              </div>
          </Dropdown>
      </div>
  );
}
