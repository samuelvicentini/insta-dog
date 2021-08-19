import React from 'react';

import useFetch from '../../../Hooks/useFetch';
import FeedPhotosItem from './FeedPhotosItem';
import { PHOTOS_GET } from '../../../api';
import Error from '../../Helper/Error';
import Loading from '../../Helper/Loading';

import style from './style.module.css';

const FeedPhotos = ({ setModalPhoto, user, page, setInfinite }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page, total: 6, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < 3) setInfinite(false);
    }

    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${style.feed} animeLeft`}>
        {data.map(photo => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
