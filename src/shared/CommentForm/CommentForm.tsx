import React, {ChangeEvent, FormEvent, useState} from 'react';
import styles from './commentform.css';
import {useFormik} from 'formik';
import {useDispatch} from "react-redux";
import {createEvent, createStore} from "effector";
import { useStore } from 'effector-react';

const updateComment = createEvent<string>();

const $comment = createStore('Привет из Effector')
    .on(updateComment, (_, newValue) => newValue);

$comment.watch((state) => {
    console.log('state', state);
})

export function CommentForm() {
    const value = useStore($comment);

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

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        updateComment(event.target.value);
    }

    function validateValue() {
        if (value.length <= 3) return 'Введите больше 3-х символов';
        return '';
    }

  return (
      <form className={styles.form} onSubmit={handleSubmit} >
          <textarea
              id="comment"
              name="comment"
              className={styles.input}
              onChange={handleChange}
              value={value}
              aria-invalid={valueError ? 'true' : undefined}
          />
          {touched && valueError && (<div>{valueError}</div>)}
          <button type="submit" className={styles.button}>Комментировать</button>
      </form>
  );
}
