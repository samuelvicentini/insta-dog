import React from 'react';

import Button from '../../../components/Form/Button';
import Input from '../../../components/Form/Input';
import useForm from '../../../Hooks/useForm';
import useFetch from '../../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../../api';
import Error from '../../../components/Helper/Error';

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, error, loading, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      });
      await request(url, options);
    }
  }

  return (
    <section>
      <h1 className='title'>Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label='Email / Usuário' type='text' name='email' {...login} />
          {loading ? (
            <Button disabled>Enviando</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
