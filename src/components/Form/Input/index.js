import React from 'react';

import style from './style.module.css';

const Input = ({ label, type, name }) => {
  return (
    <div className={style.wrapper}>
      <label className={style.label} htmlFor={name}>
        {label}
      </label>
      <input className={style.input} id={name} name={name} type={type} />
      <p className={style.error}>Error</p>
    </div>
  );
};

export default Input;
