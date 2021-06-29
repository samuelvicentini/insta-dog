import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';

import Input from '../../../components/Form/Input';
import Button from '../../../components/Form/Button';
import useForm from '../../../Hooks/useForm';
import Error from '../../../components/Helper/Error';

import style from './style.module.css';
import styleButton from '../../../components/Form/Button/style.module.css';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Login</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <Input label='Usário' type='text' name='username' {...username} />
        <Input label='Senha' type='password' name='password' {...password} />
        {loading ? (
          <Button disabled>Carregando</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={style.perdeu} to='/login/perdeu'>
        Perdeu a Senha?
      </Link>
      <div className={style.cadastro}>
        <h2 className={style.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={styleButton.button} to='/login/criar'>
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
