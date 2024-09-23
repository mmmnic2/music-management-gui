/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "./button/Button";
import { SongCardV4 } from "./songCard/SongCardV4";
import Tooltip from "./common/Tooltip";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SongList = () => {
  const [songs, setSongs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [songsPerPage, setSongsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  const fetchSongs = async (page) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/songs?page=${page}&size=${songsPerPage}`
      );
      setSongs(response.data.songs);
      setTotalPages(Math.ceil(response.data.totalCount / songsPerPage));
    } catch (error) {
      console.error("Error fetching songs", error);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
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
    const handleResize = () => {
      if (window.innerWidth < 425) {
        setSongsPerPage(2);
      } else if (window.innerWidth < 920) {
        setSongsPerPage(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    fetchSongs(currentPage);
  }, [currentPage, songsPerPage]);

  return (
    <div className="relative mb-2">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {songs.length > 0 ? (
          songs.map((song, idx) => <SongCardV4 key={idx} data={song} />)
        ) : (
          <>
            <SongCardV4
              song={"/assets/audio/See_tinh.mp3"}
              width="w-full"
              height="h-48"
            />
          </>
        )}
      </div>

      <div className="flex justify-end items-center mt-4 gap-2">
        <Tooltip content="Previous song">
          <button
            disabled={currentPage === 1}
            onClick={handlePreviousPage}
            className={`text-gray-500 ${
              currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </Tooltip>

        <div className="flex justify-between items-center">
          <div>
            <label htmlFor="songsPerPage" className="mr-2">
              Songs per page:
            </label>
            <select
              id="songsPerPage"
              value={songsPerPage}
              onChange={handleSongsPerPageChange}
              className="border-b-2 border-gray-300 rounded p-1 text-gray-700 focus:outline-none focus:border-gray-500 cursor-pointer"
            >
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
          <div className="text-white ml-2">
            <span>
              {currentPage} / {totalPages}
            </span>
          </div>
        </div>

        <Tooltip content="Next song">
          <button
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
            className={`text-gray-500 ${
              currentPage === totalPages
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default SongList;
