import React, {useContext} from 'react';
import styles from './searchblock.css';
import {UserBlock} from "./UserBlock";
import {userContext} from "../../context/userContext";

export function SearchBlock() {
    const {data, loading} = useContext(userContext);

  return (
      <div className={styles.searchBlock}>
        <UserBlock avatarSrc={data.iconImg} username={data.name} loading={loading}/>
      </div>
  );
}
