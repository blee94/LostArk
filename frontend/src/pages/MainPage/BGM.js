import React, { useState, useRef, useEffect } from 'react';
import '../../css/BGM.css';

const BGM = () => {
  const audioPlayer = useRef(null);
  const [playlist, setPlaylist] = useState([
    {
      id: 1,
      title: 'Sailing the Dream',
      src: '/playlist/vol1_01_Sailing the Dream.wav',
      image: '/img/audioImg1.png',
    },
    { id: 2, title: 'Leonhart', src: '/playlist/vol1_02_Leonhart.wav' },
    { id: 3, title: "Aman's Theme", src: "/playlist/vol1_03_Aman's Theme.wav" },
    {
      id: 4,
      title: 'The Castle of Luteran',
      src: '/playlist/vol1_04_The Castle of Luteran.wav',
    },
    {
      id: 5,
      title: "Silian's Theme",
      src: "/playlist/vol1_05_Silian's Theme.wav",
    },
    {
      id: 6,
      title: "Karmain's Theme",
      src: "/playlist/vol1_06_Karmain's Theme.wav",
    },
    {
      id: 7,
      title: 'Into the Wider World',
      src: '/playlist/vol1_07_Into the Wider World.wav',
    },
    { id: 8, title: 'The Ark', src: '/playlist/vol1_08_The Ark.wav' },
    {
      id: 9,
      title: 'Glory of Luteran',
      src: '/playlist/vol1_09_Glory of Luteran.wav',
    },
    {
      id: 10,
      title: 'Leonhart X-mas Ver',
      src: '/playlist/vol1_10_Leonhart X-mas Ver.wav',
    },
    { id: 11, title: 'Loarune', src: '/playlist/vol1_11_Loarune.wav' },
    {
      id: 12,
      title: 'Waltz of the Flower',
      src: '/playlist/vol1_12_Waltz of the Flower.wav',
    },
    {
      id: 13,
      title: 'The Great Castle',
      src: '/playlist/vol1_13_The Great Castle.wav',
    },
    { id: 14, title: 'Faten', src: '/playlist/vol1_14_Faten.wav' },
    { id: 15, title: 'Prelude', src: '/playlist/vol2_01_Prelude.wav' },
    {
      id: 16,
      title: 'Tale of Pletze',
      src: '/playlist/vol2_02_Tale of Pletze.wav',
    },
    { id: 17, title: 'Neria Pub', src: '/playlist/vol2_03_Neria Pub.wav' },
    {
      id: 18,
      title: 'Mokoko Village',
      src: '/playlist/vol2_04_Mokoko Village.wav',
    },
    {
      id: 19,
      title: 'Heart of Krater',
      src: '/playlist/vol2_05_Heart of Krater.wav',
    },
    {
      id: 20,
      title: 'Starlight Island',
      src: '/playlist/vol2_06_Starlight Island.wav',
    },
    { id: 21, title: 'Club Avenue', src: '/playlist/vol2_07_Club Avenue.wav' },
    {
      id: 22,
      title: 'Tears of the Glacier Island',
      src: '/playlist/vol2_08_Tears of the Glacier Island.wav',
    },
    {
      id: 23,
      title: 'Calm Village',
      src: '/playlist/vol2_09_Calm Village.wav',
    },
    {
      id: 24,
      title: 'The House of Werner',
      src: '/playlist/vol2_10_The House of Werner.wav',
    },
    { id: 25, title: 'Ocean World', src: '/playlist/vol2_11_Ocean World.wav' },
    {
      id: 26,
      title: 'Club Heartbeat',
      src: '/playlist/vol2_12_Club Heartbeat.wav',
    },
    { id: 27, title: 'Nostalgia', src: '/playlist/vol2_13_Nostalgia.wav' },
    {
      id: 28,
      title: 'Romantic Weapon Musical Ver',
      src: '/playlist/vol2_14_Romantic Weapon Musical Ver.wav',
    },
    { id: 29, title: 'Liebeheim', src: '/playlist/vol2_15_Liebeheim.wav' },
    {
      id: 30,
      title: 'The New Beginning',
      src: '/playlist/vol3_01_The New Beginning.wav',
    },
    { id: 31, title: 'Consolation', src: '/playlist/vol3_02_Consolation.wav' },
  ]);
  const [currentTrack, setCurrentTrack] = useState(playlist[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const playPauseToggle = () => {
    if (isPlaying) {
      audioPlayer.current.pause();
    } else {
      audioPlayer.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNextTrack = () => {
    const currentIndex = playlist.findIndex(
      (track) => track.id === currentTrack.id
    );
    const nextIndex = (currentIndex + 1) % playlist.length;
    setCurrentTrack(playlist[nextIndex]);
    setIsPlaying(true);
  };

  const playPreviousTrack = () => {
    const currentIndex = playlist.findIndex(
      (track) => track.id === currentTrack.id
    );
    const previousIndex =
      (currentIndex - 1 + playlist.length) % playlist.length;
    setCurrentTrack(playlist[previousIndex]);
    setIsPlaying(true);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioPlayer.current.volume = newVolume;
  };
  useEffect(() => {
    audioPlayer.current.src = currentTrack.src;
    if (isPlaying) {
      audioPlayer.current.play();
    }
    audioPlayer.current.onended = () => {
      playNextTrack();
    };
  }, [currentTrack]);
  const playSelectedTrack = (selectedTrack) => {
    setCurrentTrack(selectedTrack);
    setIsPlaying(true);
  };
  return (
    <div>
      <div className='BoxImg'>
        <img src={currentTrack.image} alt={currentTrack.title} />
      </div>
      <h2>
        Music Player <span className='material-icons'>music_note</span>
      </h2>
      <audio ref={audioPlayer} src={currentTrack.src} volume={volume} />
      <div className='MusicTrackBox'>
        <ul>
          {playlist.map((track) => (
            <li
              key={track.id}
              className={currentTrack.id === track.id ? 'NowPlaying' : ''}
              onClick={() => playSelectedTrack(track)}
            >
              {track.title}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className='NowPlaying'>Now Playing: {currentTrack.title}</p>
        <button onClick={playPreviousTrack}>
          <span className='material-icons'>fast_rewind</span>
        </button>
        <button onClick={playPauseToggle}>
          {isPlaying ? (
            <span className='material-icons'>pause</span>
          ) : (
            <span className='material-icons'>play_arrow</span>
          )}
        </button>
        <button onClick={playNextTrack}>
          <span className='material-icons'>fast_forward</span>
        </button>
        <span className='material-icons'>volume_up</span>
        <input
          className='Volume'
          type='range'
          min='0'
          max='1'
          step='0.1'
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default BGM;
