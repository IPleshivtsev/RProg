import React from 'react';
import {Break} from '../../../Break';
import {EColors, Text} from '../../../Text';
import styles from './userblock.css';
import {Icon} from "../../../Icons";

interface IUserBlockProps {
  avatarSrc?: string
  username?: string
  loading?: boolean
}

export function UserBlock({ avatarSrc, username, loading }: IUserBlockProps) {
  return (
      <a
          href="https://www.reddit.com/api/v1/authorize?client_id=1UllBdBhYKgJcg&response_type=code&state=random_string&redirect_uri=https://www.skillbox-reactapp.herokuapp.com/auth&duration=permanent&scope=read submit identity"
          className={styles.userBox}
      >
        <div className={styles.avatarBox}>
          {avatarSrc
          ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage} />
          : <Icon IconName={"Anon"} Size={50}/>
          }
        </div>

        <div className={styles.username}>
          <Break size={12} />
          {loading ? (
              <Text size={20} color={EColors.grey99}>Загрузка...</Text>
              )
          : (
              <Text size={20} color={username ? EColors.black : EColors.grey99}>{username || 'Аноним'}</Text>
              )
          }
        </div>
      </a>
  );
}
