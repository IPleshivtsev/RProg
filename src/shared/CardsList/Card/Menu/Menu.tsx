import React from 'react';
import styles from './menu.css';
import {MenuIcon} from "../../../Icons";
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
          Menu
          ClosedButton
          </Dropdown>
      </div>
  );
}
