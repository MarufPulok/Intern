import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from '../../styles/Anime.module.css';

const Anime = () => {
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState(false);
  const fallbackImage = '/fallback-image.jpg';

  const getImgs = async () => {
    try {
      const res = await axios.get('https://rickandmortyapi.com/api/character/');
      console.log(res.data)
      setUrls([...res.data.results.map((result) => result.image)]);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  useEffect(() => {
    getImgs();
  }, []);

  return (
    <div className={styles.container}>
      {error ? (
        <p>Error loading image</p>
      ) : (
        urls.map((url, index) => (
          <div className={styles.imageContainer} key={index}>
            <img
              className={styles.image}
              src={url}
              alt="waifu"
              onError={(e) => (e.target.src = fallbackImage)}
            />
            <div className={styles.overlay}>
              <p className={styles.text}>View Image</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Anime;
