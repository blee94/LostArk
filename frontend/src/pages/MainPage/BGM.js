import React, { useState, useRef, useEffect } from 'react';
import '../../css/BGM.css';

const BGM = () => {
  const audioPlayer = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  // progress bar 클릭 이벤트 핸들러
  const handleProgressBarClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const progressBarWidth = e.target.clientWidth;
    const seekTime = (offsetX / progressBarWidth) * duration;

    audioPlayer.current.currentTime = seekTime;
  };
  const [playlist, setPlaylist] = useState([
    {
      id: 1,
      title: 'Sailing the Dream',
      src: '/playlist/vol1_01_Sailing the Dream.wav',
      image: '/img/audioImg1.png',
    },
    {
      id: 2,
      title: 'Leonhart',
      src: '/playlist/vol1_02_Leonhart.wav',
      image: '/img/audioImg2.png',
    },
    {
      id: 3,
      title: "Aman's Theme",
      src: "/playlist/vol1_03_Aman's Theme.wav",
      image: '/img/audioImg3.png',
    },
    {
      id: 4,
      title: 'The Castle of Luteran',
      src: '/playlist/vol1_04_The Castle of Luteran.wav',
      image: '/img/audioImg4.png',
    },
    {
      id: 5,
      title: "Silian's Theme",
      src: "/playlist/vol1_05_Silian's Theme.wav",
      image: '/img/audioImg5.png',
    },
    {
      id: 6,
      title: "Karmain's Theme",
      src: "/playlist/vol1_06_Karmain's Theme.wav",
      image: '/img/audioImg6.png',
    },
    {
      id: 7,
      title: 'Into the Wider World',
      src: '/playlist/vol1_07_Into the Wider World.wav',
      image: '/img/audioImg7.png',
    },
    {
      id: 8,
      title: 'The Ark',
      src: '/playlist/vol1_08_The Ark.wav',
      image: '/img/audioImg8.png',
    },
    {
      id: 9,
      title: 'Glory of Luteran',
      src: '/playlist/vol1_09_Glory of Luteran.wav',
      image: '/img/audioImg9.png',
    },
    {
      id: 10,
      title: 'Leonhart X-mas Ver',
      src: '/playlist/vol1_10_Leonhart X-mas Ver.wav',
      image: '/img/audioImg10.png',
    },
    {
      id: 11,
      title: 'Loarune',
      src: '/playlist/vol1_11_Loarune.wav',
      image: '/img/audioImg11.png',
    },
    {
      id: 12,
      title: 'Waltz of the Flower',
      src: '/playlist/vol1_12_Waltz of the Flower.wav',
      image: '/img/audioImg12.png',
    },
    {
      id: 13,
      title: 'The Great Castle',
      src: '/playlist/vol1_13_The Great Castle.wav',
      image: '/img/audioImg13.png',
    },
    {
      id: 14,
      title: 'Faten',
      src: '/playlist/vol1_14_Faten.wav',
      image: '/img/audioImg14.png',
    },
    {
      id: 15,
      title: 'Prelude',
      src: '/playlist/vol2_01_Prelude.wav',
      image: '/img/audioImg15.png',
    },
    {
      id: 16,
      title: 'Tale of Pletze',
      src: '/playlist/vol2_02_Tale of Pletze.wav',
      image: '/img/audioImg16.png',
    },
    {
      id: 17,
      title: 'Neria Pub',
      src: '/playlist/vol2_03_Neria Pub.wav',
      image: '/img/audioImg17.png',
    },
    {
      id: 18,
      title: 'Mokoko Village',
      src: '/playlist/vol2_04_Mokoko Village.wav',
      image: '/img/audioImg18.png',
    },
    {
      id: 19,
      title: 'Heart of Krater',
      src: '/playlist/vol2_05_Heart of Krater.wav',
      image: '/img/audioImg19.png',
    },
    {
      id: 20,
      title: 'Starlight Island',
      src: '/playlist/vol2_06_Starlight Island.wav',
      image: '/img/audioImg20.png',
    },
    {
      id: 21,
      title: 'Club Avenue',
      src: '/playlist/vol2_07_Club Avenue.wav',
      image: '/img/audioImg21.png',
    },
    {
      id: 22,
      title: 'Tears of the Glacier Island',
      src: '/playlist/vol2_08_Tears of the Glacier Island.wav',
      image: '/img/audioImg22.png',
    },
    {
      id: 23,
      title: 'Calm Village',
      src: '/playlist/vol2_09_Calm Village.wav',
      image: '/img/audioImg23.png',
    },
    {
      id: 24,
      title: 'The House of Werner',
      src: '/playlist/vol2_10_The House of Werner.wav',
      image: '/img/audioImg24.png',
    },
    {
      id: 25,
      title: 'Ocean World',
      src: '/playlist/vol2_11_Ocean World.wav',
      image: '/img/audioImg25.png',
    },
    {
      id: 26,
      title: 'Club Heartbeat',
      src: '/playlist/vol2_12_Club Heartbeat.wav',
      image: '/img/audioImg26.png',
    },
    {
      id: 27,
      title: 'Nostalgia',
      src: '/playlist/vol2_13_Nostalgia.wav',
      image: '/img/audioImg27.png',
    },
    {
      id: 28,
      title: 'Romantic Weapon Musical Ver',
      src: '/playlist/vol2_14_Romantic Weapon Musical Ver.wav',
      image: '/img/audioImg28.png',
    },
    {
      id: 29,
      title: 'Liebeheim',
      src: '/playlist/vol2_15_Liebeheim.wav',
      image: '/img/audioImg29.png',
    },
    {
      id: 30,
      title: 'The New Beginning',
      src: '/playlist/vol3_01_The New Beginning.wav',
      image: '/img/audioImg30.png',
    },
    {
      id: 31,
      title: 'Consolation',
      src: '/playlist/vol3_02_Consolation.wav',
      image: '/img/audioImg31.png',
    },
  ]);
  const [currentTrack, setCurrentTrack] = useState(playlist[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  // 음악 재생 아이콘 부분
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
  // -----------------------

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

  useEffect(() => {
    if (audioPlayer.current) {
      const updateTime = () => {
        setCurrentTime(audioPlayer.current.currentTime);
        setDuration(audioPlayer.current.duration);
      };

      audioPlayer.current.addEventListener('timeupdate', updateTime);

      return () => {
        // Check if audioPlayer.current exists before removing the event listener
        if (audioPlayer.current) {
          audioPlayer.current.removeEventListener('timeupdate', updateTime);
        }
      };
    }
  }, [audioPlayer]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const calculateProgress = () => {
    if (duration > 0) {
      return (currentTime / duration) * 100;
    }
    return 0;
  };

  return (
    <div className='bgmContainer'>
      <div className='BoxImg'>
        <img src={currentTrack.image} alt={currentTrack.title} />
      </div>
      <div className='musicPlayer'>
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

        <div className='musicTool'>
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

          <div className='progressBar' onClick={handleProgressBarClick}>
            <div
              className='progress'
              style={{ width: `${calculateProgress()}%` }}
            />
          </div>
          <div className='timeDisplay'>
            <span>{formatTime(currentTime)}</span>
            <span> / {formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BGM;
