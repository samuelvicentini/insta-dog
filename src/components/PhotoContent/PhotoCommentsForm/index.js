import React from 'react';

import useFetch from '../../../Hooks/useFetch';
import { ReactComponent as Enviar } from '../../../Assets/enviar.svg';
import { COMMENT_POST } from '../../../api';
import Error from '../../Helper/Error';

import style from './style.module.css';

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = React.useState('');
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });

    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment('');
      setComments(comments => [...comments, json]);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <textarea
        className={style.textarea}
        id='comment'
        name='comment'
        placeholder='Comente...'
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={style.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
