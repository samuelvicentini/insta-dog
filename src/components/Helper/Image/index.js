import React from 'react';

import style from './style.module.css';

const Image = ({ ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <div className={style.wrapper}>
      {skeleton && <div className={style.skeleton}></div>}
      <img onLoad={handleLoad} className={style.img} alt='' {...props} />
    </div>
  );
};

export default Image;
