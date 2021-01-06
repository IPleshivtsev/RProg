import React, {useContext, useEffect, useRef} from 'react';
import styles from './comment.css';
import {UserLink} from "../../TextContent/UserLink";
import {EColors, Text} from "../../../../Text";
import {Icon} from "../../../../Icons";
import {userContext} from "../../../../context/userContext";

interface IComment {
  commentString: string;
  author?: string;
  isOpen?: boolean;
}

export function Comment({commentString = '', author, isOpen}: IComment) {
  const [isCommentsOpen, setIsCommentsOpen] = React.useState(isOpen);
  const ref = useRef<HTMLTextAreaElement>(null);

  const handleOpen = () => {
    if(isOpen == undefined) {
      setIsCommentsOpen(!isCommentsOpen)
      debugger;
    }
  }

  useEffect(() => {
    debugger;
    if(isCommentsOpen == true)
    {
      if(ref.current) {
        ref.current.focus();
        ref.current.value = `${author || 'Аноним'}, `
      }
    }
  });

  return (
      <div className={styles.comment}>
        <UserLink author={author || 'Аноним'} />
        <div style={{marginTop: '5px'}}>
          <Text size={14}>{commentString}</Text>
        </div>
        <div className={styles.commentButtons}>
          <button onClick={handleOpen}>
            <Icon IconName={"Comment"} Size={16} />
            <Text size={12} color={EColors.grey99} style={{verticalAlign: 'super', marginLeft: '3px'}}>Ответить</Text>
          </button>
          <button>
            <Icon IconName={"Share"} Size={16} />
            <Text size={12} color={EColors.grey99} style={{verticalAlign: 'super', marginLeft: '3px'}}>Поделиться</Text>
          </button>
          <button>
            <Icon IconName={"Warning"} Size={16} />
            <Text size={12} color={EColors.grey99} style={{verticalAlign: 'super', marginLeft: '3px'}}>Пожаловаться</Text>
          </button>
        </div>

        {isCommentsOpen && (
            <div style={{ marginBottom: '40px'}}>
              <textarea ref={ref} style={{ height: '50px', width: '100%', resize: 'none' }}/>
              <br/>
              <button className={styles.commentButton}>Ответить</button>
            </div>
        )}
      </div>
  );
}
