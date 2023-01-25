import React, { useState, useRef, useEffect } from 'react';

export const Search = (props) => {
  const artists = [
    'eminem',
    'katy perry',
    'taylor swift',
    'imagin dragon',
    'linkin park',
    '21 pilots',
    'AJR',
    'Rhihana',
    'hailee steinfield',
    'jhonas blue',
    'zara larson',
  ];
  const initializeState = () => {
    return artists;
  };

  const [artistList, setArtistList] = useState(initializeState);
  const [searchTerm, setSearchTerm] = useState('');

  const counterRef = useRef(0);
  useEffect(() => {
    counterRef.current = counterRef.current + 1;
  }, []);

  const setArtistListHandler = (searchName) => {
    setArtistList((prevList) =>
      artists.filter((name) =>
        name.toLowerCase().includes(searchName.toLowerCase())
      )
    );
  };

  let timer = null;
  useEffect(() => {
    timer = setTimeout(() => {
      setArtistListHandler(searchTerm);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  return (
    <>
      <div className="mx-3 h3">Rendered: {counterRef.current} times</div>
      <input
        placeholder="Enter artist name"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm((prev) => e.target.value);
        }}
      />

      <ul className="list-unstyled">
        {artistList.map((artist) => (
          <li key={artist}>{artist}</li>
        ))}
      </ul>
    </>
  );
};
