/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { SongCard } from "./songCard/SongCard";
import Button from "./button/Button";

const SongList = () => {
  const [songs, setSongs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [songsPerPage, setSongsPerPage] = useState(10);
  
  const fetchSongs = async (page) => {
    try {
      const response = await axios.get(
        `/api/v1/songs?page=${page}&size=${songsPerPage}`
      );
      setSongs(response.data.songs);
    } catch (error) {
      console.error("Error fetching songs", error);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSongsPerPageChange = (event) => {
    setSongsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  useEffect(() => {
    fetchSongs(currentPage);
  }, [currentPage]);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {(songs > 0 &&
          songs.map((song) => <SongCard key={idx} data={song} />)) || (
          <SongCard data={{}} />
        )}
      </div>

      <div className="flex justify-end items-center mt-4 gap-2">
        <Button
          onClick={handlePreviousPage}
          className="bg-primary-gradient text-white"
          type={"button"}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <div className="flex justify-between items-center">
          <div>
            <label htmlFor="songsPerPage" className="mr-2"></label>
            <select
              id="songsPerPage"
              value={songsPerPage}
              onChange={handleSongsPerPageChange}
              className="border border-gray-300 rounded p-2"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
          <div className="text-white ml-2">
            <span>
              {currentPage} / {songs.length + 1}
            </span>
          </div>
        </div>
        <Button
          onClick={handleNextPage}
          className="bg-primary-gradient text-white"
          disabled={currentPage === songs.length + 1}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default SongList;
