"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../button/Button";

const defaultGenres = [
  {
    genreId: 1,
    genreName: "Classic",
  },
  {
    genreId: 2,
    genreName: "90s",
  },
  {
    genreId: 3,
    genreName: "Modern",
  },
];

export const Genres = () => {
  const [genres, setGenres] = useState([]);
  const [isActive, setIsActive] = useState("");
  console.log(genres);
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_URL}/api/v1/genres/all`
        );
        setGenres(response.data);
      } catch (error) {
        console.error("Error fetching songs", error);
      }
    };
    fetchGenres();
  }, []);

  const DefaultGenres = () => {
    return defaultGenres.map((genre) => (
      <Button
        key={genre.genreId}
        onClick={() => setIsActive(genre.genreId)}
        className={`${
          isActive === genre.genreId ? "bg-genre-btn" : "bg-gray-500"
        } mr-2 rounded-xl w-20`}
      >
        {genre.genreName}
      </Button>
    ));
  };

  return <div>{(genres.length > 0 && genres.map()) || <DefaultGenres />}</div>;
};
