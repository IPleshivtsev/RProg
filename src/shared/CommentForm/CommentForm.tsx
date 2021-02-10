import React from 'react';
import styles from './commentform.css';
import {useFormik} from 'formik';
import {useDispatch} from "react-redux";
import {updateComment} from "../../store/reducer";
import {makeAutoObservable} from "mobx";
import {observer} from "mobx-react-lite";

class Comment {
    value = 'Привет из MobX';

    constructor() {
        makeAutoObservable(this);
    }

    updateValue(newValue: string) {
        this.value = newValue;
    }
}

const myComment = new Comment();

export const CommentForm = observer(() => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            comment: ''
        },
        validate: values => {
            const errors = {} as {comment?: string};
            if (!myComment.value) {
                errors.comment = 'Поле обязательно для заполнения';
            } else if (myComment.value.length <= 3) {
                errors.comment = 'Введите больше 3-х символов';
            }
            return errors;
        },
        onSubmit: values => {
            myComment.updateValue(myComment.value);
            dispatch(updateComment(myComment.value));
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
              value={myComment.value}
              aria-invalid={formik.errors.comment ? 'true' : undefined}
          />
          {formik.touched.comment && formik.errors.comment && (<div>{formik.errors.comment}</div>)}
          <button type="submit" className={styles.button}>Комментировать</button>
      </form>
  );
})
