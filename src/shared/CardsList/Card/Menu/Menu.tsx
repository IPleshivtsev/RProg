import React from 'react';
import styles from './menu.css';
import {Icon} from "../../../Icons";
import {Dropdown} from "../../../Dropdown";
import {Text, EColors} from "../../../Text";
import {MenuItemsList} from "./MenuItemsList";

interface IMenu {
    idCard: string;
    isOpen?: boolean;
}

export function Menu({idCard, isOpen}: IMenu) {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);

    const handleOpen = () => {
        if(isOpen == undefined) {
            setIsDropdownOpen(!isDropdownOpen)
        }
    }

  return (
      <div className={styles.menu}>
          <button className={styles.menuButton} onClick={handleOpen}>
              <Icon IconName={"Menu"} Size={16} />
          </button>

          {isDropdownOpen && (

          <Dropdown onClose={() => {setIsDropdownOpen(false); }} parId={idCard}>
              <div className={styles.dropdown}>
                  <MenuItemsList postId={"1234"}/>
                  <button className={styles.closeButton}>
                  <Text mobileSize={12} size={14} color={EColors.grey66}>
                    Закрыть
                  </Text>
                  </button>
              </div>
          </Dropdown>)}
      </div>
  );
}
