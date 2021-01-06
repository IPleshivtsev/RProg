import React, {useEffect, useRef} from 'react';
import styles from './dropdown.css';
import ReactDOM from "react-dom";

interface IDropdownProps {
  children: React.ReactNode;
  onClose?: () => void;
  parId: string;
}

export function Dropdown({children, onClose, parId}: IDropdownProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if(event.target instanceof Node && !ref.current?.contains(event.target))
            {
                onClose?.();
            }
        }

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, []);

  const node = document.querySelector(`#${parId}`);
  if (!node) return null;

  return ReactDOM.createPortal((
      <div className={styles.container} ref={ref}>
          <div className={styles.listContainer}>
              <div className={styles.list}>
                  { children }
              </div>
          </div>
      </div>
  ), node);
}
