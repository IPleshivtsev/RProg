import React, {ChangeEvent, FormEvent, useState} from 'react';
import styles from './commentform.css';
import {atom, useRecoilState} from "recoil";

const commentText = atom({
    key: 'commentText',
    default: 'Привет из Recoil',
});

export function CommentForm() {
    const [comment, setComment] = useRecoilState(commentText);

    const [touched, setTouched] = useState(false);
    const [valueError, setValueError] = useState('');

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        setTouched(true);
        setValueError(validateValue());

        const isFormValid = !validateValue();
        if (!isFormValid) return;

        alert('Форма отправлена!');
    }

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) =>  {
        setComment(event.target.value);
        console.log(event.target.value);
    }

    function validateValue() {
        if (comment.length <= 3) return 'Введите больше 3-х символов';
        return '';
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit} >
          <textarea
              id="comment"
              name="comment"
              className={styles.input}
              onChange={handleChange}
              value={comment}
              aria-invalid={valueError ? 'true' : undefined}
          />
            {touched && valueError && (<div>{valueError}</div>)}
            <button type="submit" className={styles.button}>Комментировать</button>
        </form>
    );
}
