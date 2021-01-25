import React from 'react';
import styles from './commentform.css';
import {useFormik} from 'formik';

export function CommentForm() {

    const formik = useFormik({
        initialValues: {
            comment: ''
        },
        validate: values => {
            const errors = {} as {comment?: string};
            if (!values.comment) {
                errors.comment = 'Поле обязательно для заполнения';
            } else if (values.comment.length <= 3) {
                errors.comment = 'Введите больше 3-х символов';
            }
            return errors;
        },
        onSubmit: values => {
            alert('Форма отправлена!');
        }
    });

  return (
      <form className={styles.form} onSubmit={formik.handleSubmit} >
          <textarea
              id="comment"
              name="comment"
              className={styles.input}
              onChange={formik.handleChange}
              value={formik.values.comment}
              aria-invalid={formik.errors.comment ? 'true' : undefined}
          />
          {formik.touched.comment && formik.errors.comment && (<div>{formik.errors.comment}</div>)}
          <button type="submit" className={styles.button}>Комментировать</button>
      </form>
  );
}
