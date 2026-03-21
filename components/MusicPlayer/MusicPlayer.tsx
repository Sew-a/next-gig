"use client";
import { useState, useRef, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import "./styles.scss";
import { MusicFile } from "./types";

export default function MusicPlayer() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  const {
    data: musicData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["musicFiles"],
    queryFn: () =>
      fetch(`/api/music`).then((res) => res.json() as Promise<MusicFile[]>),
  });

  //  audio handling functions
  const setPlayCurrentSong = (index: number) => {
    if (index === currentSongIndex) {
      if (audioRef.current?.paused) {
        audioRef.current?.play();
        setIsPlaying(true);
      } else {
        audioRef.current?.pause();
        setIsPlaying(false);
      }
      return;
    }

    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  const prevSong = () => {
    if (!musicData) return;
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + musicData.length) % musicData.length,
    );
  };

  const nextSong = () => {
    if (!musicData) return;
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % musicData.length);
  };

  useEffect(() => {
    if (!musicData) return;
    audioRef.current?.load();
    if (isPlaying) audioRef.current?.play();
  }, [currentSongIndex, musicData, isPlaying]);

  return (
    <section className="music-list-section">
      <div className="music-header">
        <button className="nav-btn" onClick={prevSong}>
          ◀
        </button>
        <button className="nav-btn" onClick={nextSong}>
          ▶
        </button>
      </div>

      {isLoading ? (
        <p className="status">Loading music...</p>
      ) : error ? (
        <p className="status">Error loading music.</p>
      ) : (
        <>
          <audio
            ref={audioRef}
            src={musicData?.[currentSongIndex].url}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          <div className="music-grid">
            {musicData?.map((file, index) => (
              <div
                key={file.id}
                className="music-card"
                onClick={() => setPlayCurrentSong(index)}
              >
                <div className="music-card__cover" />
                <div className="music-card__info">
                  <h3 className="music-card__title">{file.name}</h3>
                </div>
              </div>
            ))}
            <div className="last-block">
              <p className="music-data">
                We want the airwaves back <br />
                We want the airwaves back <br />
                We dont just want transmission <br /> We want...
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
